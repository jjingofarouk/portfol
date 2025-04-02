"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaUser, FaChess, FaBrain } from "react-icons/fa";

const CONTACT_LINKS = [
  { name: "Email", href: "mailto:jjingofaroukk@gmail.com", icon: <FaEnvelope /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/jjingo-farouk", icon: <FaLinkedin /> },
  { name: "GitHub", href: "https://github.com/jjingofarouk", icon: <FaGithub /> },
];

const INTERESTS = [
  { name: "Medicine", icon: <FaUser /> },
  { name: "Chess", icon: <FaChess /> },
  { name: "Problem Solving", icon: <FaBrain /> },
];

function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-20 text-zinc-300 max-w-4xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Card */}
        <aside className="lg:w-1/3">
          <div className="p-6 rounded-xl border border-zinc-600 bg-zinc-900/50 backdrop-blur">
            <div className="flex flex-col items-center">
              <img 
                src="/assets/me.jpg" 
                alt="Farouk Jjingo" 
                className="w-32 h-32 rounded-full mb-4 border-2 border-zinc-500"
              />
              <h2 className="text-xl font-bold">Farouk Jjingo</h2>
              <p className="text-sm text-zinc-400 mb-4">Full Stack Engineer | MD</p>
              
              <div className="w-full space-y-2">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 p-2 rounded hover:bg-zinc-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-2/3">
          <div className="p-6 rounded-xl border border-zinc-600 bg-zinc-900/50 backdrop-blur">
            <h1 className="text-2xl font-bold mb-4">About Me</h1>
            <p className="mb-6 leading-relaxed">
              Full Stack Engineer with a medical background, passionate about bridging healthcare 
              and technology. I build solutions that are as elegant as they are functional, 
              combining clinical precision with clean code principles.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Beyond Code</h2>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest) => (
                  <div 
                    key={interest.name} 
                    className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-full"
                  >
                    {interest.icon}
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-zinc-800 rounded-lg text-center">
              <h2 className="text-lg font-semibold mb-2">Let's Build Together</h2>
              <a 
                href="mailto:jjingofaroukk@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutSection;