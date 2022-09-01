
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import NavLinks from './NavLinks';
import Notification from '../UI/Notification';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-white fixed w-full shadow-md z-50'>
            <Notification />
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-3 md:w-auto w-full 
                flex justify-between items-center fixed md:relative top-0 bg-white text-lg'>
                    <Link to='/'>
                        <div className='md:cursor-pointer h-9 flex justify-center items-center '>
                            TYK <span className='font-[700] ml-2'>Store</span>
                        </div>
                    </Link>
                    <div className='md:hidden' onClick={() => setOpen(prev => !prev)}>
                        {open ? <FaTimes size={30} /> : <BiMenu size={30} />}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <NavLinks />
                </ul>
                <div className='md:block hidden'>
                    <SearchForm />
                </div>
                {/* Mobile Nav */}
                <ul className={`
                md:hidden bg-white fixed w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <NavLinks />
                    <div className='py-5'>
                        <button className='bg-gray-900 text-white px-10 py-2 text-sm font-[400]
                hover:bg-gray-200 hover:text-gray-700  '
                        >SHOP NOW</button>
                    </div>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
