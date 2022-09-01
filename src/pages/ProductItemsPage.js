import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { containerVariants } from '../components/UI/PageLoadAnimation';

import { useParams } from 'react-router-dom'
import useFetch from '../hooks/use-fetch'
import ProductsItems from '../components/Products/ProductsItems'

const ProductItemsPage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const params = useParams();
    const { id } = params;

    const {
        products,
        isLoading,
        httpError
    } = useFetch('https://landing-page-6409c-default-rtdb.firebaseio.com/products.json');

    const productsToDisplay = products.filter(product => product.subCategory === id);
    const productArray = id.split("-");
    const name = [productArray[0]];
    const category = [productArray[1]];

    return (
        <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div>
                <ProductsItems
                    data={productsToDisplay}
                    loading={isLoading}
                    error={httpError}
                    name={name}
                    category={category}
                />
            </div>
        </motion.section>

    )
}

export default ProductItemsPage
