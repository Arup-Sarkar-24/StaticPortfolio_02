import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: '',
            style: 'rounded-br-md',
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: '',
            style: 'rounded-br-md',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:1arupsarkar112@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Whatsapp <FaWhatsappSquare size={30} />
                </>
            ),
            href: 'https://wa.me/+919091705624 ',
            style: 'rounded-tr-md',
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-tr-md',
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map((link) => (
                    <li
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md bg-gray-500 ${link.style}`}
                    >
                        <a
                            href={link.href}
                            className="flex justify-between items-center w-full text-white"
                            download={link.download}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;