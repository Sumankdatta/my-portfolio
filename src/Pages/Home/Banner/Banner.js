import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import {AiOutlineDownload} from 'react-icons/ai'


const Banner = () => {

    return (
       <div className='text-white lg:ml-48 ml-16 lg:mt-20'>
        <h3 className='lg:text-3xl text-2xl text-emerald-500'>Hello, This is</h3>
        <h1 className='lg:text-7xl text-4xl font-bold text-gray-300'>Suman K Datta</h1>
        <h2 className='lg:text-5xl text-3xl'><span style={{ color: 'white', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Front-end developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h2>
        <p className='mt-10 text-xl text-gray-300 w-8/12'>I am a Frontend(ReactJs)web developer with 6 months of  learning/working experience.  I love to work with logic and build it by programming.</p>
       <div className='flex'>
       <a className='w-32 border px-5 py-2  text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="resume/dat.pdf" target="_blank"> <AiOutlineDownload></AiOutlineDownload>Resume </a>
       <a className='w-32 border px-5 py-2  text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://www.linkedin.com/in/suman-kumar-datta/" target="_blank"> LinkedIn </a>
        
       
       </div>
       </div>
    );
};

export default Banner;