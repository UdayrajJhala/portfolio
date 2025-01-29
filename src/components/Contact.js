import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactPlatform = ({ icon: Icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 group"
  >
    <Icon className="text-2xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed...", error);
          setSuccess(false);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-5xl font-bold mb-12 text-center bg-indigo-400 text-transparent bg-clip-text">
          Let's Connect
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-indigo-400 w-full px-3 py-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                required
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-indigo-400 w-full px-3 py-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border border-indigo-400 w-full px-3 py-2 bg-gray-900 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {success === true && (
                <p className="text-green-400 mt-2">
                  Message sent successfully!
                </p>
              )}
              {success === false && (
                <p className="text-red-400 mt-2">
                  Failed to send message. Try again later.
                </p>
              )}
            </form>
          </div>
          <div
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
                  link="https://x.com/_udayraj__"
                  label="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
