
import React from 'react'
import { useSelector } from 'react-redux'

const BillingSummary = () => {
    const itemsTotal = useSelector(state => state.cart.totalAmount)

    return (
        <div className='p-8 w-full'>
            <h1 className='font-[700] text-3xl uppercase border-b'>Billing Summary</h1>
            <div className='w-full mt-14 pb-10 border-b'>
                <div className='flex justify-between items-center mb-4'>
                    <p className='uppercase font-[700]'>items total</p>
                    <p className='uppercase font-[700]'>{`₦${itemsTotal}`}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='uppercase font-[700]'>Shipping</p>
                    <p className='uppercase font-[700]'>₦5000</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <p className='uppercase font-[700]'>Total For Your Order Is</p>
                <p className='uppercase font-[700]'>{`₦${itemsTotal + 5000}`}</p>
            </div>
            <div className='mt-10'>
                <p>The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery.</p>
            </div>
        </div>
    )
}

export default BillingSummary
