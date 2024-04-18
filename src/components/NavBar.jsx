import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },

        {
            id: 2,
            link: 'About'
        },

        {
            id: 3,
            link: 'Experience'
        },

        {
            id: 4,
            link: 'Certifications'
        },

        {
            id: 5,
            link: 'Contact'
        }
    ]
    return (
        <div className='p-5 flex justify-between items-center w-full h-15 px-4 text-white fixed'
            style={{ background: 'linear-gradient(to right, #4CAF50, #2196F3)' }}
        >
            <div className='contant flex flex-row  space-x-4'>
                <h1 className="text-secondary text-5xl font-signature ml-5">𝓐rup</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-primary text-500 hover:scale-105 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='curser-pointer pr-4 z-10 text-grey-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black tp-gray-800 text-gray-500'>
            {links.map(({ id, link }) => (
                    <li key={id}
                        className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {link}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default NavBar;