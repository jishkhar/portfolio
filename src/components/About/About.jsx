import React from 'react'
import jk from '../../images/jk.jpeg'

function About() {
  return (
    <section id="about">

      <div className='flex '>
        <div className='bg-red-600 h-fit w-5/12'>
          <img src={jk} alt="" />
        </div>
        <div className='bg-yellow-400 h-fit w-7/12'>
          <h1 className='text-5xl'>About Me</h1>

          <section>
            <p>
              Hello! I'm Jishnu Khargharia, a Full Stack Developer currently pursuing my studies at Siddaganga Institute of Technology. My passion lies in exploring and building innovative projects, particularly in the realms of Artificial Intelligence (AI), Machine Learning (ML), and Web3 technologies.
              <br />
              Beyond coding, I am deeply passionate about the future of technology and how it can be leveraged to solve real-world problems. Whether it's through AI-driven solutions or decentralized applications, I aim to contribute to the technological landscape by building projects that are both innovative and impactful.
            </p>
          </section>

          <section>
            <h1>Tech Stacks</h1>

          </section>
        </div>
      </div>

    </section>
  )
}

export default About
