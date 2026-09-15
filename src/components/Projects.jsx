import '../styles/projects.css'


function Projects(){
    return(
        <>
    <div className = "projects">
        <div className = "projectsHeading">
            <p className="projectSubheading"> 03 / projects </p>
            <h1>Personal <span>Projects</span></h1>
            <p className = "projectParagraph">
                Things I've built because I needed them, found them interesting, or wanted to push myself.
            </p>
        </div>
        <div className = "projectsCards">
            <div className = "projectCard">
                <h5>Hallway Kitty</h5>
                <p className = "projectDescription">A short first-person horror game built in Unity, featuring custom 3D assets, environments and gameplay mechanics created from scratch.</p>
               <div className="projectLanguages">
                <p className = "projectLanguage">Unity</p>
                <p className = "projectLanguage">C#</p>
                <p className = "projectLanguage">Blender</p>
                </div>
                
            </div>
            <div className = "projectCard">
                <h5>Hex</h5>
                <p className = "projectDescription">A web-based strategy game platform built with Laravel, featuring user authentication, an interactive hexagonal game board and competitive gameplay systems.</p>
                 <div className="projectLanguages">
                <p className = "projectLanguage">Laravel</p>
                <p className = "projectLanguage">PHP</p>
                <p className = "projectLanguage">MySQL</p>
                </div>
                
            </div>
            <div className = "projectCard">
                <h5>Wellth</h5>
                <p className = "projectDescription">A university group project focused on wellbeing, built with Laravel and MySQL with features including user accounts, wishlists and a review and rating system.</p>
                 <div className="projectLanguages">
                <p className = "projectLanguage">Laravel</p>
                <p className = "projectLanguage">MySQL</p>
                </div>
                
            </div>
        </div>
    </div>
    </>

    )

}
export default Projects;