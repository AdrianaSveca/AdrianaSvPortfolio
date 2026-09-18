import "../styles/about.css";


function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="aboutLeft">
                    <h5>01/about</h5>
                    <h1 className="aboutWhite">Building things</h1>
                    <h1 className="aboutPurple">that matter</h1>
                    <p>Im a third-year Computer Science student at Aston University.
                        I care deeply about performance, correctness and the craft of building tools that developers
                        and clients love.
                    </p>
                    <p>Outside of coursework, I have built and deployed client websites for small businesses and
                        developed a short horror game with custom assets made in Blender. Im looking for graduate roles in
                        software engineering, full-stack development and related technical roles. </p>
                    <div className="aboutLinks">
                        <a href="">Download Resume</a>
                        <a href="">Github</a>
                    </div>

                </div>
                <div className="aboutRight">
                    <div className="aboutStats">
                        <h2>2:1</h2>
                        <p>Current Classification</p>
                        <p>BSc Computer Science</p>
                    </div>
                    <div className="aboutStats">
                        <h2>150+</h2>
                        <p>Github Commits in the past year</p>
                    </div>
                    <div className="aboutStats">
                        <h2>5+</h2>
                        <p>Projects Built</p>
                        <p>Web • Games • Clients</p>
                    </div>
                    <div className="aboutStats">
                        <h2>2027</h2>
                        <p>Graduating</p>
                        <p>Aston University</p>
                    </div>

                </div>
            </div>


        </>
    )
}
export default About;