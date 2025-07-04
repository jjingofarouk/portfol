// AboutSection.jsx
"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaPython,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiKubernetes,
  SiGraphql,
  SiTerraform,
  SiPytorch,
  SiRedis,
} from "react-icons/si";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "jjingofarouq@gmail.com",
    href: "mailto:jjingofolauq@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Phone",
    content: "+256777421601",
    href: "tel:+256777421601",
    icon: <FaPhone />,
  },
  {
    name: "LinkedIn",
    href: "ug.linkedin.com/in/farouk-jjingo-0341b01a5",
    content: "/jjingofarouk",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/jjingofarouk",
    content: "/jjingofarouk",
    icon: <FaGithub />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "Core language for modern web development",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Type-safe JavaScript for scalable applications",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Python",
    content: "Versatile language for AI, data science, and backend",
    icon: <FaPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "HTML",
    content: "Semantic markup for accessible web experiences",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Creating responsive and beautiful interfaces",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Node.js",
    content: "Server-side JavaScript for scalable applications",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Component-based UI library for dynamic applications",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "React framework for SSR and static sites",
    icon: <RiNextjsFill size={"50px"} color="#000000" />,
    color: "#000000",
  },
  {
    name: "Vue.js",
    content: "Progressive framework for building user interfaces",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Minimal Node.js framework for web applications",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "GraphQL",
    content: "Query language for flexible APIs",
    icon: <SiGraphql size={"50px"} color="#e10098" />,
    color: "#e10098",
  },
  {
    name: "PostgreSQL",
    content: "Powerful open-source relational database",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "NoSQL database for modern applications",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Redis",
    content: "In-memory database for high-speed caching",
    icon: <SiRedis size={"50px"} color="#dc382d" />,
    color: "#dc382d",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS for rapid development",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Google's platform for app development",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Docker",
    content: "Containerization for consistent deployment",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Kubernetes",
    content: "Orchestration for scalable containerized apps",
    icon: <SiKubernetes size={"50px"} color="#326ce5" />,
    color: "#326ce5",
  },
  {
    name: "AWS",
    content: "Cloud computing for scalable infrastructure",
    icon: <FaAws size={"50px"} color="#FF9900" />,
    color: "#FF9900",
  },
  {
    name: "Terraform",
    content: "Infrastructure as code for cloud provisioning",
    icon: <SiTerraform size={"50px"} color="#7b42bc" />,
    color: "#7b42bc",
  },
  {
    name: "Nginx",
    content: "High-performance web server and reverse proxy",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Git",
    content: "Version control for collaborative development",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Platform for code hosting and collaboration",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Powerful code editor with rich ecosystem",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Vim",
    content: "Efficient text editor for rapid development",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Code formatter for consistent code style",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Package manager for JavaScript",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Fast, reliable dependency management",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Platform for frontend frameworks and static sites",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Open-source operating system for development",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "KDE-based Linux distribution",
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#0077C4",
  },
  {
    name: "PyTorch",
    content: "Machine learning framework for AI research",
    icon: <SiPytorch size={"50px"} color="#ee4c2c" />,
    color: "#ee4c2c",
  },
];

function AboutSection() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 text-gray-900 dark:text-gray-200 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px]સ4 lg:w-[200px] aspect-square bg-gray-100 dark:bg-gray-800"
                  alt="Farouk Jjingo"
                  src="/assets/me.png"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-semibold">Farouk Jjingo</p>
                <div className="flex gap-2">
                  <div className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 w-fit px-3 py-1 rounded-full">Full Stack Engineer</div>
                  <div className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 w-fit px-3 py-1 rounded-full">MD</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-gray-200 dark:border-gray-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors rounded-md"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{link.content}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4">
          <div className="p-10 border-[.5px] border-gray-200 dark:border-gray-600 rounded-md bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm">
            <h1 className="text-3xl font-bold mb-6 lg:mb-10">About Me</h1>
            <p className="mb-6 text-lg leading-relaxed">
              I am a <span className="text-cyan-600 dark:text-cyan-400 font-medium">Full Stack Developer</span> with a medical background, focused on building <span className="text-cyan-600 dark:text-cyan-400 font-medium">innovative technology solutions</span> for healthcare and other industries. I am detail-oriented, thrive in fast-paced environments, and am committed to delivering <span className="text-cyan-600 dark:text-cyan-400 font-medium">high-quality, impactful code</span>.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="mb-10">
              {!toolsLoaded ? (
                <div className="h-[100px] flex items-center justify-center">
                  <p>Loading tools...</p>
                </div>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    breakpoints: {
                      640: { perPage: 3 },
                      768: { perPage: 4 },
                    },
                  }}
                  aria-label="Technology Stack"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="w-fit p-3 border-[.5px] border-gray-200 dark:border-gray-600 rounded-md hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors mx-auto"
                        title={`${tool.name} - ${tool.content}`}
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutSection;