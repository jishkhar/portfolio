import React from 'react'

function Skills() {
  return (
    <section id="skills">
      <div className=' h-screen flex p-32 justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl mb-5'>Tech Stacks</h1>
          <p className='text-2xl'>Here are some of the skills that I have been working on in the past year.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20">
            <div className="card bg-gray-200 p-4 text-center rounded">
              <h1>Languages</h1>
              <div>
                <span>c++</span>
                <span>C</span>
                <span>Javascript</span>
                <span>TypeScript</span>
                <span>Python</span>
              </div>
            </div>
            <div className="card bg-gray-200 p-4 text-center rounded">
              <h1>Frontend</h1>
              <div>
                <span>React</span>
                <span>React Router Dom</span>
                <span>Tailwind Css</span>
                <span>React Scroll</span>
                <span>Bootstrap</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="card bg-gray-200 p-4 text-center rounded">
              <h1>Backend</h1>
              <div>
                <span>Node</span>
                <span>Express</span>
                <span>Axios</span>
                <span>Mongoose</span>
              </div>
            </div>
            <div className="card bg-gray-200 p-4 text-center rounded">
              <h1>Databases</h1>
              <div>
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="card bg-gray-200 p-4 text-center rounded">
              <h1>Dev Tools</h1>
              <div>
                <span>Git</span>
                <span>GitHub</span>
                <span>Framer Motion</span>
                <span>Figma</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
