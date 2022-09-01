
import React from 'react'
import { useSelector } from 'react-redux'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Notification = () => {

    const totalItems = useSelector(state => state.cart.numberOfItems);

    return (
        <header className=' bg-gray-900 w-full flex justify-center items-center text-white sticky'>
            <ul className='w-[1024px] flex justify-between items-center py-3 px-4 text-white font-[700] '>
                <li>Premium Lifestyle</li>
                <li className='hidden md:flex justify-center items-center'><BsWhatsapp size={20} />
                    <span className='ml-2'>+2347052273700</span>
                </li>
                <li className='flex items-center'>

                    <Link to='/cart'>
                        <div className='flex relative w-full cursor-pointer'>
                            <HiOutlineShoppingBag size={30} />
                            <span className=' bg-primary w-6 h-6 text-center rounded-full absolute left-[1rem] bottom-4'>
                                {totalItems}</span>
                        </div>
                    </Link>
                </li>

            </ul>
        </header>
    )
}

export default Notification


