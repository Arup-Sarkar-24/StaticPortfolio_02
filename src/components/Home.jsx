import React from 'react'
import myImg from "../Storage/me1.png";
import{MdOutlineKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white '>
                I am a developer.
            </h2>
            <p className='text-gray-500 py-4 max-w-wd'>
            My expertise in software development, specializing in Java back-end development for IT firms over 2+ years. I have resolved API-related issues, fixed data anomalies, and optimized performance and scalability; resulting in improved overall system efficiency. I have also integrated agile methodologies, collaborated on cross-functional teams, performed end-to-end testing, and ensured code maintainability. 
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                   More about me 
                   <span className='group-hover:rotate-90 duration-300'>
                   <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                   </span>
                </button>
            </div>
        </div>
        <div className='p-5'>
            <img src={myImg} alt='profile_pic' className='rounded-2xl mx-auto w-full md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home;
