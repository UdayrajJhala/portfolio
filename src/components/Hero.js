import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import art from "../assets/art.png";

const Hero = () => {
  const [transformStyle, setTransformStyle] = useState({});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((mouseY - centerY) / centerY) * -10;
    const rotateY = ((mouseX - centerX) / centerX) * 10;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease-out",
      transformStyle: "preserve-3d",
    });
  };

  const handleMouseEnter = () => {
    setTransformStyle((prev) => ({
      ...prev,
      transform: `${prev.transform || ""} scale(1.5)`,
      transition: "transform 0.3s ease-out",
    }));
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex flex-col-reverse lg:flex-row items-center justify-around text-white p-8 overflow-hidden"
    >
      <motion.div
        className="flex flex-col items-center lg:items-start justify-center w-full max-w-md text-center lg:text-left mb-8 lg:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="md:text-9xl font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Udayraj Jhala
        </h1>
        <p className="mt-6 text-3xl text-indigo-100">Student | Developer</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg text-center"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-indigo-100 text-gray-900 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg text-center"
          >
            Contact Me
          </Link>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-100 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-100 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="tilt-box-wrap"
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "auto",
          perspective: "1000px",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
          className="w-full max-w-xl mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          alt="Art"
          style={{
            ...transformStyle,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={imgRef}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
