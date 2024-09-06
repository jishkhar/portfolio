import React from 'react';
import './Skills.css';
import cpp from '../../images/c++.png'
import c from '../../images/c.png'
import py from '../../images/py.png'
import js from '../../images/js.png'
import ts from '../../images/ts.png'
import re from '../../images/re.png'
import tw from '../../images/tw.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import nd from '../../images/nd.png'
import ex from '../../images/ex.png'
import mongoose from '../../images/mongoose.png'
import mdb from '../../images/mdb.png'
import gt from '../../images/gt.png'
import gth from '../../images/gth.png'
import fgm from '../../images/fgm.png'
import fra from '../../images/fra.png'

function Skills() {
  return (
    <section id="skills" className='skills h-fit py-16'>
      <div className=' h-fit flex p-20 justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl mb-7'>Tech Stacks</h1>
          <p className='text-2xl'>Here are some of the skills that I have been working on in the past year.</p>

          <div className="mt-14">

            <div className="languages lang flex">
              <h1>Languages : </h1>
              <div>
                <div className='dd flex'>
                  <img src={cpp} alt="" />
                  <span>C++</span>
                </div>
                <div className='dd flex'>
                  <img src={c} alt="" />
                  <span>C</span>
                </div>
                <div className='dd flex'>
                  <img src={py} alt="" />
                  <span>Python</span>
                </div>
                <div className='dd flex'>
                  <img src={js} alt="" />
                  <span>JavaScript</span>
                </div>
                <div className='dd flex'>
                  <img src={ts} alt="" />
                  <span>TypeScript</span>
                </div>
              </div>
            </div>

            <div className="frontend lang flex">
              <h1>Frontend : </h1>
              <div>
                <div className='dd flex'>
                  <img src={re} alt="" />
                  <span>React</span>
                </div>
                <div className='dd flex'>
                  <img src={tw} alt="" />
                  <span>Tailwind CSS</span>
                </div>
                <div className='dd flex'>
                  <img src={re} alt="" />
                  <span>React Router Dom</span>
                </div>
                <div className='dd flex'>
                  <img src={re} alt="" />
                  <span>React Scroll</span>
                </div>
                <div className='dd flex'>
                  <img src={html} alt="" />
                  <span>HTML</span>
                </div>
                <div className='dd flex'>
                  <img src={css} alt="" />
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="backend lang flex">
              <h1>Backend : </h1>
              <div>
                <div className='dd flex'>
                  <img src={nd} alt="" />
                  <span>Node js</span>
                </div>
                <div className='dd flex'>
                  <img src={ex} alt="" />
                  <span>Express</span>
                </div>
                <div className='dd flex'>
                  <img src={mongoose} alt="" />
                  <span>Mongoose</span>
                </div>
                <div className='dd flex'>
                  <img src={mdb} alt="" />
                  <span>MongoDb</span>
                </div>
              </div>
            </div>

            <div className="others flex lang">
              <h1>Dev Tools : </h1>
              <div>
              <div className='dd flex'>
                  <img src={gt} alt="" />
                  <span>Git</span>
                </div>
                <div className='dd flex'>
                  <img src={gth} alt="" />
                  <span>GitHub</span>
                </div>
                <div className='dd flex'>
                  <img src={fgm} alt="" />
                  <span>Figma</span>
                </div>
                <div className='dd flex'>
                  <img src={fra} alt="" />
                  <span>Framer Motion</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
