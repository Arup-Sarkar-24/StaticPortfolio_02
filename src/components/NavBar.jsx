import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome,  FaBriefcase } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import myImg from "../Storage/me1.png";

function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link: <FaHome size={25} />
        },
        {
            id:2,
            link: <FcAbout size={25}  />
        },
        {
            id:3,
            link: <FaBriefcase size={25} />
        },
        {
            id:4,
            link: <PiCertificateFill size={25} />

        },
        {
            id:5,
            link: <IoMdContact size={25} />
        }
    ];
    const downImg = [
        {
            href: '../Storage/me1.png',
            style: 'rounded-tr-md',
            download: true,
        }
    ];

    return (
        <div className='p-5 flex justify-between items-center w-full h-15 px-4 text-white fixed' style={{ background: 'linear-gradient(to right, #2196F3, #4CAF50)' }}>
            {/* Profile image on the left side */}
            {downImg.map((down) =>
                <a key={down.id} href={down.href} download={down.download} target="_blank" rel="noopener noreferrer" role="button" className="rounded-full" style={{ width: '60px', height: '60px', overflow: 'hidden' }}>
                    <img src={myImg} alt='profile_pic' className='w-full h-full object-cover' />
                </a>
            )}




            {/* Text content on the middle side */}
            <h1 className="text-secondary text-3xl ml-5">𝓐𝐫𝓤𝐏 ♔♖ ŜÃⓇ𝓀𝓪𝕣</h1>
            {/* Navigation links */}
            <ul className='hidden md:flex'>
                {links.map((nav) => (
                    <li key={nav.id}  className='px-4 cursor-pointer capitalize font-medium text-primary text-500 hover:scale-105 duration-200'>
                        {nav.link}
                    </li>
                ))}
            </ul>

            {/* Hamburger menu icon for mobile view */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile navigation menu */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;
