import React from 'react';
import SectionTitle from './SectionTitle';
import { experiences } from '../resource/experience';

export const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  
  return (
    <div name="experience">
      <SectionTitle title="Experience" />
      <div className="experiences-container flex py-10 gap-20 bg-gradient-to-b from-gray-800 to-blue-800">
        <div></div>
        <div className="experiences-list flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3">
          {experiences.map((experience, index) => (
            <div
              key={index} // Add key prop for each list item
              onClick={() => setSelectedItemIndex(index)}
              className={`experience-item cursor-pointer px-5 text-xl py-3 ${
                selectedItemIndex === index
                  ? 'selected-experience text-secondary border-secondary border-l-4 -ml-[3px] bg-[#1a7f5a31]'
                  : 'text-white'
              }`}
              aria-label={`Select experience from ${experience.period}`}
            >
              {experience.period}
            </div>
          ))}
        </div>
        <div className="experience-details flex flex-col gap-5">
          <h2 className="experience-title text-tertiary text-xl">
            {experiences[selectedItemIndex].title}
          </h2>
          <h2 className="experience-company text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h2>
          <p className="experience-description text-white">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
