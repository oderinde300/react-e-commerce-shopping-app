
import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <section className='w-full bg-gray-900 text-gray-100 flex justify-between items-baseline h-full px-8 py-8'>
                <div className='w-full flex flex-col md:flex-row justify-between items-baseline h-full'>
                    <div className='h-full md:mb-2 cursor-pointer'>
                        <h1 className='mb-2 uppercase font-[700]'>Products</h1>
                        <ul >
                            <li className='mb-2'>Shoes</li>
                            <li className='mb-2'>Clothings</li>
                            <li className='mb-2'>Accessories</li>
                        </ul>
                    </div>
                    <div className='h-full md:mb-2 cursor-pointer'>
                        <h1 className='mb-2 uppercase font-[700]'>Category</h1>
                        <ul >
                            <Link to='/men'>
                                <li className='mb-2'>Men</li>
                            </Link>
                            <Link to='/ladies'>
                                <li className='mb-2'>Ladies</li>
                            </Link>
                            <Link to='/kids'>
                                <li className='mb-2'>Kids</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='h-full md:mb-2 cursor-pointer'>
                        <h1 className='mb-2 uppercase font-[700]'>Company Info</h1>
                        <ul >
                            <li className='mb-2'>About Us</li>
                            <li className='mb-2'>Careers</li>
                            <li className='mb-2'>Press</li>
                        </ul>
                    </div>
                    <div className='h-full md:mb-2 cursor-pointer'>
                        <h1 className=' mb-2 uppercase font-[700]'>Follow Us</h1>
                        <ul >
                            <li className='mb-2'><BsFacebook size={20} /></li>
                            <li className='mb-2'><BsInstagram size={20} /></li>
                            <a href='https://twitter.com/Emma_tobiloba'>
                                <li className='mb-2'><BsTwitter size={20} /></li>
                            </a>                            <li className='mb-2'><BsWhatsapp size={20} /></li>
                        </ul>
                    </div>
                </div>
            </section >
            <div className='bg-black flex justify-center items-center h-10'>
                <p className='text-white'>©2022  TYK store by thehop. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer;
