import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ title, date, details }) => (
  <li className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-900 bg-gray-300 rounded-full px-3 py-1 text-sm mt-1 sm:mt-0">
        {date}
      </div>
    </div>
    <ul className="list-disc pl-5 space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="text-gray-300">
          {detail}
        </li>
      ))}
    </ul>
  </li>
);

const Experience = () => (
  <div className="bg-gray-800 p-6 rounded-lg w-full h-full">
    <h3 className="text-3xl font-semibold mb-6 text-indigo-300">Experience</h3>
    <ul className="space-y-6">
      <ExperienceItem
        title="Intern - Project: Human City"
        date="June 2024 - August 2024"
        details={[
          "Reviewed and maintained project documentation and conducted thorough analysis of 10+ GitHub repositories, identifying and addressing discrepancies.",
          "Designed and updated 10+ system architecture diagrams, ensuring alignment with project documentation and enhancing overall project clarity.",
        ]}
      />
    </ul>
  </div>
);

const Education = () => (
  <div className="bg-gray-800 p-6 rounded-lg w-full h-full">
    <h3 className="text-3xl font-semibold mb-6 text-indigo-300">Education</h3>
    <ul className="space-y-6">
      <li>
        <div className="font-bold text-lg">
          Bachelor of Technology in Computer Science & Engineering
        </div>
        <div className="text-gray-300 mt-1">
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
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-8 text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl leading-relaxed mx-auto max-w-4xl text-indigo-100">
            A pre-final year BTech CSE student and a passionate full-stack
            developer with experience in building web applications using modern
            technologies like React, Node.js, Express.js, SQL, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Education />
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default About;
