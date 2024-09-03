import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

function Projects() {
  return (
    <section id='projects'>

      <div className=' h-screen flex p-24 justify-center mx-12'>
        <div className='text-center'>
          <h1 className='text-6xl mb-5'>Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh'>Todo App</h1>
                <div>
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faGithub} />
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faArrowUpRightFromSquare} />
                </div>
              </div>
              <div className='mt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus aut qui necessitatibus sequi consequatur voluptatem veniam, magnam aliquam voluptates.
              </div>
              <div className='mt-5'>
                <span>Tech Stack : </span>
                <span>React.js</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh'>Password Generator</h1>
                <div>
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faGithub} />
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faArrowUpRightFromSquare} />
                </div>
              </div>
              <div className='mt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus aut qui necessitatibus sequi consequatur voluptatem veniam, magnam aliquam voluptates.
              </div>
              <div className='mt-5'>
                <span>Tech Stack : </span>
                <span>React.js</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh'>Quiz App</h1>
                <div>
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faGithub} />
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faArrowUpRightFromSquare} />
                </div>
              </div>
              <div className='mt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus aut qui necessitatibus sequi consequatur voluptatem veniam, magnam aliquam voluptates.
              </div>
              <div className='mt-5'>
                <span>Tech Stack : </span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh'>QR Code Generator</h1>
                <div>
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faGithub} />
                  <FontAwesomeIcon className='pl-2 h-6 pt-1' icon={faArrowUpRightFromSquare} />
                </div>
              </div>
              <div className='mt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus aut qui necessitatibus sequi consequatur voluptatem veniam, magnam aliquam voluptates.
              </div>
              <div className='mt-5'>
                <span>Tech Stack : </span>
                <span>React.js</span>
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
