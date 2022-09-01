
import { useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const ScrollTopButton = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            {/* 👇️ scroll to top on button click */}
            <button className='fixed py-4 px-4 text-xl bottom-[20px] right-[40px] bg-gray-900 text-white text-center'
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
            >
                <BsFillArrowUpSquareFill size={70} />
            </button>
        </div >
    );
}

export default ScrollTopButton;