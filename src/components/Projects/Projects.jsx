import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

function Projects() {
  return (
    <section id='projects' className='min-h-screen flex items-center py-12 bg-gray-100'>

      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl mb-20 font-semibold'>Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="card bg-white shadow-md rounded-lg p-6 text-center">
              <div className='flex justify-between items-center'>
                <h2 className='text-xl sm:text-2xl font-bold'>Todo App</h2>
                <div className='flex space-x-4'>
                  <a href="https://github.com/jishkhar/Todo-React" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />
                  </a>
                  <a href="https://todo-react-two-sandy.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </div>
              <p className='mt-4'>
                A user-friendly Todo App designed to help you manage tasks efficiently. It allows you to add, edit, delete, and mark tasks as complete. It provides a smooth experience in organizing and tracking your to-do list.
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Tech Stack:</span> React.js, Tailwind CSS
              </p>
            </div>

            <div className="card bg-white shadow-md rounded-lg p-6 text-center">
              <div className='flex justify-between items-center'>
                <h2 className='text-xl sm:text-2xl font-bold'>Password Generator</h2>
                <div className='flex space-x-4'>
                  <a href="https://github.com/jishkhar/passwordGenerator-React" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />
                  </a>
                  <a href="https://password-generator-react-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </div>
              <p className='mt-4'>
                The Password Generator App creates strong, random passwords to enhance security. Users can customize password length, complexity, and character types. It ensures secure, unique passwords for protecting online accounts and personal data.
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Tech Stack:</span> React.js, Tailwind CSS
              </p>
            </div>

            <div className="card bg-white shadow-md rounded-lg p-6 text-center">
              <div className='flex justify-between items-center'>
                <h2 className='text-xl sm:text-2xl font-bold'>Quiz App</h2>
                <div className='flex space-x-4'>
                  <a href="https://github.com/jishkhar/Quiz-App" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />
                  </a>
                  <a href="https://quiz-app-self-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </div>
              <p className='mt-4'>
                The Quiz App offers interactive quizzes on various topics, allowing users to test their knowledge and track their progress. Features include multiple-choice questions, instant feedback, and score tracking.
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Tech Stack:</span> HTML, CSS, JavaScript
              </p>
            </div>

            <div className="card bg-white shadow-md rounded-lg p-6 text-center">
              <div className='flex justify-between items-center'>
                <h2 className='text-xl sm:text-2xl font-bold'>QR Code Generator</h2>
                <div className='flex space-x-4'>
                  <a href="https://github.com/jishkhar/Qr-Code-Generator" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faGithub}
                    />
                  </a>
                  <a href="https://qr-code-generator-zeta-roan.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      className='h-6 transform transition-transform duration-300 hover:scale-125'
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </div>
              <p className='mt-4'>
                The QR Code Generator creates versatile QR codes for URLs, text, and other data types. It offers a straightforward interface for quick and efficient code generation. Ideal for personal and business use.
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Tech Stack:</span> HTML, CSS, JavaScript
              </p>
            </div>
          </div>

          <a href="https://github.com/jishkhar?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className='text-lg sm:text-2xl mt-20 bg-gray-200 rounded-3xl py-2 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-300'>
              More Projects
            </button>
          </a>

        </div>
      </div>

    </section>
  );
}

export default Projects;
