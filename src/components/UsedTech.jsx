import React from 'react'
const skills = [
    "Java",
    "Spring Boot",
    "Python",
    "Java Scripts",
    "Angular",
    "Node",
    "C",
    "C++",
    "React",
    "MySQL"
]
function UsedTech() {
    return (
        <div className='flex gap-20 items-center py-5 bg-gradient-to-b from-blue-800 to-gray-800'>
                <div></div>
                <div></div>
                <div></div>
                <div>

                    <h2 className='text-tertiary text-3xl'>Technologies I have been working recently: </h2>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {skills.map((skill, index) => (
                            <div className='border border-tertiary py-2 px-2'>
                                <h2 className='text-secondary text-1xl'>{skill}</h2>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default UsedTech;