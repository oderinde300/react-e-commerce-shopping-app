
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri'

const Shipping = () => {
    return (
        <div className='p-8'>
            <h1 className='border-b w-[50%] text-3xl font-[700] uppercase'>Shipping Method</h1>
            <div className='flex justify-between items-center w-[30%] mt-10'>
                <div><RiRadioButtonFill size={30} /></div>
                <p>₦ 5000</p>
                <p className='font-[700]'>Express Courier</p>
                <p>8 to 10 business days</p>
            </div>
        </div>
    )
}

export default Shipping;
