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
        image_src: 'https://images.unsplash.com/photo-1616663308968-58162d332720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Shoes',
        link: 'men-shoes'
    },
    {
        id: 'p2',
        image_src: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Clothings',
        link: 'men-clothings'
    },
    {
        id: 'p3',
        image_src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
        name: 'Sneakers',
        link: 'men-sneakers'
    }
]

const MenPage = () => {
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
                bg='bg-Men'
                name='man'
                shop='SHOP MEN'
                link='men-sneakers'
            />
            <Category
                data={DUMMY_DATA}
            />
            <Products
                category='men'
            />
            <Footer />
        </motion.section>
    )
}

export default MenPage;
