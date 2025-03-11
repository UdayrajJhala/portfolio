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
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiRedux,
  SiRender,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiMicrosoftazure,
  SiSpringboot,
  SiHibernate,
  SiDjango,
  SiIntellijidea,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillIcon = ({ Icon, label }) => (
  <div className="flex items-center gap-2 bg-gray-800/40 rounded-lg px-3 py-2 hover:bg-indigo-500/10 transition-all duration-300">
    <Icon className="text-xl text-indigo-300" />
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </div>
);

const SkillGroup = ({ title, skills }) => (
  <div className="bg-gray-900/20 rounded-xl p-6 backdrop-blur-sm border border-gray-600 hover:border-indigo-700 transition-colors duration-300">
    <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center">
      <div className="w-1 h-4 bg-indigo-500 rounded mr-2"></div>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { Icon: FaJava, label: "Java" },
        { Icon: SiCplusplus, label: "C++" },
        { Icon: FaCuttlefish, label: "C" },
        { Icon: FaJsSquare, label: "JavaScript" },
        { Icon: FaPython, label: "Python" },
        { Icon: FaHtml5, label: "HTML" },
        { Icon: FaCss3Alt, label: "CSS" },
      ],
    },

    {
      title: "Frameworks & Libraries",
      skills: [
        { Icon: FaReact, label: "React" },
        { Icon: FaNodeJs, label: "Node.js" },
        { Icon: SiExpress, label: "Express" },
        { Icon: SiSpringboot, label: "Spring Boot" },
        { Icon: SiRedux, label: "Redux" },
        { Icon: SiTailwindcss, label: "Tailwind" },
        { Icon: SiHibernate, label: "JPA (Hibernate)" },
        { Icon: SiDjango, label: "Django" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { Icon: SiMysql, label: "MySQL" },
        { Icon: SiPostgresql, label: "PostgreSQL" },
        { Icon: SiMongodb, label: "MongoDB" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { Icon: FaGit, label: "Git" },
        { Icon: FaGithub, label: "GitHub" },
        { Icon: VscVscode, label: "VS Code" },
        { Icon: SiIntellijidea, label: "IntelliJ" },
        { Icon: FaLinux, label: "Linux" },
        { Icon: SiPostman, label: "Postman" },
        { Icon: FaFigma, label: "Figma" },
      ],
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { Icon: FaAws, label: "AWS" },
        { Icon: SiRender, label: "Render" },
        { Icon: SiVercel, label: "Vercel" },
        { Icon: SiMicrosoftazure, label: "Azure" },
      ],
    },
  ];

  return (
    <section id="skills" className="text-white bg-gray-900 pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
            <h2 className="text-5xl font-bold px-4 text-center text-indigo-400">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <SkillGroup key={index} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
