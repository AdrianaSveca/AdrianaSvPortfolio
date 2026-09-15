import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

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

    </>
  )
}

export default App
