import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { containerVariants } from '../components/UI/PageLoadAnimation';

import Category from '../components/Layout/Category';
import Hero from '../components/Layout/Hero';
import Products from '../components/Products/Products';
import Footer from '../components/Layout/Footer';


const DUMMY_DATA = [
    {
        id: 'p1',
        image_src: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        name: 'Shoes',
        link: 'ladies-shoes'
    },
    {
        id: 'p2',
        image_src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Clothings',
        link: 'ladies-clothings'
    },
    {
        id: 'p3',
        image_src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        name: 'Sneakers',
        link: 'ladies-sneakers'
    }
]


const LadiesPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Hero
                bg='bg-Ladies'
                name='ladies'
                shop='SHOP LADIES'
                link='ladies-accessories'
            />
            <Category
                data={DUMMY_DATA}
            />
            <Products
                category='ladies'
            />
            <Footer />
        </motion.section>
    )
}

export default LadiesPage;
