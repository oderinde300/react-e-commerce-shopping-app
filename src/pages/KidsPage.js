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
        image_src: 'https://images.unsplash.com/photo-1496516348160-24b35a31856f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Shoes',
        link: 'kids-shoes'
    },
    {
        id: 'p2',
        image_src: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        name: 'Clothings',
        link: 'kids-clothings'
    },
    {
        id: 'p3',
        image_src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Sneakers',
        link: 'kids-sneakers'
    }
]

const KidsPage = () => {
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
                bg='bg-Kids'
                name='kids'
                shop='SHOP KIDS'
                link='kids-shoes'
            />
            <Category
                data={DUMMY_DATA}
            />
            <Products
                category='kids'
            />
            <Footer />
        </motion.section>
    )
}

export default KidsPage;
