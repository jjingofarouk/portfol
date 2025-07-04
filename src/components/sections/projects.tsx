"use client";
import Image from "next/image";
import React, { useMemo, useRef, useEffect, useState } from "react";
import {
  Modal as AnimatedModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <AnimatedModal>
      <ModalTrigger className="group/modal-btn bg-transparent">
        <div className="relative flex-shrink-0 w-[350px] md:w-[400px] mr-6 md:mr-8">
          {/* Laptop Screen */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[200px] md:h-[250px] max-w-full">
            <div className="rounded-lg overflow-hidden h-[184px] md:h-[234px] bg-white dark:bg-gray-800 relative">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover rounded-lg group-hover/modal-btn:scale-105 transition-transform duration-500"
                priority={index < 3}
              />
              
              {/* Always visible overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="transform translate-y-2 group-hover/modal-btn:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-black text-sm px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Laptop Base */}
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] md:h-[21px] max-w-[400px] md:max-w-[450px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      </ModalTrigger>
      
      <ModalBody className="md:max-w-4xl md:max-h-[80vh] overflow-auto">
        <SmoothScroll isInsideModal={true}>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              {project.title}
            </h4>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              {project.skills.frontend?.length > 0 && (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-500">Frontend</p>
                  <FloatingDock items={project.skills.frontend} />
                </div>
              )}
              {project.skills.backend?.length > 0 && (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-500">Backend</p>
                  <FloatingDock items={project.skills.backend} />
                </div>
              )}
            </div>
            {project.content}
          </ModalContent>
        </SmoothScroll>
        <ModalFooter className="gap-4">
          <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:text-white border border-gray-300 rounded-md text-sm">
            Cancel
          </button>
          <Link href={project.live} target="_blank">
            <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black border border-black rounded-md text-sm">
              Visit
            </button>
          </Link>
        </ModalFooter>
      </ModalBody>
    </AnimatedModal>
  );
};

const ProjectsSection = () => {
  const shuffledProjects = useMemo(() => shuffleArray(projects), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledProjects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [shuffledProjects.length, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledProjects.length) % shuffledProjects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledProjects.length);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <section
      id="projects"
      className="max-w-full mx-auto py-16 px-4 overflow-hidden"
      aria-label="Projects Section"
    >
      <Link href="#projects">
        <h2
          className={cn(
            "text-4xl md:text-7xl text-center font-bold bg-clip-text text-transparent",
            "bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20",
            "mb-12"
          )}
        >
          Projects
        </h2>
      </Link>
      
      {/* Scroll hint */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Auto-advancing every 3 seconds • Hover to pause
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        {/* Carousel container */}
        <div 
          className="relative overflow-hidden py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {shuffledProjects.map((project, index) => (
              <div key={project.src} className="w-full flex-shrink-0 flex justify-center px-8">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
          title={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isPlaying ? (
            <div className="w-3 h-3 flex space-x-1">
              <div className="w-1 h-full bg-white"></div>
              <div className="w-1 h-full bg-white"></div>
            </div>
          ) : (
            <div className="w-3 h-3 border-l-2 border-l-white border-y-transparent border-y-[6px] border-r-0 ml-0.5"></div>
          )}
        </button>
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {shuffledProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125",
              index === currentIndex 
                ? "bg-blue-500 dark:bg-blue-400 scale-110" 
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            )}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="flex justify-center mt-4">
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-100 ease-linear"
            style={{
              width: isPlaying ? `${((currentIndex + 1) / shuffledProjects.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;