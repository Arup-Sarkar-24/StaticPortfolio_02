import React from 'react';
import SectionTitle from './SectionTitle';
import { courses } from '../resource/courses';

export const Courses = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    return (
        <div name="certificate">
            <SectionTitle title="Certifications" />
            <div className="flex py-10 gap-20 bg-gradient-to-b from-gray-800 to-blue-800">
                <div></div>
                <div className= "flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3">
                    {courses.map((course, index) => (
                        <div
                            onClick={() => {setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer'>
                                <h2 className={` ${
                                selectedItemIndex === index
                                    ? 'selected-course text-secondary border-secondary border-l-4 ml-[-3px] bg-[#1a7f5a31] py-3': 'text-white'}`}>{course.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="course-title text-tertiary text-xl">
                            <a
                                href={courses[selectedItemIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {courses[selectedItemIndex].subTitle}
                            </a>
                        </h2>
                        <p className="course-description text-white">
                            {courses[selectedItemIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
