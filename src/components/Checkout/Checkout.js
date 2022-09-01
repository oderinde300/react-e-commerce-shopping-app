
import React from 'react'
import BillingInfo from './BillingInfo'
import BillingSummary from './BillingSummary'
import OrderSummary from './OrderSummary'
import Payment from './Payment'
import Shipping from './Shipping'

const Checkout = () => {
    return (
        <section className='w-full pt-[150px]' >
            <OrderSummary />
            <BillingInfo />
            <Shipping />
            <div className='block md:grid grid-cols-2 '>
                <Payment />
                <BillingSummary className="order-last" />
            </div>
        </section >
    )
}

export default Checkout
