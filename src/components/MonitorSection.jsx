import React from 'react'
import monitorImage from '../assets/monitor-card.webp'
import { GoArrowRight } from "react-icons/go";

const MonitorSection = () => {
  return (
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
             
              {/* left side */}
              <div>
                  <p className='text-5xl font-bold text-purple-500'>MONITOR</p>
                  <h2 className='mt-4 text-gray-800 text-3xl md:text-4xl font-bold'>Introducing best mobile <br /> monitoring app</h2>
                  <p className='mt-4 text-gray-600 text-lg mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quibusdam ex eveniet itaque exercitationem cumque blanditiis libero provident natus quidem?</p>
                  <a href='#' className='text-purple-500 font-bold py-3 hover:rounded-full hover:text-white hover:bg-purple-600 hover:px-6 transition-all'>Explore Scheduling Features</a>
                  <GoArrowRight className='inline-block text-purple-500 text-2xl ml-4 size-6 ' />
              </div>
              {/* right side */}
              <div>
                  <img src={monitorImage} alt="monitor" className='w-full h-full object-cover rounded-lg' />
              </div>
          </div>
      </section>
  )
}

export default MonitorSection
