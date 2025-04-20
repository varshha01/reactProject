import React from 'react'
import { BsStack } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';

const ServiceSection = () => {
    const services = [
        {
            icon: <BsStack className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more",
        },
        {
            icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more",
        },
        {
            icon: <FiSettings className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more",
        },
        {
            icon: <BiTime className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more",
        },
    ];
  return (
      <section id='service' className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-10 items-center'>
              {/* left section */}
              <div className='md:w-1/2 w-full'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Future of Support with new shapes</h2>
                  <p className='mt-2 text-gray-600 mb-4 text-xl md:w-4/5'>
                      We offer a wide range of services to help you grow your business and determine your business needs.
                  </p>
                  <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                          <div className='w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center'>
                            <div className='w-3 h-3 rounded-full bg-white'></div>
                          </div>
                          <span className='text-gray-600'>UK design content strategy</span>
                      </div>
                      <div className='flex items-center gap-4 mt-4'>
                          <div className='w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center'>
                            <div className='w-3 h-3 rounded-full bg-white'></div>
                          </div>
                          <span className='text-gray-600'>Development & Integration</span>
                      </div>
                  </div>
                  <button className='mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors'>Get Started</button>
              </div>

              {/* service cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {services.map((service,index) => (
                      <div key={index} className='bg-white p-6 rounded-lg max-w-7xl cursor-pointer rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-blue-300 hover:scale-105'>
                          <div className=' mb-4 '>
                            {service.icon}
                          </div>
                          <h3 className='text-lg font-medium text-gray-800 mb-2'>{service.title}</h3>
                          <p className='text-gray-600'>{service.description}</p>
                          <a href={service.link} className='text-indigo-500 hover:text-indigo-700 transition-colors mt-4'>Learn More</a>
                      </div>
                  ))}

              </div>
          </div>
      
    </section>
  )
}

export default ServiceSection
