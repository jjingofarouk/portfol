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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
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
          Scroll horizontally to explore projects →
        </p>
      </div>
      
      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300",
            canScrollLeft 
              ? "opacity-100 hover:bg-white dark:hover:bg-gray-800 hover:scale-110" 
              : "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300",
            canScrollRight 
              ? "opacity-100 hover:bg-white dark:hover:bg-gray-800 hover:scale-110" 
              : "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-4 px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {shuffledProjects.map((project, index) => (
            <ProjectCard key={project.src} project={project} index={index} />
          ))}
        </div>
        
        {/* Gradient overlays for visual effect */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none z-5"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none z-5"></div>
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {shuffledProjects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;