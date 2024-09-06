import React from 'react';
import cpp from '../../images/c++.png';
import c from '../../images/c.png';
import py from '../../images/py.png';
import js from '../../images/js.png';
import ts from '../../images/ts.png';
import re from '../../images/re.png';
import tw from '../../images/tw.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import nd from '../../images/nd.png';
import ex from '../../images/ex.png';
import mongoose from '../../images/mongoose.png';
import mdb from '../../images/mdb.png';
import gt from '../../images/gt.png';
import gth from '../../images/gth.png';
import fgm from '../../images/fgm.png';
import fra from '../../images/fra.png';

function Skills() {
  return (
    <section id="skills" className='py-16 px-4 md:px-8 lg:px-32'>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl mt-20 mb-7'>Tech Stacks</h1>
        <p className='text-lg md:text-xl lg:text-2xl md:mb-28 sm:mb-20  mb-16'>
          Here are some of the skills that I have been working on in the past year.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className='text-3xl font-medium mb-4'>Languages</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {[{ src: cpp, label: 'C++' }, { src: c, label: 'C' }, { src: py, label: 'Python' }, { src: js, label: 'JavaScript' }, { src: ts, label: 'TypeScript' }].map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={item.src} alt={item.label} className='w-8 h-8 md:w-12 md:h-12' />
                  <span className='text-md md:text-lg'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mb-12">
            <h2 className='text-3xl font-medium mb-4'>Frontend</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {[{ src: re, label: 'React' }, { src: tw, label: 'Tailwind CSS' }, { src: re, label: 'React Router Dom' }, { src: re, label: 'React Scroll' }, { src: html, label: 'HTML' }, { src: css, label: 'CSS' }].map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={item.src} alt={item.label} className='w-8 h-8 md:w-12 md:h-12' />
                  <span className='text-md md:text-lg'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mb-12">
            <h2 className='text-3xl font-medium mb-4'>Backend</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {[{ src: nd, label: 'Node.js' }, { src: ex, label: 'Express' }, { src: mongoose, label: 'Mongoose' }, { src: mdb, label: 'MongoDB' }].map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={item.src} alt={item.label} className='w-8 h-8 md:w-12 md:h-12' />
                  <span className='text-md md:text-lg'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className='text-3xl font-medium mb-4'>Dev Tools</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {[{ src: gt, label: 'Git' }, { src: gth, label: 'GitHub' }, { src: fgm, label: 'Figma' }, { src: fra, label: 'Framer Motion' }].map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={item.src} alt={item.label} className='w-8 h-8 md:w-12 md:h-12' />
                  <span className='text-md md:text-lg'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
