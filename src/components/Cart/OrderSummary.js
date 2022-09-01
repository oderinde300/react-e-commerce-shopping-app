
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs';
import { numberWithCommas } from '../../store/nairaComma';

const OrderSummary = () => {
    const history = useHistory();
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => state.cart.items);

    console.log(totalAmount)

    const submitHandler = () => {
        history.push('/checkout');
    };

    let cartItemsAvailable = false;
    if (cartItems.length > 0) {
        cartItemsAvailable = true;
    }

    return (
        <section className='w-[90%] mx-auto'>
            <div className='border p-6 mb-4'>
                <h1 className='font-[900] text-3xl pb-4'>ORDER SUMMARY</h1>
                <div className='flex justify-between pb-4'>
                    <h1>SUBTOTAL</h1>
                    <p>{`₦${numberWithCommas(totalAmount.toFixed(0) * 710)}`}</p>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-[700]'>TOTAL</h1>
                    <p className='font-[700]'>{`₦${numberWithCommas(totalAmount.toFixed(0) * 710)}`}</p>
                </div>
            </div>
            <button className='w-full flex justify-between items-center border border-gray-900 p-4 bg-gray-900
             text-white hover:bg-transparent hover:text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-400'
                onClick={submitHandler} disabled={!cartItemsAvailable}>
                <span className='font-[700]'>CHECKOUT</span>
                <span><BsArrowRight size={30} /></span>
            </button>
        </section>
    )
};

export default OrderSummary;
