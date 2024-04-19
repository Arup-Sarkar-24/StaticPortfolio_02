import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {

  const sentences = [
    "Arup Sarkar.",
    "a Full Stack web developer.",
    "a Java Software Developer.",
    "a Backend Developer."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [sentences.length]);

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <div className="flex">
            <h1 className="text-white text-5xl sm:text-3xl">Namaskara, I am&nbsp;</h1>
            <h1 className="text-3xl sm:text-1xl text-tertiary font-semibold">{sentences[currentIndex]}</h1>
          </div>
          <p className='text-gray-500 py-4 max-w-wd'>
            My expertise in software development, specializing in Java back-end development for IT firms over 2+ years. I have resolved API-related issues, fixed data anomalies, and optimized performance and scalability; resulting in improved overall system efficiency. I have also integrated agile methodologies, collaborated on cross-functional teams, performed end-to-end testing, and ensured code maintainability.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              More about me
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
