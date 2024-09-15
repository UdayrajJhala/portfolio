// src/components/Contact.js
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Contact Me</h2>

        <p className="text-lg mb-8">
          <a href="mailto:udayjhala.27@gmail.com">udayjhala.27@gmail.com</a>
        </p>

        <div className="flex justify-center space-x-6">
          
          <a
            href="https://linkedin.com/in/udayraj27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl hover:text-gray-300" />
          </a>
          <a
            href="https://twitter.com/uday27__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-4xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
