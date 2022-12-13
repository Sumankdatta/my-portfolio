import React from 'react';
import ss from '../../../assets/image/swanky.png'
import edu from '../../../assets/image/education.png'
import bike from '../../../assets/image/bikesales.png'
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
  return (
    <div className='w-9/12 mx-auto mt-48' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <h1 className='text-white text-2xl ml-5'>My Portfolio</h1>
      <hr className='' />
      <div className='grid lg:grid-cols-3 gap-6 mt-20' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
        <div className="w-72 bg-teal-800">
          <figure className='h-64 overflow-y-auto'><img className='' src={ss} alt="car!" /></figure>
          <div className="card-body text-center">
            <h2 className="text-xl text-white text-center">Swanky Travel</h2>
            <p className='text-white'>Travel booking website</p>
            <div className="grid grid-cols-2 text-white gap-3">
              <p className='border'>React</p>
              <p className='border'>Tailwind</p>
              <p className='border'>MongoDB</p>
              <p className='border'>Express</p>
            </div>
            <div className='grid grid-cols-2 gap-2'>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://github.com/Sumankdatta/travel-guide-client" target="_blank"> Github </a>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://travel-guide-c6e34.web.app/" target="_blank">Live </a>
            </div>
          </div>
        </div>
        <div className="w-72 bg-teal-800">
          <figure className='h-64 overflow-y-auto'><img className='' src={edu} alt="car!" /></figure>
          <div className="card-body text-center">
            <h2 className="text-xl text-white text-center">Easy Learn</h2>
            <p className='text-white'>Online Educational website</p>
            <div className="grid grid-cols-2 text-white gap-3">
              <p className='border'>React</p>
              <p className='border'>Firebase</p>
              <p className='border'>MongoDB</p>
              <p className='border'>Express</p>
            </div>
            <div className='grid grid-cols-2 gap-2'>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://github.com/Sumankdatta/educational-website-client" target="_blank"> Github </a>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://educational-website-clie-734b9.web.app/" target="_blank">Live </a>
            </div>
          </div>
        </div>
        <div className="w-72 bg-teal-800">
          <figure className='h-64 overflow-y-auto'><img className='' src={bike} alt="car!" /></figure>
          <div className="card-body text-center">
            <h2 className="text-xl text-white text-center">Bike Crush</h2>
            <p className='text-white'>Second hand bike sales website</p>
            <div className="grid grid-cols-2 text-white gap-3">
              <p className='border'>React</p>
              <p className='border'>Tailwind</p>
              <p className='border'>MongoDB</p>
              <p className='border'>Express</p>
            </div>
            <div className='grid grid-cols-2 gap-2'>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://github.com/Sumankdatta/bike-crush" target="_blank"> Github </a>
            <a className='w-24 border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="https://bike-sale-97ac2.web.app/" target="_blank">Live </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MyPortfolio;