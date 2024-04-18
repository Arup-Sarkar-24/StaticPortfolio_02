import React, { useEffect, useState } from "react";
import myImage from "../Storage/me1.png";
function Intro() {
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
        <div className="intro-container h-[88vh] bg-primary flex items-center justify-center gap-8 w-full px-10 py-5">
            <div className="content flex justify-between items-center w-full">
                <div className="text-content flex flex-col gap-4">
                    <div className="flex">
                        <h1 className="text-white text-5xl sm:text-3xl">Namaskara, I am&nbsp;</h1>
                        <h1 className="text-3xl sm:text-1xl text-tertiary font-semibold">{sentences[currentIndex]}</h1>
                    </div>
                    <h4 className="text-white w-2/3">
                        My expertise in software development, specializing in Java back-end development for IT firms over 2+ years. I have resolved API-related issues, fixed data anomalies, and optimized performance and scalability; resulting in improved overall system efficiency. I have also integrated agile methodologies, collaborated on cross-functional teams, performed end-to-end testing, and ensured code maintainability.
                    </h4>
                </div>
                {/* Add the image here */}
                <div className="image-container w-1/3 flex justify-end">
                    <img src={myImage} alt="profile_Picture" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
