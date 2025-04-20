import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const FooterSection = () => {
    const footerLinks = {
        company: [
            { name: "About", href: "#" },
            { name: "Terms of Use", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "How it Works", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
        getHelp: [
            { name: "Support Carrer", href: "#" },
            { name: "24h Service", href: "#" },
            { name: "Quick Chat", href: "#" },
        ],
        support: [
            { name: "FAQ", href: "#" },
            { name: "Policy", href: "#" },
            { name: "Business", href: "#" },
        ],
        contact: [
            { name: "WhatsApp", href: "#" },
            { name: "Support 24", href: "#" },
        ],
    };

  return (
      <footer className='bg-gray-300 '>
          <div className='container mx-auto px-4 md:px-12 lg:px-20 py-12 '>
              
              <div className='flex  items-center '>
                  {/* brand column */}
                  <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
                  <span className="text-xl font-bold ml-1">The Next Design</span>
              </div>
              <div className='flex gap-1 items-center'>
              </div>
              {/* left content */}
              <p className='text-black' mb-6>  The copy warned the Little Blind Text, <br /> that where it came from it would have been rewritten a thousand times. </p>
              <div className='flex gap-4'>
                  <a href="#"  className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-500'><FaFacebookF className='size-5'/></a>
                  <a href="#"  className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-500'><FaTwitter className='size-5'/></a>
                  <a href="#"  className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-500'><FaInstagram className='size-5' /></a>
                  <a href="#"  className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-500'><FaLinkedinIn className='size-5' /></a>
              </div>

              {/* footer links */}
              <div >
                  <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 mt-6 '>
                      {Object.entries(footerLinks).map(([Category, links]) => (
                          <div key={Category}>
                              <h3 className='text-black font-bold'>{Category}</h3>
                              <ul>
                                  {links.map((link) => (
                                      <li key={link.name}>
                                          <a href={link.href} className='text-gray-600 hover:text-blue-500'>{link.name}</a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>

              {/* footer bottom section */}
              <div className='mt-6 border-t border-gray-200 pt-6'>
                  <p className='text-gray-600 text-sm text-center'>
                      &copy; 2025 The Next Design. All rights reserved.
                  </p>
              </div>
          </div>
    </footer>
  )
}

export default FooterSection
