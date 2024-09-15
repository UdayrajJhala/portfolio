import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <a
            href="https://github.com/UdayrajJhala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden lg:flex space-x-6 font-bold">
          {["Home", "Skills", "Projects", "About", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-xl py-2 px-4 cursor-pointer hover:text-gray-300"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gray-900 py-4">
          {["Home", "Skills", "Projects", "About", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-xl py-2 cursor-pointer hover:text-gray-300"
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
