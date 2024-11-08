import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["Home", "Skills", "Projects", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-indigo-400 text-transparent bg-clip-text"
        >
          Portfolio.
        </motion.h1>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none text-white hover:text-gray-300 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex space-x-2"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              className="relative overflow-hidden group px-4 py-2 rounded-full transition-all duration-300 font-bold text-white hover:text-white cursor-pointer text-xl"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col items-center bg-gray-900/95 backdrop-blur-sm py-4"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white w-full text-center transition-all duration-300 py-2 px-4 hover:bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
