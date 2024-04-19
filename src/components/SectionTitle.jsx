import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <div className='flex gap-20 items-center py-5 bg-gradient-to-b from-gray-800 to-blue-800'>
      <div></div>
      <div></div>
      <div></div>
      <h2 className='text-3xl text-white  font-semibold'>{title}</h2>
      <div className='w-80 h-[1px] bg-tertiary'>

      </div>
    </div>
  );
};

export default SectionTitle;
