import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { containerVariants } from '../components/UI/PageLoadAnimation';

import Hero from '../components/Layout/Hero';
import Category from '../components/Layout/Category';
import Products from '../components/Products/Products';
import UpdateForm from '../components/Layout/UpdateForm';
import Footer from '../components/Layout/Footer';

const DUMMY_DATA = [
    {
        id: 'c1',
        name: 'men',
        link: 'men',
        image_src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id: 'c2',
        name: 'ladies',
        link: 'ladies',
        image_src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id: 'c3',
        name: 'kids',
        link: 'kids',
        image_src: 'https://images.unsplash.com/photo-1554342321-0776d282ceac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }
]

const HomePage = () => {

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
                bg='bg-Hero'
                name='man'
                shop='SHOP NOW'
                link='kids-clothings'
            />
            <Category
                data={DUMMY_DATA}
            />
            <Products
                category='kids'
            />
            <UpdateForm />
            <Footer />
        </motion.section>
    )
}

export default HomePage;
