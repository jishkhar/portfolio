import React from 'react'
import jk from '../../images/jk.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function About() {
  return (
    <section id="about">

      <div className='flex py-48'>
        <div className=' h-fit w-5/12 flex items-center pl-44 pt-12'>
          <img className='rounded-full h-96' src={jk} alt="" />
        </div>
        <div className='h-fit w-7/12 pr-56 pl-10'>
          <h1 className='text-5xl'>A little bit</h1>
          <h1 className='text-5xl pb-8'>about me</h1>

          <section className='text-lg'>
            <h2 className='mb-4'>Hello! I'm Jishnu Khargharia, </h2>
            <p className='pb-2'>
              A Full Stack Developer currently pursuing my studies at Siddaganga Institute of Technology. I am passionate about developing cutting-edge web applications that boost lead generation and improve user engagement.
            </p>
            <p className='pb-2'>
              Coding isn't just a job—it's my creative outlet to bring ideas to life, from frontend to backend.
            </p>
            <p>
              Interested in Artificial Intelligence, Machine Learning and Web3 Technologies.
            </p>
          </section>

          <div className="pt-14">
            <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-7 pl-1 pr-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://codeforces.com/profile/k_jish" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="mailto:jishnukhargharia11@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://www.instagram.com/jish_1k/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>


          </div>

        </div>
      </div>

    </section>
  )
}

export default About
