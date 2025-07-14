import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiPrisma,
  SiVercel,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "DBMS", icon: <FaDatabase className="text-purple-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-black" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-700" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Postman/API", icon: <SiPostman className="text-orange-600" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4 md:px-10 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center group bg-white hover:bg-gray-100 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl mb-2 group-hover:rotate-6 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
