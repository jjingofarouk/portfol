"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { FileText, Code, Briefcase, ChevronDown, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal, SlideUp } from "../reveal-animations";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Badge } from "../ui/badge";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Subtle grid animation
  useEffect(() => {
    if (isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create grid
    const gridSize = 30;
    const dotSize = 1;
    const lineOpacity = 0.08;

    const dots: { x: number; y: number; originalX: number; originalY: number; vx: number; vy: number }[] = [];
    for (let x = 0; x < Math.ceil(canvas.width / gridSize); x++) {
      for (let y = 0; y < Math.ceil(canvas.height / gridSize); y++) {
        dots.push({
          x: x * gridSize,
          y: y * gridSize,
          originalX: x * gridSize,
          originalY: y * gridSize,
          vx: 0,
          vy: 0,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines first (behind dots)
      ctx.strokeStyle = `rgba(148, 163, 184, ${lineOpacity})`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Mouse influence - subtle movement
        const dx = mousePosition.x * canvas.width - dot.x;
        const dy = mousePosition.y * canvas.height - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          dot.vx -= (dx / distance) * force * 0.2;
          dot.vy -= (dy / distance) * force * 0.2;
        }

        // Apply velocity with damping
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.vx *= 0.92;
        dot.vy *= 0.92;

        // Spring back to original position
        dot.vx += (dot.originalX - dot.x) * 0.05;
        dot.vy += (dot.originalY - dot.y) * 0.05;

        // Connect to nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSize * 1.5) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots on top
      for (const dot of dots) {
        ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading, mousePosition]);

  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "GraphQL",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "CI/CD",
  ];

  const primaryColor = "slate";
  const accentColor = "cyan";

  return (
    <section id="hero" className={cn("relative w-full min-h-screen overflow-hidden")}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-15"
        />
      </div>

      {/* Accent elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
      <div className="absolute top-0 right-0 w-1/4 h-1 bg-gradient-to-l from-cyan-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-cyan-500 to-transparent" />

      {/* Main content */}
      <div className="grid md:grid-cols-7 max-w-8xl mx-auto">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-4",
            "flex flex-col justify-start md:justify-center",
            "pt-28 sm:pt-16 px-6 md:px-10 lg:px-16"
          )}
        >
          {!isLoading && (
            <>
              <div className="space-y-5">
                <BlurIn delay={0.5}>
                  <Badge
                    variant="outline"
                    className="px-4 py-1 text-sm font-normal bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm border-cyan-200 dark:border-cyan-900 text-gray-700 dark:text-gray-200"
                  >
                    Full Stack Engineer • 3+ Years Experience
                  </Badge>
                </BlurIn>

                <BlurIn delay={0.7}>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {config.author.split(" ")[0]}{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {config.author.split(" ")[1]}
                    </span>
                  </h1>
                </BlurIn>

                <BlurIn delay={0.9}>
                  <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
                    I build <span className="text-cyan-600 dark:text-cyan-400">high-performance</span> applications with modern tech stacks
                  </p>
                </BlurIn>

                <BlurIn delay={1.1}>
                  <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg leading-relaxed">

	I build stuff that stands out. And I keep working, even when no one’s watching.
                  </p>
                </BlurIn>

                <BlurIn delay={1.3}>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 transition-colors border border-gray-200 dark:border-gray-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="#projects" className="flex-1">
                    <BoxReveal delay={1.5} width="100%">
                      <Button
                        className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-800 text-white shadow-md flex items-center gap-2"
                      >
                        <Briefcase size={18} />
                        <span>View My Projects</span>
                      </Button>
                    </BoxReveal>
                  </Link>

                  <Link
                    href="https://drive.google.com/file/d/1GM9Cx0DCgCJoDMu0QtBqs6r3BbTtyg8V/view?usp=drivesdk"
                    target="_blank"
                    className="flex-1"
                  >
                    <BoxReveal delay={1.7} width="100%">
                      <Button
                        variant="outline"
                        className="w-full flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 shadow-sm"
                      >
                        <FileText size={18} />
                        <span>Download Resume</span>
                      </Button>
                    </BoxReveal>
                  </Link>
                </div>

                <div className="flex gap-3 mt-4">
                  <SlideUp delay={1.9}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={config.social.github} target="_blank">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
                          >
                            <SiGithub size={20} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>GitHub</TooltipContent>
                    </Tooltip>
                  </SlideUp>

                  <SlideUp delay={2.0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={config.social.linkedin} target="_blank">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
                          >
                            <SiLinkedin size={20} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                  </SlideUp>

                  <SlideUp delay={2.1}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="#contact">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
                          >
                            <Code size={20} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Contact Me</TooltipContent>
                    </Tooltip>
                  </SlideUp>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="hidden md:flex col-span-3 items-center justify-center relative">
          {!isLoading && (
            <BoxReveal delay={1.5} width="100%">
              <div className="relative max-w-md mx-auto">
                {/* Abstract code representation */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Code editor styling */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 dark:bg-gray-800 flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    </div>
                  </div>

                  <div className="absolute top-8 bottom-0 left-0 right-0 p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <span>{"<"}</span>
                      <span className="text-cyan-600 dark:text-cyan-400">Developer</span>
                      <span>{" >"}</span>
                    </div>

                    <div className="mt-4 pl-6">
                      <div className="flex items-start">
                        <span className="text-gray-500 mr-2">{"<"}</span>
                        <span className="text-blue-600 dark:text-blue-400">Skills</span>
                        <span className="text-gray-500 ml-2">{">"}</span>
                      </div>

                      <div className="pl-6 space-y-1 mt-2">
                        {skills.slice(0, 5).map((skill, i) => (
                          <div key={skill} className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: `${i * 0.2}s` }}>
                            <span className="text-gray-400 dark:text-gray-500">•</span>
                            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start mt-2">
                        <span className="text-gray-500 mr-2">{"</"}</span>
                        <span className="text-blue-600 dark:text-blue-400">Skills</span>
                        <span className="text-gray-500 ml-2">{">"}</span>
                      </div>
                    </div>

                    <div className="mt-4 pl-6">
                      <div className="flex items-start">
                        <span className="text-gray-500 mr-2">{"<"}</span>
                        <span className="text-purple-600 dark:text-purple-400">Projects</span>
                        <span className="text-gray-500 ml-2">{">"}</span>
                      </div>

                      <div className="pl-6 mt-2">
                        <div className="text-gray-700 dark:text-gray-300">// Check out my featured work</div>
                        <div className="text-cyan-600 dark:text-cyan-400 mt-2 font-bold">
                          <span className="mr-2">return</span>
                          <span className="animate-pulse">|</span>
                        </div>
                      </div>

                      <div className="flex items-start mt-2">
                        <span className="text-gray-500 mr-2">{"</"}</span>
                        <span className="text-purple-600 dark:text-purple-400">Projects</span>
                        <span className="text-gray-500 ml-2">{">"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-gray-500 dark:text-gray-400">
                      <span>{"</"}</span>
                      <span className="text-cyan-600 dark:text-cyan-400">Developer</span>
                      <span>{" >"}</span>
                    </div>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-500/5"></div>

                  {/* Line numbers */}
                  <div className="absolute top-8 bottom-0 left-0 w-8 bg-gray-100 dark:bg-gray-800/50 flex flex-col items-center pt-6">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="text-xs text-gray-400 dark:text-gray-500 h-6">{i + 1}</div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg opacity-70 dark:opacity-50 blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-full opacity-60 blur-sm"></div>
              </div>
            </BoxReveal>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-transparent"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;