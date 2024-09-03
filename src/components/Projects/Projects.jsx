import React from 'react'

function Projects() {
  return (
    <section id='projects'>
        
        <div className=' h-screen flex p-24 justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl mb-5'>Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
            <div className="card  p-4 text-center">
              <h1 className='hh'>Languages</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-1   p-3'>
                
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Frontend</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-3   justify-center p-3'>

              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Backend</h1>
              <div className='sp grid grid-cols-1   sm:grid-cols-4 gap-1 p-3'>
                
              </div>
            </div>
            <div className="card  p-4 text-center">
              <h1 className='hh'>Databases</h1>
              <div className='sp grid grid-cols-1 sm:grid-cols-4 gap-1   p-3'>
                
              </div>
            </div>

          </div>

          <button className='text-2xl mt-20 bg-gray-200 rounded-3xl py-2 px-4'>More Projects</button>
        </div>
      </div>
      
    </section>
  )
}

export default Projects
