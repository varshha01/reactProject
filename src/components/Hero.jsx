import React from "react";
import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-6 sm:px-6 lg:px-8"
    >
      {/* left column */}
    
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
        {/* star badge */}
      
          <div className="flex items-center gap-2 bg-gray-100 w-fit px-2 py-1 rounded-full hover:bg-gray-300 transition-colors duration-300 cursor-pointer group">
          
          <span className="group-hover:text-blue-600 transition-colors duration-300">
            ⭐
          </span>
          <span className="text-sm font-bold">Jump Start Your Career</span>
          </div>
          </motion.div>

        <motion.h1 variants={textVariant(0.3)} initial="hidden" whileInView="show" className="text-4xl md:text-5xl lg:text-6xl font-bold">
          We Boost the growth for
          <span className="text-blue-600"> Startup to Fortune 500 </span>
          {/* <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>  */}
          <hr className="w-100 h-0.5 bg-blue-200/60 mt-2 " />
          <span className="text-gray-600">
            Companies{" "}
            <span className="inline-block ml-2 animate-pulse">⏰</span>
          </span>
        </motion.h1>

        <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-gray-700 text-lg md:text-xl max-w-xl">
          One of the best platform to learn new skills and boost your career and
          get a job in a startup or a fortune 500 company
        </motion.p>
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500transition-colors duration-300"
          />

          <button className="bg-blue-500 text-white font-bold text-xl px-8 py-3 rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
            {" "}
            →
          </button>
        </motion.div>
        </div>
      {/* right column */}
      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView="show" className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-0">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-cover rounded-xl relative z-10 hover:scale-105 transition-all duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
