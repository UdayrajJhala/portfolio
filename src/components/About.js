import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const ExperienceItem = ({ title, date, details }) => (
  <li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 pb-8 border-l border-indigo-500/30 last:pb-0"
  >
    <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px]" />
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
      <h4 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
        {title}
      </h4>
      <span
        className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-500/10 
                     text-indigo-400 border border-indigo-500/20 mt-2 sm:mt-0"
      >
        {date}
      </span>
    </div>
    <ul className="space-y-2">
      {details.map((detail, index) => (
        <li
          key={index}
          className="text-gray-200 text-sm leading-relaxed flex items-start"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-2 mr-2 flex-shrink-0" />
          {detail}
        </li>
      ))}
    </ul>
  </li>
);

const SectionCard = ({ title, children, icon: Icon }) => (
  <div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 
               shadow-lg hover:shadow-sm hover:shadow-indigo-500/10 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-indigo-500/10 rounded-lg">
        <Icon className="text-2xl text-indigo-400" />
      </div>
      <h3 className="text-2xl font-bold bg-indigo-400 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

const Education = () => (
  <SectionCard title="Education" icon={FaGraduationCap}>
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h4 className="font-bold text-lg text-white">
        Bachelor of Technology in Computer Science & Engineering
      </h4>
      <div className="flex flex-col space-y-2">
        <span className="text-gray-200">
          Symbiosis Institute of Technology, Pune | 2022 - 2026
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-200">CGPA: 8.26</span>
          
        </div>
      </div>
    </div>
  </SectionCard>
);

const Experience = () => (
  <SectionCard title="Experience" icon={FaBriefcase}>
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
  </SectionCard>
);

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-2xl">
                  <FaCode className="text-3xl text-indigo-400" />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white max-w-3xl mx-auto">
                A pre-final year BTech CSE student and a passionate full-stack
                developer with experience in building web applications using
                modern technologies like React, Node.js, Express.js, SQL, etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
