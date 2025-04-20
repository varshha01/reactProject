import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Robin Ayala Doe",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
            id: 2,
            name: "John De marli",
            image: "https://randomuser.me/api/portraits/women/90.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        },
        {
            id: 3,
            name: "Rowhan Smith",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
            text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
        },
        {
            id: 5,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
        },
        {
            id: 6,
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/28.jpg",
            text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
        },
    ];

  return (
    <section id='testimonials'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold'>
              <p className='text-indigo-600  text-3xl md:text-4xl mb-4'>What our Happy Clients say</p>
              <h2 className='text-medium md:text-medium text-gray-800 mb-15 '>Things our clients say about us</h2>
          </div>
          {/* testimonial cards */}
          <div className='relative'>
              <Swiper
                  pagination={{
                      clickable: true,
                  }}
                  Navigation={{
                      nextEl: '.swiper-slide-next-custom',
                      prevEl: '.swiper-slide-prev-custom',
                  }}
                  spaceBetween={30}
                  modules={[Navigation]}
                  className="testimonial-swiper md:mb-12"
                  breakpoints={{
                      0: {
                          slidesPerView: 1,
                      },
                      768: {
                          slidesPerView: 2,
                      },
                      1024: {
                          slidesPerView: 3,
                      },
                  }}
              >
                  {
                      testimonials.map((testimonial, index) => (
                          <SwiperSlide key={index} className='h-full md:py-12 py-4'>
                              <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 mb-4'>
                                  <div className='w-24 h-24 rounded-full overflow-hidden mx-auto'>
                                      <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full'/>
                                  </div>
                              <div className='flex items-center justify-center gap-1 mt-4'>
                                  {[...Array(5)].map((_, startIndex) => (
                                      <span key={startIndex} className='text-yellow-500'>⭐</span>
                                  ))}
                              </div>
                              <p className='text-gray-600 mt-4 text-lg'>{testimonial.text}</p>
                                  <p className='text-gray-600 mt-4 font-bold'>{testimonial.name}</p>
                              </div>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>

              {/* cards */}

              {/* navigational buttons */}
              <div className=' flex items-center justify-center gap-8 mt-4 cursor-pointer'>
                  <button className=' className= w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300'>
                      <SlArrowLeft className='text-2xl' />
                  </button>
            
                  <button className=' className= w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300'>
                      <SlArrowRight className='text-2xl' />
                  </button>
              </div>
         </div>
    </section>
  )
}

export default TestimonialSection
