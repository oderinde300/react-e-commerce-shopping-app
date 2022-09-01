import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { links } from './MyLinks'

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {
                links.map((link, idx) => (
                    <div key={idx}>
                        <div className='px-3 text-left md:cursor-pointer group'>
                            <h1 className='py-5 flex justify-between items-center md:pr-0 pr-5 group
                            md: hover:border-b-8 hover:border-b-white hover:-mb-2 ' onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading("");
                                    setSubHeading("");
                                }
                                }>
                                {link.name}
                                <span className='md:hidden inline'>
                                    {heading === link.name ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                                </span>

                            </h1>
                            {link.submenu && <div>
                                <div>
                                    <div className='absolute top-30 hidden group-hover:md:block hover:md:block'>
                                        <div className='py-3'>
                                            <div
                                                className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'
                                            ></div>
                                        </div>
                                        <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                                            {
                                                link.sublinks.map((mysublinks, idx) => (
                                                    <div key={idx}>
                                                        <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                                        {mysublinks.sublink.map((slink, idx) => (
                                                            <li key={idx} className='text-sm text-gray-600'>
                                                                <Link to={slink.link}
                                                                    className="hover:text-primary"
                                                                >{slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* Mobile Nav */}
                        <div className={`
                        ${heading === link.name ? 'md:hidden' : 'hidden'}
                        `}>
                            {/* sublinks */}
                            {
                                link.sublinks.map((slinks, idx) => (
                                    <div key={idx}>
                                        <div>
                                            <h1 onClick={() =>
                                                subHeading !== slinks.Head ?
                                                    setSubHeading(slinks.Head) :
                                                    setSubHeading("")
                                            }
                                                className='py-4 pl-7 font-semibold md:pr-0 pr-5
                                                flex justify-between items-center'>
                                                {slinks.Head}
                                                <span className='md:mt-1 md:ml-2 inline-block'>
                                                    {subHeading === slinks.Head ?
                                                        <IoIosArrowUp size={20} /> :
                                                        <IoIosArrowDown size={20} />}
                                                </span>
                                            </h1>
                                            <div className={`
                                            ${subHeading === slinks.Head ? "md:hidden" : "hidden"}
                                            `}>
                                                {slinks.sublink.map((slink, idx) => (
                                                    <li key={idx} className='py-3 pl-14'>
                                                        <Link to={slink.link} className='hover:text-primary'>
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
};

export default NavLinks;
