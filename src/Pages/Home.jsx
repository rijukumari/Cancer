import React from 'react';
import img from '../assets/img.jpg'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <section className='w-full bg-white my-14 '>

    <div className='max-w-6xl mx-auto   flex flex-col md:flex-row items-center gap-12'>
      <div className='flex-1 space-y-4 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 leading-tight'>Together We Fight <span className='text'>Cancer</span></h1>
        <h3 className='text-gray-500 text-lg font-semibold'>Spreading Hope, Awareness, and Support</h3>
        <p className='text-gray-600 text-sm'>Join Our community in the fight against cancer.Every voice matters , every action counts,and together we can make a difference.</p>
        
        <Link to={'/donate'}>
        <button className='btn my-4'>Join Our Mission</button>
        </Link>

      </div>
      <div className='flex-1 flex justify-center my-8'>
        <img src={img} alt='img' />
      </div>
    </div>

    </section>
  )
}


