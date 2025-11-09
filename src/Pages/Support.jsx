import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

function Support() {
  return (
    <section className='w-full bg-white my-9'>
      <div>
        <h1 className='text-3xl md:text-4xl text-center font-semibold text-gray-900 leading-tight'>How we can Help</h1>
        <p className='text-gray-600 text-sm text-center'>We offer a range of support services designed to help patients,survivors,and families navigate their cancer journey.</p>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-9 text-gray-700'>
         <div className='shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2'>
          <div className='text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full'>
          <BiMessageRounded className='text '/>

          </div>
          <h3 className='font-bold'>Support Groups:</h3>
          <p className='text-sm text-gray-500'>Connect with others who understand your journey through our community support groups.</p>
         </div>
         <div className='shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2'>
          <div className='text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full'>
          <LuBookOpen className='text '/> 

          </div>
          <h3 className='font-bold'>Education Resources:</h3>
          <p className="text-sm text-gray-500">Access comprehensive information about cancer prevention, treatment,and care.</p>
         </div>
         <div className='shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2'>
          <div className='text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full'>
          <FaRegCalendar/>

          </div>
          <h3 className='font-bold'>Events & Workshops:</h3>
          <p className="text-sm text-gray-500">Participate in awareness events, fundraisers,and educational workshops.</p>
         </div>
         <div className='shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2'>
          <div className='text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full'>
          <IoCallOutline/>

          </div>
          <h3 className='font-bold'>24/7 Helpline:</h3>
          <p className="text-sm text-gray-500">Reach out anytime for emotional support and guidance from trained counselors.</p>
         </div>
        </div>
      </div>
      
    </section>
  )
}

export default Support
