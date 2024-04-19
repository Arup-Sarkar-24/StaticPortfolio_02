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
            child: (
                <CgWebsite size={30} />
            ),
            href: 'https://arupsarkar.netlify.app/',
            style: 'rounded-tr-md',
        },
        {
            child: (
                <FaFacebook size={30} />
            ),
            href: 'https://www.facebook.com/augusta.stark.12',
            style: 'rounded-tr-md',
        },
        {
            child: (
                <FaInstagramSquare size={30} />
            ),
            href: 'https://www.instagram.com/arup_sarkar_24/',
            style: 'rounded-tr-md',
        },
    ];

    return (
        <div name="contact">
            <SectionTitle title="Connect With Me:" />
            <div className='flex flex-col w-full bg-gradient-to-b from-gray-800 to-blue-800'>
                <div className="contact-content flex flex-col justify-between md:flex-row items-center" >
                    <div></div>
                    <div >
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
                    <div className="lottie-animation h-[250px] md:w-1/5">
                        <lottie-player
                            src="https://lottie.host/a8e95d84-c25f-4819-bce3-1d2d28d72176/BqYQO8TlFp.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <div></div>
                    <div >
                        <div>
                        <p className='text-tertiary py-6'>Send Message to get in touch with me</p>
                        </div>
                        <div>
                            <form action='https://getform.io/f/nbvvzenb' method='POST' className='flex flex-col'>
                                <input
                                type='text' name='name' placeholder='Enter your name' className='p-1 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                />
                                <input
                                type='text' name='email' placeholder='Enter your email' className='p-1 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                />
                                <textarea
                                name="message" rows="5" placeholder='Enter your message: ' className='p-1 bg-transparent border-2 rounded-md text-white focus:outline-none'
                                >

                                </textarea>
                                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                            </form>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>


    );
};

export default Contact;
