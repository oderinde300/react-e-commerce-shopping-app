import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import HighlightedProductDetaiils from './HighlightedProductDetaiils'
import loadingIcon from '../../assets/loading.svg'


const HighlightedProduct = (props) => {
    const { name, price, image, description, id } = props.data;
    const { loading, error } = props;

    const NextArrow = ({ onClick }) => {
        return (
            <div className='absolute cursor-pointer z-[10] right-[0%] top-[50%] bg-white border 
            border-gray-900 w-16 h-16 flex justify-center items-center hover:bg-gray-200' onClick={onClick}
            >
                <IoIosArrowForward size={30} />
            </div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='absolute cursor-pointer z-[10] left-[0%] top-[50%] bg-white border 
            border-gray-900 w-16 h-16 flex justify-center items-center hover:bg-gray-200' onClick={onClick}
            >
                <IoIosArrowBack size={30} />
            </div>
        )
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        cssEase: "linear",
    }

    return (
        <>
            {!loading && !error && (
                <section className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full h-[50%] '>
                    <section className='w-full h-[50%] mt-[100px] md:col-span-1 lg:col-span-2'>
                        <div className=' w-full h-[660px]'>
                            <Slider {...settings}>
                                <img className='w-full h-[640px] object-cover'
                                    src={image}
                                    alt={name} />
                                <img className='w-full h-[640px] object-cover'
                                    src={image}
                                    alt={name} />
                            </Slider>
                        </div>
                    </section>
                    <section className='col-span-1 mt-[110px] p-4 '>
                        <HighlightedProductDetaiils
                            name={name}
                            price={price}
                            description={description}
                            image={image}
                            id={id}
                        />
                    </section>
                </section >
            )
            }
            {error && !loading && <p className='mx-auto text-red-500 h-full'>{error}</p>}
            {loading && !error &&
                <div className='flex justify-center items-center px-auto h-screen'>
                    <img src={loadingIcon} alt='loading-icon' />
                </div>
            }
        </>
    )
}

export default HighlightedProduct;