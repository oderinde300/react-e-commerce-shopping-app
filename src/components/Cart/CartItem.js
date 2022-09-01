
import React from 'react';
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { numberWithCommas } from '../../store/nairaComma';

const CartItem = ({ name, id, totalPrice, image, quantity, price }) => {
    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            quantity: 1,
            price
        }))
    };

    const removeItemFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    };

    const removeItemSectionHandler = () => {
        dispatch(cartActions.removeItemSectionFromCart(id))
    };

    return (
        <>
            <div className='flex border w-[full] mb-4'>
                <div className='w-[400px] h-[300px]'>
                    <img className='w-full h-full object-cover' src={image}
                        alt='name' />
                </div>
                <div className='flex p-6 w-full justify-between'>
                    <div className='h-full flex flex-col justify-between'>
                        <h1 className='font-[700] text-xl'>{name}</h1>
                        <p>Legend Ink / White</p>
                        <p>Only 7 Left</p>
                        <button className='uppercase font-[700] underline cursor-pointer'>edit</button>
                        <div className='flex border justify-between items-center w-[100px] border-gray-900'>
                            <span
                                className='border-r border-gray-900 h-full cursor-pointer w-full flex justify-center items-center'
                                onClick={removeItemFromCartHandler}>
                                <AiOutlineMinus /></span>
                            <span className='border-r border-gray-900 h-full w-full text-center'>{quantity}</span>
                            <span className=' cursor-pointer w-full flex justify-center items-center'
                                onClick={addItemToCartHandler}>
                                <AiOutlinePlus /></span>
                        </div>
                    </div>
                    <div>
                        <p>{`₦${numberWithCommas(totalPrice.toFixed(0) * 710)}`}</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' cursor-pointer'
                            onClick={removeItemSectionHandler}>
                            <FaTimes />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CartItem;
