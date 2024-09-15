import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <div className="text-white bg-gray-800 p-6 rounded-lg xl:max-w-lg w-auto lg:max-w-md max-w-sm">
    <h3 className="text-4xl font-semibold mb-4">Experience</h3>
    <ul className="list-disc pl-5 space-y-4">
      <li>
        <div className="flex items-center justify-between">
          <div className="font-bold">Intern - Project: Human City</div>
          <div className="text-gray-900 bg-gray-300 rounded-3xl pl-2 pr-2">
            June 2024 - August 2024
          </div>
        </div>

        <ul className="list-disc pl-5 mt-4">
          <li className="text-white">
            Reviewed and maintained project documentation and conducted thorough
            analysis of 10+ GitHub repositories, identifying and addressing
            discrepancies.
          </li>
          <li className="text-white mt-2">
            Designed and updated 10+ system architecture diagrams, ensuring
            alignment with project documentation and enhancing overall project
            clarity.
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

const Education = () => (
  <div className="text-white bg-gray-800 p-6 rounded-lg max-w-lg w-auto">
    <h3 className="text-4xl font-semibold mb-4">Education</h3>
    <ul className="list-disc pl-5 space-y-4">
      <li>
        <div className="font-bold">
          Bachelor of Technology in Computer Science & Engineering
        </div>
        <div className="text-gray-300">
          Symbiosis Institute of Technology, Pune | 2022 - 2026
        </div>
        <p className="text-white mt-2">CGPA: 8.26</p>
      </li>
    </ul>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="text-center mb-8">
          <p className="text-xl leading-relaxed mx-auto max-w-4xl">
            A pre-final year BTech CSE student and a passionate full-stack
            developer with experience in building web applications using modern
            technologies like React, Node.js, Express.js, SQL, and more.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          <div className="flex justify-center w-full">
            <Education />
          </div>
          <div className="flex justify-center w-full">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
