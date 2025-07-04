// ProjectsSection.jsx
"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import {
  Modal as AnimatedModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
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
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <AnimatedModal>
      <ModalTrigger className="group/modal-btn bg-transparent">
        <div className="relative w-full">
          {/* Laptop Screen */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800 relative">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover rounded-lg group-hover/modal-btn:scale-105 transition-transform duration-300"
                priority
              />
              
              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover/modal-btn:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-sm md:text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-white text-black text-xs px-2 py-1 md:px-3 md:py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Laptop Base */}
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
          
          {/* Fallback info display when not hovering */}
          <div className="mt-4 text-center group-hover/modal-btn:opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {project.title}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {project.category}
            </span>
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

  return (
    <section
      id="projects"
      className="w-full py-16 px-4"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[100%] mx-auto">
        {shuffledProjects.map((project) => (
          <ProjectCard key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;