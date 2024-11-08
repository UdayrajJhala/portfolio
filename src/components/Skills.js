import React from "react";
import {
  FaJava,
  FaCuttlefish,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiRender,
  SiCplusplus,
  SiFlask,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiMicrosoftazure,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillIcon = ({ Icon, label }) => (
  <div className="  overflow-hidden  transition-all duration-300 hover:scale-110 p-4">
    <div className="flex flex-col items-center justify-center">
      <Icon className="text-4xl sm:text-5xl text-indigo-200 mb-2" />
      <span className="text-sm font-medium text-gray-300 text-center">
        {label}
      </span>
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
    { Icon: FaJava, label: "Java" },
    { Icon: SiCplusplus, label: "C++" },
    { Icon: FaJsSquare, label: "JavaScript" },
    { Icon: FaCuttlefish, label: "C" },
    { Icon: FaPython, label: "Python" },
    { Icon: FaHtml5, label: "HTML" },
    { Icon: FaCss3Alt, label: "CSS" },
    { Icon: FaReact, label: "React" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: SiExpress, label: "Express.js" },
    { Icon: SiFlask, label: "Flask" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: FaGit, label: "Git" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: VscVscode, label: "VS Code" },
    { Icon: FaLinux, label: "Linux" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: SiVercel, label: "Vercel" },
    { Icon: SiMicrosoftazure, label: "Azure" },
    { Icon: SiRender, label: "Render" },
  ];

  return (
    <section id="skills" className="text-white bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-14 text-indigo-400">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skillsData.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
