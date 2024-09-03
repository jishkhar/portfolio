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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh font-bold text-3xl'>Todo App</h1>
                <div>
                  <a href="https://github.com/jishkhar/Todo-React" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />

                  </a>
                  <a href="https://todo-react-two-sandy.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />

                  </a>

                </div>
              </div>
              <div className='mt-5 pb-5 pt-1'>
                A user-friendly Todo App designed to help you manage tasks efficiently. It allows you to add, edit, delete, and mark tasks as complete. I provides a smooth experience in organizing and tracking your to-do list.
              </div>
              <div className='mt-5'>
                <span className='font-bold'>Tech Stack : </span>
                <span className='px-2'>React.js</span>
                <span className='pr-2'>Tailwind CSS</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh font-bold text-3xl'>Password Generator</h1>
                <div>
                  <a href="https://github.com/jishkhar/passwordGenerator-React" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />

                  </a>
                  <a href="https://password-generator-react-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />

                  </a>

                </div>
              </div>
              <div className='mt-5'>
                The Password Generator App creates strong, random passwords to enhance security. Users can customize password length, complexity, and character types.  It ensures secure, unique passwords for protecting online accounts and personal data.
              </div>
              <div className='mt-5'>
                <span className='font-bold'>Tech Stack : </span>
                <span className='px-2'>React.js</span>
                <span className='pxr-2'>Tailwind CSS</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh font-bold text-3xl'>Quiz App</h1>
                <div>
                  <a href="https://github.com/jishkhar/Quiz-App" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />

                  </a>
                  <a href="https://quiz-app-self-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />

                  </a>

                </div>
              </div>
              <div className='mt-5'>
                The Quiz App offers interactive quizzes on various topics, allowing users to test their knowledge and track their progress. Features include multiple-choice questions, instant feedback, and score tracking.
              </div>
              <div className='mt-5'>
                <span className='font-bold'>Tech Stack : </span>
                <span className='px-2'>HTML</span>
                <span className='pr-2'>CSS</span>
                <span className='pr-2'>JavaScript</span>
              </div>
            </div>
            <div className="card  p-4 text-center">
              <div className='flex justify-between'>
                <h1 className='hh  font-bold text-3xl'>QR Code Generator</h1>
                <div>
                  <a href="https://github.com/jishkhar/Qr-Code-Generator" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />

                  </a>
                  <a href="https://qr-code-generator-zeta-roan.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='pl-2 h-6 pt-1 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />

                  </a>

                </div>
              </div>
              <div className='mt-5'>
                The QR Code Generator creates versatile QR codes for URLs, text, and other data types. It offers a straightforward interface for quick and efficient code generation. Ideal for personal and business use.
              </div>
              <div className='mt-5'>
                <span className='font-bold'>Tech Stack : </span>
                <span className='px-2'>HTML</span>
                <span className='pr-2'>CSS</span>
                <span className='pr-2'>JavaScript</span>
              </div>
            </div>
          </div>

          <a href="https://github.com/jishkhar?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className='text-2xl mt-9 bg-gray-200 rounded-3xl py-2 px-4 transition-transform duration-300 hover:scale-105 hover:bg-gray-300'>
              More Projects
            </button>
          </a>

        </div>
      </div>

    </section>
  )
}

export default Projects
