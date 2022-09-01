import React from 'react';
import { useDispatch } from 'react-redux';
import { BsFilterLeft } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi';
import { filterSliceActions } from '../../store/filter-slice';
import { priceRange } from './FilterPriceRange';



const FilterBtn = (data) => {
  const dispatch = useDispatch();

  const priceFilterHandler = (priceToFilterBy1, priceToFilterBy2) => {
    dispatch(filterSliceActions.priceFilterHandler({
      items: data,
      price: priceToFilterBy1,
      price2: priceToFilterBy2
    }))
  };

  return (
    <div className='text-lg font-[500] mr-4  md:w-full group'>
      <button className='flex justify-between w-full border border-gray-900 px-4 py-2
                        uppercase items-center '>
        Fitler <span><BsFilterLeft size={20} /></span>
      </button>
      <ul className='absolute z-50 hidden group-hover:block'>
        <div className='bg-white shadow-lg w-[250px] mt-4 p-5 '>
          <li className='uppercase font-[700] p-2'>Price
          </li>
          <div>
            {priceRange.map(price => (
              <div className='flex items-center hover:text-primary cursor-pointer border-b' key={price.range}>
                <BiCircle size={20} />
                <li key={price} className=' p-2 '
                  onClick={() => { priceFilterHandler(price.price1, price.price2) }}>{price.range}</li>
              </div>
            ))}
          </div>
        </div>
      </ul>
    </div>
  )
};

export default FilterBtn;
