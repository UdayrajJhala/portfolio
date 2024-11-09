import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPlatform = ({ icon: Icon, link, label }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-2xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-indigo-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                
                <input
                placeholder="name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-1 border-indigo-400 w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  required
                />
              </div>
              <div>
               
                <input
                placeholder="email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-1 border-indigo-400 w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  required
                />
              </div>
              <div>
                
                <textarea
                placeholder="message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="border-1 border-indigo-400 resize-none w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out through the form or any of the platforms
                below:
              </p>
              <div className="space-y-4">
                <ContactPlatform
                  icon={FaEnvelope}
                  link="mailto:udayjhala.27@gmail.com"
                  label="udayjhala.27@gmail.com"
                />
                <ContactPlatform
                  icon={FaLinkedin}
                  link="https://linkedin.com/in/udayraj27"
                  label="LinkedIn"
                />
                <ContactPlatform
                  icon={FaGithub}
                  link="https://github.com/UdayrajJhala"
                  label="GitHub"
                />
                <ContactPlatform
                  icon={FaTwitter}
                  link="https://twitter.com/uday27__"
                  label="Twitter"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
