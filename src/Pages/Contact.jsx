import React, { useState } from 'react';

export default function Contact() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({name:"",email:"",message:""});
  }
  return (
    <section className='w-full bg-gray-100 py-12'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Get in Touch</h1>
        <form onSubmit={handleSubmit} className='max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md space-y-4'>
          <input type= 'text' placeholder='Name' value={formData.name} onChange={handleChange}  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <input type ='text' placeholder='Email' value={formData.email} onChange={handleChange}  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <textarea rows='4' placeholder='Message' value={formData.message} onChange={handleChange}  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/><br/>
          <button type='submit' className='btn hover:opacity-90'>Send Message</button>
        </form>
      </div>
    </section>
  )
}



