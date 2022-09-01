
import React from 'react';
import { useDispatch } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import { BiCircle } from 'react-icons/bi';
import { filterSliceActions } from '../../store/filter-slice';

const SortBtn = (data) => {
    const dispatch = useDispatch();
    const priceArrangement = [
        {
            order: 'Lower - Higher',
            sortOrder: 'ascending'
        },
        {
            order: 'Higher - Lower',
            sortOrder: 'descending'
        }
    ]

    const sortHandler = (sortOrder) => {
        dispatch(filterSliceActions.priceSortHandler({
            items: data,
            sortOrder
        }))
    };

    return (
        <div className='text-lg font-[500] mr-4  md:w-full group'>
            <button className='flex justify-between w-full border border-gray-900 px-4 py-2
    uppercase items-center '>
                Sort by <span><IoIosArrowDown size={20} /></span>
            </button>
            <ul className='absolute z-50 hidden group-hover:block'>
                <div className='bg-white shadow-lg w-[250px] mt-4 p-5 '>
                    <li className='uppercase font-[700] p-2'>Price
                    </li>
                    <div>
                        {priceArrangement.map(price => (
                            <div key={price.order} className='flex items-center hover:text-primary cursor-pointer border-b'>
                                <BiCircle size={20} />
                                <li className=' p-2' onClick={
                                    () => { sortHandler(price.sortOrder) }
                                }>{price.order}</li>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>
        </div>
    )
};

export default SortBtn;
