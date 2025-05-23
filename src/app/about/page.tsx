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
  FaChess,
  FaFutbol,
  FaCode,
  FaUser,
  FaFilm,
  FaBrain,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiBrainFill,
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
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbTerminal2 } from "react-icons/tb";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface ContactLink {
  name: string;
  content: string;
  href: string;
  icon: JSX.Element;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

interface Tool {
  name: string;
  content: string;
  icon: JSX.Element;
  color: string;
}

interface Interest {
  name: string;
  icon: JSX.Element;
  description: string;
  colorClass: string;
  bgColor: string;
  level: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    name: "Email",
    content: "jjingofarouq@gmail.com",
    href: "mailto:jjingofarouq@gmail.com",
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

const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "AWS", "NginX", "Linux", "Kubuntu", "Git"],
  },
  {
    name: "Tools",
    skills: ["VS Code", "VIM", "Terminal", "Prettier", "NPM", "Yarn", "Vercel"],
  },
];

const TOOLS: Tool[] = [
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
    name: "Nodejs",
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
    name: "Docker",
    content: "Containerization for consistent deployment",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "High-performance web server and reverse proxy",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
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
    name: "VIM",
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
    name: "Terminal",
    content: "Command line interface for efficient workflows",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Cloud computing services for scalable infrastructure",
    icon: <FaAws size={"50px"} color="#FF9900" />,
    color: "#FF9900",
  },
];

const INTERESTS: Interest[] = [
  {
    name: "Medicine",
    icon: <FaUser size={24} />,
    description: "Medical Doctor with expertise in clinical diagnostics",
    colorClass: "from-blue-600 to-blue-900",
    bgColor: "bg-blue-900/30",
    level: "Professional",
  },
  {
    name: "Chess",
    icon: <FaChess size={24} />,
    description: "Strategic thinker and chess enthusiast",
    colorClass: "from-amber-500 to-amber-800",
    bgColor: "bg-amber-800/30",
    level: "Advanced",
  },
  {
    name: "Football",
    icon: <FaFutbol size={24} />,
    description: "Man United and Real Madrid supporter",
    colorClass: "from-red-600 to-red-900",
    bgColor: "bg-red-900/30",
    level: "Enthusiast",
  },
  {
    name: "Problem Solving",
    icon: <RiBrainFill size={24} />,
    description: "Applying analytical thinking across disciplines",
    colorClass: "from-purple-600 to-purple-900",
    bgColor: "bg-purple-900/30",
    level: "Expert",
  },
  {
    name: "Film",
    icon: <FaFilm size={24} />,
    description: "Huge cinema fan with an appreciation for not-so-common",
    colorClass: "from-green-600 to-green-900",
    bgColor: "bg-green-900/30",
    level: "Enthusiast",
  },
];

interface InterestCardProps {
  interest: Interest;
  index: number;
}

function InterestCard({ interest, index }: InterestCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg transition-all duration-500 ${interest.bgColor} border border-zinc-700 hover:border-zinc-500 transform hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${interest.colorClass} opacity-20`}></div>
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="p-3 rounded-lg bg-zinc-800/70 backdrop-blur-sm">
            {interest.icon}
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-zinc-700/70 backdrop-blur-sm">
            {interest.level}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{interest.name}</h3>
        <p className="text-sm text-zinc-400 mb-4 flex-grow">{interest.description}</p>
        <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${interest.colorClass}`}
              style={{ width: index % 2 === 0 ? '85%' : '70%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'interests' | 'timeline'>('interests');

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Farouk Jjingo"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-semibold">Farouk Jjingo</p>
                <div className="flex gap-2">
                  <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                
                    Full Stack Engineer
                  </div>
                  <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                    MD
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors duration-300"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">{link.content}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl font-bold mb-6 lg:mb-10">About me</h1>
            <p className="mb-6 text-lg leading-relaxed">
              I'm a Full Stack Engineer with a unique background in medicine, which I'm using to bridge healthcare challenges around the globe. I deeply love what I do, and I can skip anything to get things done. My biggest asset is that I'm a life-long learner. I will learn anything that can help me solve an itching problem! I'm also a bit of a mini-perfectionist, so I tend to squeeze the best out of everything.
            </p>
            <p className="mb-10 text-lg leading-relaxed">
              Prior exposure to healthcare challenges in the Global South has given me a distinctive advantage. I quickly understand and work with complex systems, through analytical thinking to deliver solutions that truly make an impact. I excel in creating clean maintainable code with a focus on performance and user experience. Most importantly, I am ever learning. I won't fix a bug before learning all about it.
            </p>
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Beyond Code</h2>
                <div className="flex rounded-lg overflow-hidden border border-zinc-700">
                  <button
                    onClick={() => setActiveTab('interests')}
                    className={`px-4 py-2 text-sm transition-colors ${activeTab === 'interests' ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700/50'}`}
                  >
                    Interests
                  </button>
                  <button
                    onClick={() => setActiveTab('timeline')}
                    className={`px-4 py-2 text-sm transition-colors ${activeTab === 'timeline' ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700/50'}`}
                  >
                    Journey
                  </button>
                </div>
              </div>
              {activeTab === 'interests' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {INTERESTS.map((interest, index) => (
                    <InterestCard key={interest.name} interest={interest} index={index} />
                  ))}
                </div>
              )}
              {activeTab === 'timeline' && (
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
                  <div className="space-y-6 pl-12">
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-zinc-800 z-10"></div>
                      <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                        <div className="text-sm text-blue-400 mb-1">2018 - Present</div>
                        <h3 className="font-semibold mb-1">Medical Practice</h3>
                        <p className="text-sm text-zinc-400">Using my medical background to understand healthcare challenges and create tech solutions that bridge the gap.</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-purple-600 border-2 border-zinc-800 z-10"></div>
                      <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                        <div className="text-sm text-purple-400 mb-1">2020 - Present</div>
                        <h3 className="font-semibold mb-1">Full Stack Development</h3>
                        <p className="text-sm text-zinc-400">Mastering the art of building web applications from frontend to backend with a focus on healthcare solutions.</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-zinc-800 z-10"></div>
                      <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                        <div className="text-sm text-red-400 mb-1">Lifelong</div>
                        <h3 className="font-semibold mb-1">Continuous Learning</h3>
                        <p className="text-sm text-zinc-400">Always exploring new technologies, methodologies, and frameworks to stay ahead of the curve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
                        className="w-fit p-3 border-[.5px] border-zinc-600 rounded-md hover:border-zinc-400 transition-colors duration-300 mx-auto"
                        title={`${tool.name} - ${tool.content}`}
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg border-[.5px] border-zinc-700">
              <h2 className="text-xl font-semibold mb-3">Let's Build Something Amazing</h2>
              <p className="mb-4">
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your team. Most importantly, I value creating connections with people that last beyond the lifespan of any project.
              </p>
              <a
                href="mailto:jjingofarouq@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md transition-colors duration-300"
              >
                <FaEnvelope />
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
