
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai'
import { filterSliceActions } from '../../store/filter-slice';
import useFetch from '../../hooks/use-fetch'
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../../store/nairaComma';
import { containerVariants2 } from '../UI/PageLoadAnimation';

const SearchForm = () => {
    const [searching, setSearching] = useState(false);

    const searchReasult = useSelector(state => state.filter.searchResult);
    const isSearchig = useSelector(state => state.filter.isSearchig);

    const searchInputRef = useRef();
    const dispatch = useDispatch();

    const {
        products,
    } = useFetch('https://e-commerce-app-14e14-default-rtdb.firebaseio.com/products.json');

    const searchTermHandler = () => {
        const enteredSearch = searchInputRef.current.value;
        dispatch(filterSliceActions.searchFilter({
            searchTerm: enteredSearch,
            items: products,
        }))
        setSearching(true);
    };

    const blurHander = () => {
        setTimeout(() => {
            setSearching(false);
        }, 500)
        searchInputRef.current.value = "";
    }

    let dataQuantity = searchReasult.length;


    return (
        <div className='flex justify-center items-center w-full '>
            <form className='bg-gray-200 flex justify-between
             items-center w-full h-10 px-2 hover:border-gray-900 hover:border active:border-gray-900'>
                <input type='text' placeholder='Search' className='bg-gray-200 outline-none w-full'
                    onChange={searchTermHandler}
                    onBlur={blurHander}
                    ref={searchInputRef}
                />
                <button className='w-full flex justify-end'>
                    <AiOutlineSearch size={20} />
                </button>
            </form>
            {
                isSearchig && dataQuantity === 0 && searching &&
                <div className='bg-white absolute mt-4 top-[100%] right-10 w-[400px] p-4 h-96 overflow-y-scroll'>
                    <p className='text-gray-500 text-lg flex justify-center items-center'> No Items Found</p>
                </div>
            }
            {
                isSearchig && dataQuantity !== 0 && searching &&
                <motion.div className='bg-white absolute mt-4 top-[7rem] right-10 w-[400px] 
                p-4 h-96 overflow-y-scroll'
                    variants={containerVariants2}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    {
                        searchReasult.map(data => (
                            <Link to={`/${data.subCategory}/${data.id}`} key={data.id}>
                                <div className='flex items-center w-full p-2'>
                                    <img src={data.image} alt={data.name} className='w-8 h-8' />
                                    <div className='ml-4 text-sm'>
                                        <h1 className='font-[900] hover:underline uppercase'>{data.name}</h1>
                                        <h1 className=''>
                                            {`₦${numberWithCommas((data.price * 710).toFixed(0))}`}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </motion.div>
            }
        </div>
    )
}

export default SearchForm
