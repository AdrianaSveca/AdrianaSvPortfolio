import '../styles/clients.css'


function Client(){
    return(
        <>
    <div className = "clients" id="clients">
        <div className = "clientsHeading">
            <p className="clientSubheading"> 04 / Clients </p>
            <h1>Client <span className="clientSpan">Work</span></h1>
            <p className = "clientParagraph">
                Real businesses, real problems. I've helped teams whip web products that work.
            </p>
        </div>
        <div className = "clientsCards">
            <div className = "clientCard">
                <h5>Dans Den</h5>
                <p className = "clientDescription">A Local Cafe and microbar located in Oldbury.</p>
               <div className="clientLanguages">
                <p className = "clientLanguage">React</p>
                <p className = "clientLanguage">HTML</p>
                <p className = "clientLanguage">CSS</p>
                </div>
                <a href="https://dansden.co.uk/">Visit Site</a>
                
            </div>
            <div className = "clientCard">
                <h5>Anetas kitchen</h5>
                <p className = "clientDescription"></p>
               <div className="clientLanguages">
                <p className = "clientLanguage">React</p>
                <p className = "clientLanguage">HTML</p>
                <p className = "clientLanguage">CSS</p>
                </div>
                <a href="">Work In Progress</a>
                
            </div>
            <div className = "clientCard">
                <h5>Bromley Elite Carpet Flooring</h5>
                <p className = "clientDescription"></p>
               <div className="clientLanguages">
                <p className = "clientLanguage">React</p>
                <p className = "clientLanguage">HTML</p>
                <p className = "clientLanguage">CSS</p>
                </div>
                <a href="">Work In Progress</a>
                
            </div>
            
        </div>
    </div>
    </>

    )

}
export default Client;