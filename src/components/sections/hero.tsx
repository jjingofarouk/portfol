"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { FileText, Code, Briefcase, ChevronDown } from "lucide-react";
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

  // Animation for tech particle network
  useEffect(() => {
    if (isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    };

    // Create particles representing technologies
    const particles: Particle[] = [];
    const particleCount = 30;
    const colors = ["#2C7A7B", "#4FD1C5", "#81E6D9"]; // Teal palette

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(47, 133, 135, ${0.15 - distance / 1000})`; // Teal stroke
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isLoading]);

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

  return (
    <section id="hero" className={cn("relative w-full min-h-screen overflow-hidden")}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
        />
      </div>

      <div className="grid md:grid-cols-2 max-w-7xl mx-auto">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center",
            "pt-28 sm:pt-16 px-6 md:px-10 lg:px-16"
          )}
        >
          {!isLoading && (
            <>
              <div className="space-y-4">
                <BlurIn delay={0.5}>
                  <Badge
                    variant="outline"
                    className="px-4 py-1 text-sm font-normal bg-white/70 dark:bg-teal-900/50 backdrop-blur-sm border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200"
                  >
                    Full Stack Engineer • 5+ Years Experience
                  </Badge>
                </BlurIn>

                <BlurIn delay={0.7}>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {config.author.split(" ")[0]}{" "}
                    <span className="text-teal-600 dark:text-teal-400">
                      {config.author.split(" ")[1]}
                    </span>
                  </h1>
                </BlurIn>

                <BlurIn delay={0.9}>
                  <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-teal-200">
                    I build high-performance web applications with modern tech stacks
                  </p>
                </BlurIn>

                <BlurIn delay={1.1}>
                  <p className="text-gray-600 dark:text-teal-300 max-w-lg">
                    Specialized in creating scalable, maintainable solutions for complex problems. From
                    concept to deployment, I deliver robust applications that drive business growth.
                  </p>
                </BlurIn>

                <BlurIn delay={1.3}>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
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
                        className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 flex items-center gap-2"
                      >
                        <Briefcase size={18} />
                        <span>View My Work</span>
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
                        className="w-full flex items-center gap-2 border-2 border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      >
                        <FileText size={18} />
                        <span>Download Resume</span>
                      </Button>
                    </BoxReveal>
                  </Link>
                </div>

                <div className="flex gap-3 mt-2">
                  <SlideUp delay={1.9}>
                    <Link href={config.social.github} target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full border-2 border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      >
                        <SiGithub size={20} />
                      </Button>
                    </Link>
                  </SlideUp>

                  <SlideUp delay={2.0}>
                    <Link href={config.social.linkedin} target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full border-2 border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      >
                        <SiLinkedin size={20} />
                      </Button>
                    </Link>
                  </SlideUp>

                  <SlideUp delay={2.1}>
                    <Link href="#contact">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full border-2 border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      >
                        <Code size={20} />
                      </Button>
                    </Link>
                  </SlideUp>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="hidden md:flex col-span-1 items-center justify-center relative">
          {!isLoading && (
            <BoxReveal delay={1.5} width="100%">
              <div className="relative w-full aspect-square max-w-md bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-1">
                <div className="absolute inset-0 bg-white dark:bg-teal-950 rounded-2xl m-0.5 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-full h-full bg-teal-100 dark:bg-teal-900 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-mono text-teal-400 dark:text-teal-500">
                          // Your professional photo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BoxReveal>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-teal-700 dark:text-teal-300" />
      </div>
    </section>
  );
};

export default HeroSection;