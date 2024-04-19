import React from 'react'
import SectionTitle from './SectionTitle';

export const About = () => {

    return (
        <div name="about">
            <SectionTitle title="About" />
            <div className='flex w-full items-center h-screen bg-gradient-to-b from-gray-800 to-blue-800'>
                <div className='h-[70vh] w-1/2'>
                    <lottie-player src="https://lottie.host/29e670c3-ee4b-4be1-bb37-398082d79057/ICQ5qgr7Su.json" background="##6666FF" speed="1" autoplay loop ></lottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2'>
                    <p className='text-white'>
                        Good Day, I am a collaborative software developer specializing in Java Backend development. I bring 2 years of experience in software developer roles with IT Firms. My Educational Journey encompasses both hardware and software domain, which has fueled my passion for innovation and optimizing performance. I pride myself as an analytical thinker, attentive listener and always eager to learn and adapt, with a strong commitment to delivering high quality work.
                    </p>
                    <p className='text-white'>
                        I am a Bachelor of Technology (B.Tech) graduate in Applied Electronics & Instrumentation Engineering (AEIE) awarded in 2022 from Maulana Abul Kalam Azad University of Technology (Makaut), Kolkata.I chose to join an IT firm and pursue a career as a software developer despite my background in Electronics & Instrumentation Engineering because I believe that the skills and knowledge I gained during my education are highly transferable and complementary to the field of software development.Now, my transition to IT firms as a software developer is an existing Journey and I am genuinely focused on the endless possibilities.
                    </p>
                    <p className='text-white'>
                        During my Academic journey, I build  a solid Foundation in various programing languages including C,C++,Java and Python.  And gained expertise in problem solving, OOPs, DS & Algo, exception handling concepts. To further scale up my skill-set, I pursue a training Course of Java Full stack Development from Simplilearn learn. And gaining knowledge in creating APIs, web development, Front end development with Angular, DevOps framework, life cycle and spring boot based microservice development. Which provides me a robust foundation of java backend.
                    </p>
                    <p className='text-white'>
                    In my free time, I enjoy a variety of hobbies that keep me active and engaged. Swimming allows me to stay fit while relaxing in the water. I also love playing online chess, where my rapid rating is 1550, as it challenges my strategic thinking. Cycling gives me the chance to explore the outdoors and clear my mind. In addition, I enjoy reading Bengali novels, which enrich my cultural understanding and provide a source of inspiration. I'm multilingual and can speak in Hindi, as well as read, write, and speak fluently in both Bengali and English.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;