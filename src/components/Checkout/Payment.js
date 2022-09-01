import React from 'react';
import PaymentForm from './PaymentForm';

const Payment = () => {

    return (
        <div className='p-8 '>
            <h1 className='font-[700] uppercase border-b text-3xl mb-12'>Payment</h1>
            <section >
                <PaymentForm />
            </section>
        </div>
    )
}

export default Payment;
