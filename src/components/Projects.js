import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
      src:stockimage
  },
];


const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
    <div className="p-4 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-3 text-indigo-300">
        {project.title}
      </h3>
    
        <img
          className="rounded-lg max-w-xl"
          src={project.src}
          alt={project.title}
        />
    

      <p className="text-gray-300 mb-4 flex-grow mt-2">{project.description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.split(", ").map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-indigo-300 px-2 py-1 rounded-full text-xs"
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
            className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live
          </a>
        )}
        <a
          href={project.githubLink}
          className="flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="text-white bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-14 text-indigo-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
