
import React from 'react';

const UpdateForm = () => {
    return (
        <section className=' md:w-[424px] h-[50%] mb-28 border md:ml-4'>
            <div className='h-32 bg-primary flex justify-center
             items-center text-gray-100 font-[700] text-2xl'>
                <h1 >Be the first to know about our deal</h1>
            </div>
            <div>
                <div className='flex flex-col border-b p-4 hover:bg-yellow-100 active:bg-yellow-100'>
                    <label className='text-xl' htmlFor='email'>Email</label>
                    <input className='border h-10 outline-none hover:border hover:border-gray-900 
                    active:border active:border-gray-900  p-2'
                        id='email' type='text' placeholder='@example.com' />
                </div>
                <div className='flex flex-col border-b p-4 hover:bg-yellow-100 active:bg-yellow-100'>
                    <label className='text-xl' htmlFor='name'>First Name</label>
                    <input className='border h-10 outline-none hover:border hover:border-gray-900
                    active:border active:border-gray-900 p-2'
                        id='name' type='text' />
                </div>
                <div className='flex justify-center items-center bg-gray-400 h-14'>
                    <button className='bg-gray-900 text-white px-12 py-2 hover:bg-gray-300 
                    hover:text-gray-900 text-xl'>Subscribe</button>
                </div>
            </div>
        </section >
    )
}

export default UpdateForm;
