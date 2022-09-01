import React from 'react'
import FilterBtn from './FilterBtn';
import SortBtn from './SortBtn';

const ProductItemHeader = ({ name, category, quantity, data, dataToSort }) => {

    return (
        <>
            <div className='mb-4'>
                <h1><span className='underline mr-2 capitalize'>{name}</span> / <span
                    className='capitalize'>{`${name}'s ${category}`}</span></h1>
            </div>
            <div className='flex flex-col md:flex-row w-full justify-between items-center'>
                <h1 className='text-5xl font-[700] capitalize'>{`${name}'s ${category}`}
                    <span className='text-lg ml-2 text-gray-300 font-[100]'>[{quantity}]</span></h1>
                <div className='flex justify-between items-center md:w-[30%] w-full sm:w-[50%] mr-12'>
                    <FilterBtn
                        data={data} />
                    <SortBtn
                        data={dataToSort}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductItemHeader;
