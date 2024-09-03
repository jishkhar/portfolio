import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className='skills'>
      <div className=' h-screen flex p-24 justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl mb-5'>Tech Stacks</h1>
          <p className='text-2xl'>Here are some of the skills that I have been working on in the past year.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="card  p-4 text-center">
              <h1 className='hh'>Languages</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-1   p-3'>
                <span>c++</span>
                <span>C</span>
                <span>Javascript</span>
                <span>TypeScript</span>
                <span>Python</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Frontend</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-3   justify-center p-3'>
                <span>React</span>
                <span>Tailwind Css</span>
                <span>React Scroll</span>
                <span>Bootstrap</span>
                <span>HTML</span>
                <span>CSS</span>
                <span className='w-44'>React Router Dom</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Backend</h1>
              <div className='sp grid grid-cols-1   sm:grid-cols-4 gap-1 p-3'>
                <span>Node</span>
                <span>Express</span>
                <span>Axios</span>
                <span>Mongoose</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Databases</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-1   p-3'>
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Dev Tools</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-1   p-3'>
                <span>Git</span>
                <span>GitHub</span>
                <span>Framer Motion</span>
                <span>Figma</span>
                <span>Vercel</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
