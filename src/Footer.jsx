import React from 'react';

export const Footer = () => {
  return (
    <footer className='h-[20vh] bg-secondary flex  flex-col items-start justify-center gap-8 w-full px-10 py-5'>
        <div className='footer-content flex items-center justify-center flex-col mt-2 opacity-100'>
            <h2 className='footer-text text-white'>
                Designed and Developed By
            </h2>
            <h2 className='footer-text text-white'>
                <span>Arup Sarkar</span>
            </h2>
        </div>
    </footer>
  );
};

export default Footer;
