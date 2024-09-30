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


const Skills = () => {
  return (
    <div id="skills" className="p-14 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-4">
        {[
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
          {
            Icon: SiTailwindcss,
            label: "Tailwind CSS",
          },
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
          { Icon: SiRender, label: "Render"},
        ].map(({ Icon, label, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-24 rounded-lg p-2 transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Icon className={`text-4xl ${color}`} />
            </div>
            <span className="text-sm font-medium leading-none mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
