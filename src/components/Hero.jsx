import { useEffect, useState } from "react";
import "../styles/hero.css";

function Hero() {

    const myArray = [
        "Software Developer",
        "CS Student @ Aston",
        "Software Engineer",
        "Web Developer"
    ];

    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const currentTitle = myArray[index];

        const timer = setTimeout(() => {

            if (!isDeleting) {

                if (char < currentTitle.length) {
                    setChar(char + 1);
                } else {

                    setIsDeleting(true);
                }

            }


            else {

                if (char > 0) {
                    setChar(char - 1);
                } else {
                    setIsDeleting(false);
                    setIndex(index => (index + 1) % myArray.length);
                }

            }

        }, isDeleting ? 70 : 150);

        return () => {
            clearTimeout(timer);
        };

    }, [char, isDeleting, index]);


    return (
        <section className="hero">

            <div className="heroInformation">

                <h1 className="heroHeading">
                    ADRIANA SVECA
                </h1>

                <h4 className="heroSubHeading">
                    {myArray[index].slice(0, char)}
                    <span className="cursor">|</span>
                </h4>

                <p className="heroDescription">
                    I build web applications, games and interactive experiences.
                </p>

            </div>

            <div className="heroButtons">
                <a href="#projects" className="primaryButton">
                    View My Work
                </a>

                <a href="#contact" className="secondaryButton">
                    Contact Me
                </a>
            </div>

        </section>
    );
}

export default Hero;