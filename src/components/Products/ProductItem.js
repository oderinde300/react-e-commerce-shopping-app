import React from 'react';
import { numberWithCommas } from '../../store/nairaComma';

const ProductItem = ({ product }) => {

    return (
        <div className='flex justify-center items-center relative'>
            <div className=
                'hover:border hover:border-gray-900 hover:scale-110 transition-all ease-in-out duration-300'>
                <img className='w-[250px] h-[300px] object-cover' src={product.image} alt={product.name} />
                <div className='pl-4 pt-2'>
                    <p className='uppercase text-sm'>{product.name}</p>
                    <p className='font-[700] text-sm'>
                        {`₦${numberWithCommas((product.price * 710).toFixed(0))}`}
                    </p>
                    <p className='text-gray-400 text-sm'>
                        {product.subCategory}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
