import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'
import OrderSummary from './OrderSummary';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import image from '../../assets/1.jpg'



const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = useSelector(state => state.cart.numberOfItems);

  const cartItem = cartItems.map(item => {
    return <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      totalPrice={item.totalPrice}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
    />
  })

  return (
    <section className='pt-[150px] pl-6'>
      <div >
        <h1 className='uppercase font-[900] text-5xl'>Your Cart</h1>
        <p className='text-xl pt-8'>TOTAL [{totalItems} items]</p>
        <Link to='/'>
          <p className='uppercase underline pt-4 font-[700] hover:text-primary '>Countinue Shopping</p>
        </Link>
      </div>
      <section className='pt-6 md:grid grid-cols-3'>
        <div className='w-full col-span-2'>
          {cartItem}
        </div>
        <div className='col-span-1 sticky'>
          <OrderSummary />
        </div>
        {/* <Modal>
          <div className='mt-96'>
            <p>where are you</p>
            <img src={image} />
          </div>
        </Modal> */}
      </section>
    </section>
  )
};

export default Cart;
