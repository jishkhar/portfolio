import React from 'react'

function Skills() {
  return (
    <section id="skills">
      <div className='bg-orange-600 h-screen text-4xl'>
        <h1>Skills</h1>
        <p>Here are some of the skills that I have been working on in the past year.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card bg-gray-200 p-4 text-center rounded">Frontend</div>
          <div className="card bg-gray-200 p-4 text-center rounded">Backend</div>
          <div className="card bg-gray-200 p-4 text-center rounded">Others</div>
          {/* bring this others in center */}
        </div>

      </div>
    </section>
  )
}

export default Skills
