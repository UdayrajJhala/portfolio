import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import art from "../assets/art.png";

const Hero = () => {
  const [transformStyle, setTransformStyle] = useState({});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Increase rotation values for a more pronounced effect
    const rotateX = ((mouseY - centerY) / centerY) * -15; // Adjust for more tilt, negative to invert direction
    const rotateY = ((mouseX - centerX) / centerX) * 15; // Adjust for more tilt, positive for natural rotation

    setTransformStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseEnter = () => {
    setTransformStyle((prev) => ({
      ...prev,
      transform: `${prev.transform || ""} scale(1.1)`, // Enlarge the image
      transition: "transform 0.3s ease-out", // Smooth transition
    }));
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)", // Reset to normal size and rotation
      transition: "transform 0.5s ease-out", // Smooth transition back to normal
    });
  };

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
        style={transformStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={imgRef}
      />
    </section>
  );
};

export default Hero;
