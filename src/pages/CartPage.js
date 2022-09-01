import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { containerVariants } from '../components/UI/PageLoadAnimation';

import Cart from '../components/Cart/Cart'

const CartPage = () => {
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
            <Cart />
        </motion.section>
    )
}

export default CartPage;
