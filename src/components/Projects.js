import React from "react";

const projects = [
  {
    title: "Inventory Management Web App",
    description:
      "A web app which enables users to view, add, update and delete items in their inventory.",
    techStack: "Node.js, Express.js, React, PostgreSQL",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/Inventory-Management",
  },
  {
    title: "Clip Kadabra",
    description:
      "A robust video editing web application with features like trimming, merging, adding filters, and dubbing videos into different languages.",
    techStack: "React, FFmpeg wasm, Django",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/ChatApp",
  },
  {
    title: "Real-time Chat App",
    description:
      "A socket-based real-time chat application that allows users to send and receive AES encrypted messages.",
    techStack: "Node.js, Express.js, React, Socket.IO",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/YoutubeSummarizer",
  },
  {
    title: "YouTube Summarizer",
    description:
      "A web application that generates summaries of YouTube videos, taking the video links as input.",
    techStack: "Flask, React",
    liveLink: "#",
    githubLink: "https://github.com/UdayrajJhala/ClipKadabra",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-14">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-transparent rounded-lg overflow-hidden transform transition-transform duration-300 hover:bg-gray-700 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-4">
                  {project.techStack}
                </p>
                <div className="flex space-x-4">
                 {/* <a
                    href={project.liveLink}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block transform transition-transform duration-300 hover:translate-y-[-4px] hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a> */}
                  <a
                    href={project.githubLink}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block transform transition-transform duration-300 hover:translate-y-[-4px] hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
