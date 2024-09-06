import './App.css'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
