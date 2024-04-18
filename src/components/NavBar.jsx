import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
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
            <div className='curser-pointer pr-4 z-10 text-grey-500'>
                <FaBars size={30} />
            </div>
        </div>
    )
}

export default NavBar;