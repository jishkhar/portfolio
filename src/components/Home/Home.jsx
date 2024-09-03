import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { NavHashLink as Link } from 'react-router-hash-link'



function Home() {

  const [text] = useTypewriter({
    words: [' Frontend Developer', ' Competitive Programmer', ' Open Source Contributor', ' Backend Developer'],
    loop: true,
  });



  return (

    <section id="home" className='flex flex-col w-full h-fit py-44 items-center justify-center '>
      <h1 className='text-7xl pb-4'>Jishnu Khargharia</h1>

      <h1 className='pb-16 text-4xl'>
        <span style={{ color: 'green' }}>
          {text}
        </span>
        <Cursor />
      </h1>

      <p className='text-xl pb-10'>
        Full Stack Developer crafting seamless web experiences
      </p>

      <div className="pb-20">
        <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a href="https://codeforces.com/profile/k_jish" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faChartSimple}
            className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          />
        </a>
      </div>



      <div className="info">
        <button className="border-black border-2 rounded-3xl px-9 py-4 mr-5 transition transform duration-300 hover:scale-105">
          Resume
        </button>
        <Link to="#contact" smooth>
        <button className="border-black border-2 rounded-3xl px-9 py-4 transition transform duration-300 hover:scale-105">
          Get In Touch
        </button>
        </Link>
      </div>



    </section>
  );
}

export default Home;
