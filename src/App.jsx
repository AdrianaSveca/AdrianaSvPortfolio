import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Client from './components/Client.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <>
      <div className="heroSection">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Client/>
      <Contact/>

    </>
  )
}

export default App
