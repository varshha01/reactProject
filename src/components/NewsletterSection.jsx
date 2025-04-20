import React from 'react'
import { GoArrowRight } from "react-icons/go";
const NewsletterSection = () => {
    return (
        <section id='newsletter' className='container mx-auto px-4 md:px-12 lg:px-20 py-12'>
            <div className='bg-blue-500 rounded-2xl overflow-hidden'>
                <div className='relative md:px-8 py-16 px-6 md:py-12'>
                    {/* gradient bg*/}
                    <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 md:block hidden'>  </div>
                    <div className='relative flex flex-col md:flex-row gap-8 clip-path-slant'>
                        {/* left content */}
                        <div className='text-white text-center md:text-left mb-8 md:mb-0 md:w-1/2'>
                            <h2 className=' text-2xl font-bold'>Subscribe to our Newsletter</h2>
                            <p >Subscribe to our newsletter to get the latest news and updates.</p>
                        </div>
                        {/* right content */}
                        <div className='flex flex-col md:flex-row items-center justify-center gap-0 '>
                            <input type="email" placeholder='Enter your email' className='w-auto md:w-1/2 p-2 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black ' />
                            <button className='w-full md:w-1/2 p-2 rounded-md bg-green-500 text-white px-6 flex items-center justify-center gap-2 text-lg font-semibold '>
                                <span >Subscribe</span>
                                <GoArrowRight className='size-5' />

                            </button>

                        </div>
                    </div>
                </div>



            </div>
            <style >
                {
                `clip-path-slant: polygon(20% 0, 100% 0, 100% 100%, 0 100%);`
                }
            </style>
        </section>
    )
}

export default NewsletterSection
