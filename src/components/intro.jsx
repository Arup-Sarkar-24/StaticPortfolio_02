import React, { useEffect, useState } from "react";

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
        <div className="intro-container h-[80vh] bg-primary flex  flex-col items-start justify-center gap-8 w-full px-10 py-5">
            <div className="container text-5xl sm:text-3xl flex">
                <h1 className="text-white">Namaskara, I am&nbsp;</h1>
                <h1 className="text-1xl sm:text-1xl text-tertiary font-semibold">{sentences[currentIndex]}</h1>
            </div>
            <h4 className="text-white w-2/3">
                My expertise in software development, specializing in Java back-end development for IT firms over 2+ years. I have resolved API-related issues, fixed data anomalies, and optimized performance and scalability; resulting in improved overall system efficiency. I have also integrated agile methodologies, collaborated on cross-functional teams, performed end-to-end testing, and ensured code maintainability.
            </h4>
        </div>
    );
}

export default Intro;
