
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Button = (props) => {
    return (
        <button className='w-full flex justify-between items-center border border-gray-900 p-4 bg-gray-900
    text-white hover:bg-transparent cursor-pointer
    hover:text-gray-900 mt-8 disabled:bg-slate-300 disabled:cursor-not-allowed '
            onClick={props.onClick} disabled={props.disabled}
        >
            <span className='font-[700] uppercase text-xl'>{props.children}</span>
            <span><BsArrowRight size={30} /></span>
        </button>
    )
}

export default Button;
