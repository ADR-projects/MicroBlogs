import React from 'react'
import {assets} from '../assets/assets'
const Newsletter = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative text-center mb-15'>
       <h2>Get all the updates!</h2> 
       <p className='my-6 sm:my-5 max-w-2xl m-auto max-sm:text-xs text-gray-500'>Subscribe to the Newsletter.</p>
      <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-3xl overflow-hidden'>
              <input type="email" placeholder='Enter your email id' required className='w-full pl-4 outline-none' />
              <button type="submit" className='bg-secondary text-white px-5 py-2.5 m-1.5 rounded-full hover:scale-105 transition-all cursor-pointer'>
                <img src={assets.bellIcon} alt="subscribe" className='w-3 sm:w-6'/></button>
            </form>
    </div>
  )
}

export default Newsletter
