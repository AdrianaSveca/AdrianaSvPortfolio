import '../styles/skills.css'

function Skills() {
    return (
        <>
            <div className="skills">
                <div className="skillsHeading">
                    <h5>02 / skills</h5>
                    <h1>Tech <span>Stack</span></h1>
                </div>
                <div className="skillCards">
                    <div className="skillCard">
                        <h3>LANGUAGES</h3>
                        <p className="skillsList">Java</p>
                        <p className="skillsList">c#</p>
                        <p className="skillsList">Python</p>
                    </div>
                    <div className="skillCard">
                        <h3>FRONTEND</h3>
                        <p className="skillsList">HTML</p>
                        <p className="skillsList">CSS</p>
                        <p className="skillsList">React</p>

                    </div>
                    <div className="skillCard">
                        <h3>BACKEND</h3>
                        <p className="skillsList">LARAVEL</p>
                        <p className="skillsList">MYSQL</p>
                        <p className="skillsList">PHP</p>
                    </div>
                    <div className="skillCard">
                        <h3>TOOLS / GAME DEV</h3>
                        <p className="skillsList">Git</p>
                        <p className="skillsList">GitHub</p>
                        <p className="skillsList">Unity</p>
                        <p className="skillsList">Blender</p>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Skills;