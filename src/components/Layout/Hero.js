import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ shop, link, bg }) => {
  return (
    <section className={`h-screen ${bg} bg-center`}>
      <div className='flex flex-col justify-center items-center h-screen text-white'>
        <h1 className='font-[900] text-4xl md:text-7xl uppercase'>Welcome Offer</h1>
        <p className='font-[700] text-2xl md:text-3xl'>Get Flat 20% Off.</p>
        <p className='font-[700] text-2xl md:text-3xl'>Valid On Selecte Products.</p>
        <Link to={`/${link}`}>
          <button className='bg-gray-900 text-white px-10 py-4 my-5 text-xl font-[700]
                hover:bg-gray-200 hover:text-gray-700  '
          >{shop}</button>
        </Link>
      </div>
    </section>
  )
}

export default Hero;
