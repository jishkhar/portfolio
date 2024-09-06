import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { NavHashLink as Link } from 'react-router-hash-link';

function Home() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Competitive Programmer'],
    loop: true,
  });

  return (
    <section id="home" className="flex flex-col items-center justify-center w-full h-screen py-32 sm:py-44 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6">Jishnu Khargharia</h1>

      <h1 className="pb-8 sm:pb-12 md:pb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        <span style={{ color: 'green' }}>
          {text}
        </span>
        <Cursor />
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl pb-8 sm:pb-10 mx-10">
        Full Stack Developer trying to build innovative and user-friendly applications.
      </p>

      <div className="pb-10 sm:pb-12 flex space-x-4 sm:space-x-6">
        <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-6 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-6 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="h-6 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://codeforces.com/profile/k_jish" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="h-6 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
        <button className="border-black border-2 rounded-3xl px-7 sm:px-9 py-3 sm:py-4 transition transform duration-300 hover:scale-105 text-base sm:text-lg">
          Resume
        </button>
        <Link to="#contact" smooth>
          <button className="border-black border-2 rounded-3xl px-7 sm:px-9 py-3 sm:py-4 transition transform duration-300 hover:scale-105 text-base sm:text-lg">
            Get In Touch
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
