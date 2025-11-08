import React from 'react'

export default function Contact() {
  return (
    <section className='w-full bg-gray-100 py-12'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Get in Touch</h1>
        <form className='max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md space-y-4'>
          <input type= 'text' placeholder='Name' className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <input type ='text' placeholder='Email' className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <textarea rows='4' placeholder='Message' className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <button type='submit' className='btn hover:opacity-90'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


