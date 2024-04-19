import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialLinks() {
    const links = [
        {
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/arup-sarkar-148088255/',
            style: 'rounded-br-md',
        },
        {
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/arup-sarkar-24',
            style: 'rounded-br-md',
        },
        {
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:1arupsarkar112@gmail.com',
        },
        {
            child: (
                <>
                    Whatsapp <FaWhatsappSquare size={30} />
                </>
            ),
            href: 'https://wa.me/+919091705624 ',
            style: 'rounded-tr-md',
        },
        {
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
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}
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