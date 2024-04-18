import React from 'react';

export const Footer = () => {
    return (
        <footer className='h-[12vh] bg-secondary flex flex-col items-center justify-center w-full'>
            <div className='footer-content flex items-center justify-center flex-col opacity-100'>
                <h2 className='footer-text text-white text-2xl'>
                    Designed and Developed By
                </h2>
                <h2 className='footer-text text-white text-2xl'>
                    <span>Arup Sarkar</span>
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
