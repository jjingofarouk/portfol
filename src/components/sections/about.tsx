"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaUser, FaChess, FaBrain } from "react-icons/fa";

const CONTACT_LINKS = [
  { name: "Email", href: "mailto:jjingofaroukk@gmail.com", icon: FaEnvelope, color: "text-blue-400" },
  { name: "LinkedIn", href: "https://linkedin.com/in/jjingo-farouk", icon: FaLinkedin, color: "text-cyan-400" },
  { name: "GitHub", href: "https://github.com/jjingofarouk", icon: FaGithub, color: "text-purple-400" },
];

const INTERESTS = [
  { name: "Medicine", icon: FaUser, gradient: "from-blue-500 to-cyan-500" },
  { name: "Chess", icon: FaChess, gradient: "from-purple-500 to-pink-500" },
  { name: "Problem Solving", icon: FaBrain, gradient: "from-green-500 to-teal-500" },
];

function AboutSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl"
      >
        {/* Floating Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-zinc-500 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%" 
              }}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                repeat: Infinity, 
                delay: Math.random() * 2 
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
          {/* Profile Card - 3D Tilt Effect */}
          <motion.aside 
            className="lg:col-span-2"
            whileHover={{ rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-2xl transform-gpu">
              <motion.img
                src="/assets/me.jpg"
                alt="Farouk Jjingo"
                className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-zinc-700 shadow-inner"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <h2 className="text-2xl font-bold text-center text-zinc-100">Farouk Jjingo</h2>
              <p className="text-sm text-center text-zinc-400 mb-6">Full Stack Engineer | MD</p>
              
              <div className="space-y-3">
                {CONTACT_LINKS.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 p-3 rounded-lg ${link.color} hover:bg-zinc-800/50 transition-all`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                  >
                    <link.icon className="text-xl" />
                    <span className="text-zinc-200">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content - Holographic Card */}
          <motion.main 
            className="lg:col-span-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl backdrop-blur-sm">
              <h1 className="text-3xl font-bold text-zinc-100 mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                A Full Stack Engineer with roots in medicine, I fuse healthcare insights with cutting-edge tech. 
                My creations blend clinical precision with sleek, futuristic design.
              </p>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-zinc-100 mb-4">Beyond the Code</h2>
                <div className="flex flex-wrap gap-4">
                  {INTERESTS.map((interest) => (
                    <motion.div
                      key={interest.name}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${interest.gradient} rounded-full text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <interest.icon className="text-lg" />
                      <span>{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl text-center border border-zinc-700"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-xl font-semibold text-zinc-100 mb-3">Let’s Create the Future</h2>
                <motion.a
                  href="mailto:jjingofaroukk@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  Contact Me
                </motion.a>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;