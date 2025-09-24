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
        <h1 className='text-6xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Let your voice <br />be heard.</h1>
        <p className="my-6 sm:my-5 max-w-2xl m-auto max-sm:text-xs text-gray-500">You can write blogs here.</p>     
      </div>
    </div>
  )
}

export default Header
