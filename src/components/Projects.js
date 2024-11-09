import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import quickChatImage from "../assets/quickchat.png";
import inventoryImage from "../assets/inventory.png";
import clipKadabraImage from "../assets/clipkadabra.png";
import stockimage from "../assets/stock.png";
const projects = [
  {
    title: "QuickChat",
    description:
      "A web based real-time chat application with that allows users to create or join chat rooms and send or receive encrypted messages.",
    techStack: "Node.js, Express.js, React, Socket.IO",
    liveLink: "https://quickkchat.vercel.app",
    githubLink: "https://github.com/UdayrajJhala/QuickChat",
    src: quickChatImage,
  },
  {
    title: "Inventory Management Web App",
    description:
      "A web app which enables users to view, add, update and delete items in their inventory.",
    techStack: "Node.js, Express.js, React, PostgreSQL",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/Inventory-Management",
    src: inventoryImage,
  },
  {
    title: "Clip Kadabra",
    description:
      "A robust video editing web application with features like trimming, merging, adding filters, and dubbing videos into different languages.",
    techStack: "React, FFmpeg wasm, Django",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/QuickChat",
    src: clipKadabraImage,
  },
  {
    title: "Stock Portfolio Management System",
    description:
      "A desktop application that enables users to buy, sell stocks and view their Portfolio.",
    techStack: "Java, MySQL",
    liveLink: "#",
    githubLink:
      "https://github.com/UdayrajJhala/Stock-Portfolio-Management-System",
    src: stockimage,
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-500 
                     border border-gray-700/50 h-full"
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
            src={project.src}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
         
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4  transition-all duration-300">
            {project.description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(", ").map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm text-indigo-300 px-3 py-1 rounded-full text-xs font-medium
                           border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            {project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                className="flex items-center justify-center bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg
                         transition-all duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         hover:drop-shadow-sm hover:shadow-indigo-500/20 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Live 
              </a>
            )}
            <a
              href={project.githubLink}
              className="flex items-center justify-center bg-gray-700/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg
                       transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500/50
                       hover:shadow-sm hover:shadow-gray-500/20 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Github
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-indigo-400 mb-4"
          >
            Projects
          </motion.h2>
      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
