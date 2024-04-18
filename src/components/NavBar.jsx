import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
    const link=[
        {
            id:1,
            link:'home'
        },

        {
            id:2,
            link:'about'
        },

        {
            id:3,
            link:'experience'
        },

        {
            id:4,
            link:'certifications'
        },

        {
            id:5,
            link:'contact'
        }
    ]
    return (
        <div className='p-5 flex justify-between items-center w-full h-15 px-4 text-white fixed'
            style={{ background: 'linear-gradient(to right, #4CAF50, #2196F3)' }}
        >
            <div className='contant flex flex-row  space-x-4'>
                <h1 className="text-secondary text-5xl font-signature ml-5">𝓐rup</h1>
            </div>
            <ul className='flex'>
            <li className='px-4 cursor-pointer capitalize font-medium text-primary-500 hover:scale-105 duration-200'>Home</li>

                <li className='px-4 cursor-pointer capitalize font-medium text-primary-500 hover:scale-105 duration-200'>About</li>

                <li className='px-4 cursor-pointer capitalize font-medium text-primary-500 hover:scale-105 duration-200'>Experience</li>

                <li className='px-4 cursor-pointer capitalize font-medium text-primary-500 hover:scale-105 duration-200'>Certification</li>
                
                <li className='px-4 cursor-pointer capitalize font-medium text-primary-500 hover:scale-105 duration-200'>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;