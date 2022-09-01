import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { AiOutlineFieldTime } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { cartActions } from '../../store/cart-slice';
import { numberWithCommas } from '../../store/nairaComma';
import Button from '../UI/Button';



const HighlightedProductDetaiils = ({ name, price, description, image, id }) => {

    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            image,
            quantity: 1
        }))
    };

    return (
        <>
            <h1 className='text-3xl font-[700] uppercase'>{name}</h1>
            <p className='text-xl font-[600] mt-6'> {`₦${numberWithCommas((price * 710).toFixed(0))}`}</p>
            <p className='text-lg mt-8'>{description}</p>
            <div className='w-full flex justify-between items-center mt-10'
            >
                <Button
                    onClick={addItemToCartHandler}
                >Add To Cart</Button>
            </div>
            <div className='mt-6'>
                <p className='flex
                         items-center mt-6'><span className='mr-4'><TbTruckDelivery />
                    </span>Free Delivery for goods over ₦355,000</p>
                <p className='flex
                         items-center mt-6'><span className='mr-4'><AiOutlineFieldTime />
                    </span>Delivery takes 4-5 working days</p>
            </div>
        </>
    )
}

export default HighlightedProductDetaiils;
