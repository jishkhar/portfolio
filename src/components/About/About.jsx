import React from 'react';
import jk from '../../images/jk.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function About() {
  return (
    <section id="about" className="py-20 sm:py-36 h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center px-6 lg:px-20">
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-center lg:pl-16 mb-8 lg:mb-0">
          <img className="rounded-full h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96" src={jk} alt="Jishnu Khargharia" />
        </div>
        <div className="w-full lg:w-7/12 lg:pl-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">A little bit</h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl pb-6 sm:pb-8 lg:pb-8">about me</h1>

          <section className="text-base sm:text-lg lg:text-xl">
            <h2 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Hello! I'm Jishnu Khargharia,</h2>
            <p className="pb-2">
              A Full Stack Developer currently pursuing my studies at Siddaganga Institute of Technology. I am passionate about developing cutting-edge web applications that boost lead generation and improve user engagement.
            </p>
            <p className="pb-2">
              Coding isn't just a job—it's my creative outlet to bring ideas to life, from frontend to backend.
            </p>
            <p>
              Interested in Artificial Intelligence, Machine Learning, and Web3 Technologies.
            </p>
          </section>

          <div className="pt-10 sm:pt-14 flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6">
            <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://codeforces.com/profile/k_jish" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="mailto:jishnukhargharia11@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
            <a href="https://www.instagram.com/jish_1k/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 sm:h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
