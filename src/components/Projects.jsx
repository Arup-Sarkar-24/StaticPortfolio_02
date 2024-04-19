import React from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../resource/project';

export const Projects = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div> <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 bg-gradient-to-b from-gray-800 to-blue-800'>
                <div></div>
                <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3'>
                    {projects.map((project, index) => (
                        <div
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer'>
                            <h2 className={`text-xl px-5
             ${selectedItemIndex === index ? 'text-secondary border-secondary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{project.title}</h2>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-tertiary text-xl'>
                            <a
                                href={projects[selectedItemIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {projects[selectedItemIndex].title}
                            </a>
                        </h2>
                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;
