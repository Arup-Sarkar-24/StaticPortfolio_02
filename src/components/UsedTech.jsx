import React from 'react';
import { FaJava, FaNode, FaAngular, FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPython, SiC, SiCplusplus, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
const skills = [
    {
        name:"Java",
        icon:<FaJava />

    },
    {
        name:"Spring Boot",
        icon:<BiLogoSpringBoot  />

    },
    {
        name:"Python",
        icon:<SiPython />

    },
    {
        name:"Java Scripts",
        icon:<IoLogoJavascript />

    },
    {
        name:"Angular",
        icon:<FaAngular />

    },
    {
        name:"Node",
        icon:<FaNode />

    },
    {
        name:"C",
        icon:<SiC />

    },
    {
        name:"C++",
        icon:<SiCplusplus />

    },
    {
        name:"React",
        icon:<FaReact />

    },
    {
        name:"MySQL",
        icon:<SiMysql />

    }
]
function UsedTech() {
    return (
        <div className='flex gap-20 items-center py-5 bg-gradient-to-b from-blue-800 to-gray-800'>
                <div></div>
                <div></div>
                <div></div>
                <div>

                    <h2 className='text-tertiary text-3xl'>Technologies I have been working recently: </h2>
                    <div className='flex flex-wrap gap-5 mt-5'>
                        {skills.map((skill) => (
                            <div className='border border-tertiary py-4 px-4'>
                                <h2 className='text-secondary text-7xl'>{skill.icon}</h2>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default UsedTech;