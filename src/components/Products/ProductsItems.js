import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import loadingIcon from '../../assets/loading.svg'
import ProductItemHeader from './ProductItemHeader';
import ProductItem from './ProductItem';
import { containerVariants2 } from '../UI/PageLoadAnimation';

const ProductsItems = (props) => {
    const { data, loading, error, name, category } = props;

    const filteredItems = useSelector(state => state.filter.filteredItems);
    const filter = useSelector(state => state.filter.filter);

    let quantity;
    if (filter) {
        quantity = filteredItems.length;
    } else {
        quantity = data.length;
    }

    let dataToSort;
    if (filter) {
        dataToSort = filteredItems;
    } else {
        dataToSort = data;
    }

    return (
        <section className='text-gray-900 bg-blue w-full  p-8 pt-32 '>
            <ProductItemHeader
                name={name}
                category={category}
                quantity={quantity}
                data={data}
                dataToSort={dataToSort}
            />
            <section className='flex justify-center items-center w-full'>
                {
                    !loading && !error && !filter && (
                        <motion.div className=
                            'mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                            variants={containerVariants2}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            {
                                data.map(product => (
                                    <Link key={product.id} to={`/${product.subCategory}/${product.id}`}>
                                        <ProductItem
                                            product={product}
                                        />
                                    </Link>
                                ))
                            }
                        </motion.div>
                    )
                }
                {
                    !loading && !error && filter && (
                        <motion.div className=
                            'mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                            variants={containerVariants2}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            {
                                filteredItems.map(product => (
                                    <Link to={`/${product.subCategory}/${product.id}`}>
                                        <ProductItem
                                            product={product}
                                        />
                                    </Link>
                                ))
                            }
                        </motion.div>
                    )
                }
                {
                    !loading && !error && filter && quantity === 0 && (
                        <div className=
                            'mt-8 w-full text-xl text-gray-500'>
                            <p>No Items Found</p>
                        </div>
                    )
                }
                {loading && !error && <div className='flex justify-center items-center w-full'>
                    <img src={loadingIcon} alt='loading-icon' />
                </div>}
                {!loading && error && <p className='text-center text-xl text-red-500 font-[700]'>{error}</p>}
            </section>
        </section>
    );
};

export default ProductsItems;
