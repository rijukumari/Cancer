import React from 'react';
import img from '../assets/img.jpg'

export default function Home() {
  return (
    <section className='w-full bg-white'>

    <div className='max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-12'>
      <div className='flex-1 space-y-4 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 leading-tight'>Together We <span > Fight Cancer</span></h1>
        <p className='text-gray-600 text-sm'>Spreading Hope, Awareness, and Support</p>
        <button className='btn'>Join Us</button>

      </div>
      <div className='flex-1 flex justify-center my-8'>
        <img src={img} alt='img' />
      </div>
    </div>

    </section>
  )
}


