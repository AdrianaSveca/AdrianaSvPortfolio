import "../styles/hero.css";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="heroInformation"> <h1 className="heroHeading">ADRIANA SVECA</h1>
                    <h4 className="heroSubHeading">Software Developer</h4>
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