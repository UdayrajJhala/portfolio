import React from "react";
import { Link } from "react-scroll";
import art from "../assets/art.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 flex flex-col-reverse lg:flex-row items-center justify-around text-white p-8"
    >
      <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-md text-center lg:text-left">
        <h1 className="md:text-9xl font-bold text-6xl">Udayraj Jhala</h1>
        <p className="mt-6 text-3xl">Student | Developer</p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:text-white hover:bg-gray-900 hover:border-white border-2 border-transparent cursor-pointer"
        >
          View My Work &gt;
        </Link>
      </div>
      <img
        src={art}
        className="w-auto max-w-2xl min-w-0 hidden md:flex"
        alt="Art"
      />
    </section>
  );
};

export default Hero;
