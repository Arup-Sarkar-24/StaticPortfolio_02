import React from 'react';
import SectionTitle from './SectionTitle';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";

export const Contact = () => {
    const user = {
        name: "Arup Sarkar",
        email: "1arupsarkar112@gmail.com",
        mobile: "+919091705624",
        address: "Shibtali, Balurghat, WB, India",
    };

    const links = [
        {
            id: 1,
            child: (
                <CgWebsite size={30} />
            ),
            href: '',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <FaFacebook size={30} />
            ),
            href: '',
            style: 'rounded-tr-md',
        },
        {
            id: 3,
            child: (
                <FaInstagramSquare size={30} />
            ),
            href: '',
            style: 'rounded-tr-md',
        },
    ];

    return (
        <div className="contact-section bg-gradient-to-b from-gray-800 to-blue-800 p-2">
            <SectionTitle title="Connect With Me:" />
            <div className="contact-content flex flex-col md:flex-row items-center">
                <div className="contact-details flex flex-col">
                    {/* Displaying contact details */}
                    {Object.entries(user).map(([key, value], index) => (
                        <div key={index} className="contact-item mb-2">
                            <span className="contact-key text-tertiary capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                            <span className="contact-value text-secondary ml-2">
                                {value}
                            </span>
                        </div>
                    ))}
                    
                    {/* Container for social links */}
                    <div className="social-links flex space-x-6 ">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="text-white flex items-center justify-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.child}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Lottie animation */}
                <div className="lottie-animation h-[200px] md:w-1/5">
                    <lottie-player
                        src="https://lottie.host/a8e95d84-c25f-4819-bce3-1d2d28d72176/BqYQO8TlFp.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Contact;
