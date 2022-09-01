import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Category = (props) => {
    const { data } = props

    const categories = data.map(category => {
        return <CategoryItem
            key={category.id}
            name={category.name}
            image={category.image_src}
            link={category.link}
        />
    })
    return (
        <section className='text-gray-700 p-4 mb-28 w-full'>
            <h1 className='uppercase text-3xl font-[700] mb-4'>What are you shopping for ?</h1>
            <section className='md:grid grid-cols-3 gap-4 '>
                {categories}
            </section>
        </section>
    )
}

const CategoryItem = (props) => {
    return (
        <div className='relative h-96 mb-2'>
            <img className='h-96 w-full object-cover' src={props.image}
                alt={props.name} />
            <Link to={`/${props.link}`}>
                <button className='flex w-[50%] justify-between items-center font-[700] 
                    border border-gray-900 absolute px-4 py-4 top-[70%] left-[25%] bg-white hover:bg-gray-300'>
                    <span className='uppercase'>{props.name}</span>
                    <span className='ml-4'><BsArrowRight size={30} /></span>
                </button>
            </Link>
        </div>
    );
};

export default Category;
