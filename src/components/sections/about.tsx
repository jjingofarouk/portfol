import React, { useState, useEffect } from "react";
import {
  FaStethoscope,
  FaUser,
  FaChess,
  FaBrain,
  FaCodeBranch,
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
  FaServer,
  FaPencilAlt,
  FaUsers,
  FaGamepad,
  FaGlasses,
  FaCogs,
  FaFutbol,
  FaBasketballBall,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCat,
} from "react-icons/fa";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("profile");
  const [hoveredInterest, setHoveredInterest] = useState(null);
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  const CONTACT_LINKS = [
    {
      name: "Email",
      href: "mailto:jjingofaroukk@gmail.com",
      icon: FaEnvelope,
      color: "text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jjingo-farouk",
      icon: FaLinkedin,
      color: "text-cyan-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/jjingofarouk",
      icon: FaGithub,
      color: "text-purple-400",
    },
  ];

  const INTERESTS = [
    { id: 1, name: "Medicine & Tech", icon: FaUser, color: "bg-indigo-600" },
    { id: 2, name: "Spot Diagnosis", icon: FaStethoscope, color: "bg-red-700" },
    { id: 3, name: "Chess", icon: FaChess, color: "bg-gray-700" },
    { id: 4, name: "Problem Solving", icon: FaBrain, color: "bg-green-700" },
    { id: 5, name: "Open Source", icon: FaCodeBranch, color: "bg-amber-600" },
    { id: 6, name: "Hackathons", icon: FaLaptopCode, color: "bg-rose-600" },
    { id: 7, name: "Automation", icon: FaRobot, color: "bg-blue-700" },
    { id: 8, name: "Technical Writing", icon: FaPencilAlt, color: "bg-stone-600" },
    { id: 9, name: "Teaching & Mentorship", icon: FaUsers, color: "bg-emerald-700" },
    { id: 10, name: "Game Development", icon: FaGamepad, color: "bg-purple-700" },
    { id: 11, name: "AR/VR & Mixed Reality", icon: FaGlasses, color: "bg-violet-700" },
    { id: 12, name: "Low-Code/No-Code", icon: FaCogs, color: "bg-gray-700" },
    { id: 13, name: "Football", icon: FaFutbol, color: "bg-green-800" },
    { id: 14, name: "Basketball", icon: FaBasketballBall, color: "bg-orange-600" },
    { id: 15, name: "Cats", icon: FaCat, color: "bg-amber-600" },
  ];

  // Interactive background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('card-container');
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setRotateY((x - 0.5) * 10);
      setRotateX((y - 0.5) * -10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate an orbital path for each interest
  const getPosition = (index, total) => {
    const radius = 120;
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-4 overflow-hidden">
      <div className="relative w-full max-w-6xl">
        {/* DNA Helix Animation - Medicine meets Tech */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute">
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse" 
                style={{ 
                  left: `${Math.sin(i * 0.5) * 100 + 50}%`, 
                  top: `${i * 5}%`,
                  animationDelay: `${i * 0.1}s` 
                }}
              />
              <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse" 
                style={{ 
                  left: `${Math.sin(i * 0.5 + Math.PI) * 100 + 50}%`, 
                  top: `${i * 5}%`,
                  animationDelay: `${i * 0.1 + 0.5}s` 
                }}
              />
            </div>
          ))}
        </div>

        <div id="card-container" 
          className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-2xl backdrop-blur-md overflow-hidden"
          style={{ 
            transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Navigation Tabs */}
          <div className="flex mb-8 justify-center">
            {['profile', 'interests', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 mx-2 rounded-full text-lg font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105' 
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="flex flex-col lg:flex-row items-center gap-8 py-6">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow"></div>
                <img
                  src="/assets/me.png"
                  alt="Farouk Jjingo"
                  className="absolute inset-1 rounded-full object-cover border-4 border-zinc-900 shadow-inner"
                />
              </div>
              
              <div className="lg:flex-1">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Farouk Jjingo
                  </h1>
                  <h2 className="text-xl text-zinc-400 mb-6">Full Stack Engineer | MD</h2>
                  
                  <div className="space-y-6 text-lg text-zinc-300">
                    <p className="leading-relaxed">
                      A Full Stack Engineer with roots in medicine, I bring a unique perspective to technology solutions. 
                      My journey from diagnosing patients to debugging code has equipped me with a distinctive approach to problem-solving.
                    </p>
                    <p className="leading-relaxed">
                      I create digital experiences that blend clinical precision with intuitive design, 
                      specializing in building applications where healthcare and technology intersect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interests Tab - Interactive Solar System */}
          {activeTab === 'interests' && (
            <div className="py-8 relative h-96">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Central Core - representing the person */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10 flex items-center justify-center">
                  <FaUser className="text-white text-xl" />
                </div>

                {/* Orbiting Interests */}
                {INTERESTS.map((interest, idx) => {
                  const pos = getPosition(idx, INTERESTS.length);
                  const isHovered = hoveredInterest === interest.id;
                  
                  return (
                    <div key={interest.id}
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: isHovered ? 20 : 1,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={() => setHoveredInterest(interest.id)}
                      onMouseLeave={() => setHoveredInterest(null)}
                      className={`${interest.color} rounded-full p-3 text-white shadow-lg cursor-pointer
                        ${isHovered ? 'scale-150' : 'scale-100'}`}
                    >
                      <interest.icon className={`text-lg ${isHovered ? 'animate-pulse' : ''}`} />
                      {isHovered && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap bg-zinc-800 px-3 py-1 rounded text-sm">
                          {interest.name}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Orbital paths */}
                <div className="w-60 h-60 rounded-full border border-zinc-700 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="w-80 h-80 rounded-full border border-zinc-700 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="w-96 h-96 rounded-full border border-zinc-700 opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          {/* Contact Tab - Holographic contact methods */}
          {activeTab === 'contact' && (
            <div className="py-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6 text-zinc-100">Let's Connect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center p-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all overflow-hidden border border-zinc-700"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <link.icon className={`text-4xl ${link.color} mb-4 relative z-10 group-hover:scale-125 transition-transform`} />
                    <span className="text-zinc-200 font-medium relative z-10">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center bg-zinc-800 p-6 rounded-xl border border-zinc-700 max-w-lg">
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">Open to Opportunities</h3>
                <p className="text-zinc-300">
                  Looking for collaborative projects that bridge medicine and technology? 
                  I'm always interested in innovative challenges.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}