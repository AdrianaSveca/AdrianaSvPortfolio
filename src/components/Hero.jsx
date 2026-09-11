import "../styles/hero.css";
import { useState, useEffect } from "react";

function Hero() {
    const myArray = [
        'Software Developer',
        'CS Student @ Aston',
        'Software Engineer',
        'Web Developer'
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setIndex(index => (index + 1) % myArray.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };

    }, []);





    return (
        <>
            <div className="hero">
                <div className="heroInformation"> <h1 className="heroHeading">ADRIANA SVECA</h1>
                    <h4 className="heroSubHeading">{myArray[index]}</h4>
                    <p className="heroDescription">I build web applications, games and
                        interactive experiences.</p></div>

                <div className="heroButtons">
                    <button className="primaryButton">View My Work</button>
                    <button className="secondaryButton">Contact Me</button>

                </div>
            </div>

        </>

    )
}
export default Hero;