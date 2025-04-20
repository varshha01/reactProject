import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLists = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About  " },
    { href: "#service", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <motion.nav
    variants={fadeIn("down", 0.5)}
    initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    exit="hidden"
    className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg shadow-md border-b border-gray-200 ">
      <div className="w-full container mx-auto flex items-center justify-between text-xl px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-4 h-4 bg-red-500  -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* mobile menu button */}

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* nav items */}
        <div className="hidden md:flex items-center gap-4">
          {navLists.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className={`${
                activeLink === link.href
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:text-black-600 hover:underline hover:font-bold transition-colors duration-300`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* get in touch button */}

        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md md:py-2.5 md;px-6 hover:bg-blue-900 transition-colors duration-300">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>
      {/* mobile menu items*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 space-y-2">
            {navLists.map((link, index) => (
              <a
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm py-4 px-6 hover:text-blue-600 transition-colors duration-300 ${
                  activeLink === link.href
                    ? "bg-gray-300 text-blue-600 font-bold "
                    : ""
                }`}
                href={link.href}
                key={index}
              >
                {link.label}
              </a>
            ))}

            <button className="w-full md:block bg-blue-500 text-white px-4 py-2 rounded-md md:py-2.5 md:px-6 hover:bg-blue-900 transition-colors duration-300">
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};
export default Navbar;
