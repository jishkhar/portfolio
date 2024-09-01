import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';



function Home() {

  const [text] = useTypewriter({
    words: [' Frontend Developer', ' Backend Developer', ' Competitive Programmer', ' Open Source Contributor'],
    loop: true,
  });

  
  
  return (
    
    <section id="home" className='flex flex-col bg-pink-200 w-full h-fit py-44 items-center justify-center '>
      <h1 className='text-7xl pb-4'>Jishnu Khargharia</h1>
      
      <h1 className='pb-16'>
        <span className='text-4xl' style={{color: 'green'}}>
          {text}
        </span>
        <Cursor />
      </h1>

      <p className='text-xl pb-10'>
      Full Stack Developer crafting seamless web experiences 
      </p>

      <div className="pb-20">
        <FontAwesomeIcon
          icon={faGithub}
          className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
        />
        <FontAwesomeIcon
          icon={faChartSimple}
          className="h-8 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
        />
      </div>



      <div className="info">
        <button className="bg-blue-400 rounded-3xl px-9 py-4 mr-5 transition transform duration-300 hover:scale-105">
          Download Resume
        </button>
        <button className="bg-blue-400 rounded-3xl px-9 py-4 transition transform duration-300 hover:scale-105">
          Get In Touch
        </button>
      </div>



    </section>
  );
}

export default Home;
