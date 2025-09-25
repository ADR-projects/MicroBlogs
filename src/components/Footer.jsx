import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl-px-32 bg-secondary/9'>

            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
                <div>
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-44' /> <p className='max-w-[410px] mt-6'>MicroBlogs is your creative sanctuary. Stay connected, share your thoughts, and spark new ideas with clutter-free blogging.</p>
                </div>
            </div>
            <p className='py-4 text-sm md:text-base text-2xs text-center text-gray-500'>Copyright © 2025 MicroBlogs-ADR - All Rights Reserved.</p>
            
        </div>
    )
}

export default Footer
