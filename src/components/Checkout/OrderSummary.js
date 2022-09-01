
import React from 'react'
import { useSelector } from 'react-redux'

const OrderSummary = () => {

    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <div className='w-full p-8'>
            <table className='hidden sm:w-full mx-auto sm:table'>
                <tr className='border-b'>
                    <th className='text-3xl text-start'>ORDER SUMMARY</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {
                    cartItems.map((item, key) => {
                        return (
                            <tr key={key} className='w-full'>
                                <td className='w-full flex items-center my-8' >
                                    <div className='w-[150px] h-32'>
                                        <img className='w-full h-full object-cover'
                                            src={item.image} alt={item.name} />
                                    </div>
                                    <div className='ml-4'>
                                        <h1 className='uppercase font-[700]'>{item.name}</h1>
                                        <p>Size: M</p>
                                    </div>
                                </td>
                                <td className='w-[15%] text-center'>
                                    {item.quantity}
                                </td>
                                <td className='w-[15%] text-center'>
                                    {`₦${item.price}`}
                                </td>
                                <td className='w-[15%] text-center'>
                                    {`₦${item.totalPrice}`}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

            <div className='sm:hidden w-full'>
                {cartItems.map((item => {
                    return (
                        <div className='flex justify-between w-full my-8'>
                            <div className='w-full h-[150px]'>
                                <img className='w-full h-full object-cover'
                                    src={item.image} alt={item.name} />
                            </div>
                            <div className='w-full text-center'>
                                <h1 className='uppercase font-[700]'>{item.name}</h1>
                                <p>Size:M</p>
                                <p>Quantity:{item.quantity}</p>
                                <p>Total:{item.totalPrice}</p>
                            </div>

                        </div>
                    )
                }))}
            </div>

            <div className='flex flex-col items-end sm:flex-row sm:justify-end '>
                <h1 className='uppercase font-[700] text-2xl'>items total</h1>
                <h1 className='uppercase font-[700] mx-8 text-2xl'>{`₦${totalAmount.toFixed(2)}`}</h1>
            </div>

        </div>
    )
}

export default OrderSummary
