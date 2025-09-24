import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-secondary/60 bg-secondary/10 rounded-full text-sm text-secondary'>
         <img src={assets.orangeai} alt="sparkle" className='w-2.5 sm:w-5'/>
        <p>AI features to keep you safe.</p>
        </div>        
        <h1 className='text-6xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Let your <span className='h1span text-secondary sm:leading-16'>voice</span> <br />be heard.</h1>
        <p className="my-6 sm:my-5 max-w-2xl m-auto max-sm:text-xs text-gray-500">MicroBlogs is your creative sanctuary.
        Stay connected, share your thoughts, and spark new ideas with clutter-free blogging.</p>     
      </div>
      <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-3xl overflow-hidden'>
        <input type="text" placeholder='Search...' required className='w-full pl-4 outline-none' />
        <button type="submit" className='bg-secondary text-white px-5 py-2.5 m-1.5 rounded-full hover:scale-105 transition-all cursor-pointer'>
          <img src={assets.searchIcon} alt="search" className='w-2.5 sm:w-5'/></button>
      </form>
    </div>
  )
}

export default Header
