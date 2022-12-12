import React from 'react'
import Slider from 'react-slick';
import useFetch from '../../hooks/use-fetch';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import loadingIcon from '../../assets/loading.svg'
import { numberWithCommas } from '../../store/nairaComma';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {
        products,
        isLoading,
        httpError
    } = useFetch('https://e-commerce-app-14e14-default-rtdb.firebaseio.com/products.json');

    let showProducts = [];
    if (props.category) {
        showProducts = products.filter(product => product.category === props.category)
    } else {
        showProducts = products
    }


    const NextArrow = ({ onClick }) => {
        return (
            <div className='absolute cursor-pointer z-[10] right-[0%] top-[30%] bg-white border 
            border-gray-900 w-16 h-16 flex justify-center items-center hover:bg-gray-200' onClick={onClick}
            >
                <IoIosArrowForward size={30} />
            </div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='absolute cursor-pointer z-[10] left-[0%] top-[30%] bg-white border 
            border-gray-900 w-16 h-16 flex justify-center items-center hover:bg-gray-200' onClick={onClick}
            >
                <IoIosArrowBack size={30} />
            </div>
        )
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

        ]
    };



    return (
        <section className='text-gray-700 mb-28 w-full p-4'>
            <h1 className='uppercase text-3xl font-[700] mb-4'>Available Products</h1>
            {!isLoading && !httpError && (
                <section className='w-full mx-auto h-[570px]'>
                    <Slider {...settings}>
                        {
                            showProducts.map((product, idx) => (
                                <Link to={`/${product.subCategory}/${product.id}`} className='w-80 flex p-2 pb-24'>
                                    <img className='w-full h-[324px] object-cover' src={product.image} alt={product.name} />
                                    <div className='pl-4'>
                                        <p className='uppercase mt-4 font-[500] hover:underline'>{product.name}</p>
                                        <p className='mt-2'>
                                            {`₦${numberWithCommas(product.price.toFixed(0) * 710)}`}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </Slider>
                </section>
            )}
            {isLoading && !httpError && <div className='flex justify-center items-center w-full'>
                <img src={loadingIcon} alt='loading-icon' />
            </div>}
            {!isLoading && httpError && <p className='text-center text-xl text-red-500 font-[700]'>{httpError}</p>}
        </section>
    )
}



export default Products;
