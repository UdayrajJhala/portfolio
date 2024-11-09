import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Add manual section detection
      const sections = navItems.map((item) => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase()),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        // Adjust the threshold values as needed
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveItem(currentSection.id);
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

  const NavButton = ({ item }) => (
    <Link
      to={item.toLowerCase()}
      smooth={true}
      duration={500}
      spy={true}
      offset={-100} // Add offset to account for navbar height
      onSetActive={() => setActiveItem(item.toLowerCase())}
      className="relative px-4 py-2 group hover:cursor-pointer"
    >
      <span
        className="relative z-10 text-sm font-medium tracking-wider transition-colors duration-300
                     group-hover:text-white text-gray-300"
      >
        {item.toUpperCase()}
      </span>

      {/* Animated background */}
      <span
        className="absolute inset-0 rounded-lg transition-all duration-300 ease-out 
                     group-hover:bg-gradient-to-r group-hover:from-indigo-600/20 group-hover:to-purple-600/20
                     border border-transparent group-hover:border-indigo-500/30"
      />

      {/* Hover effect line */}
      <span
        className="absolute bottom-1.5 left-4 right-4 h-px bg-gradient-to-r from-indigo-500 to-purple-500 
                     transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Active indicator */}
      {activeItem === item.toLowerCase() && (
        <motion.span
          layoutId="activeIndicator"
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                   border border-indigo-500/30 -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
        />
      )}
    </Link>
  );

  const MobileNavButton = ({ item }) => (
    <Link
      to={item.toLowerCase()}
      smooth={true}
      duration={500}
      spy={true}
      offset={-100} // Add offset to account for navbar height
      onClick={() => setIsOpen(false)}
      onSetActive={() => setActiveItem(item.toLowerCase())}
      className="relative block w-full px-4 py-3 group"
    >
      <span
        className="relative z-10 text-sm font-medium tracking-wider
                     group-hover:text-white text-gray-300"
      >
        {item.toUpperCase()}
      </span>

      {/* Hover background */}
      <span
        className="absolute inset-0 transition-all duration-300 ease-out 
                     group-hover:bg-gradient-to-r group-hover:from-indigo-600/10 group-hover:to-purple-600/10
                     border-l-2 border-transparent group-hover:border-indigo-500"
      />

      {/* Active indicator */}
      {activeItem === item.toLowerCase() && (
        <motion.span
          layoutId="mobileActiveIndicator"
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 
                   border-l-2 border-indigo-500"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
        />
      )}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-100}
            className="text-2xl font-bold cursor-pointer group"
          >
            <span
              className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent 
                         relative inline-block transition-transform duration-300 group-hover:scale-105"
            >
              Portfolio.
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 
                           transition-all duration-300 group-hover:w-full"
              ></span>
            </span>
          </Link>
        </motion.div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none text-white hover:text-indigo-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center space-x-1"
        >
          {navItems.map((item) => (
            <NavButton key={item} item={item} />
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="container mx-auto py-2">
              {navItems.map((item) => (
                <MobileNavButton key={item} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
