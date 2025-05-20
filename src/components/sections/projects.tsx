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

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ProjectsSection = () => {
  // Memoize shuffled projects to prevent re-shuffling on re-renders
  const shuffledProjects = useMemo(() => shuffleArray(projects), []);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-16 px-4"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {shuffledProjects.map((project) => (
          <ProjectCard key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <AnimatedModal>
      <ModalTrigger className="group/modal-btn bg-transparent">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "3/2" }}>
          <Image
            className="w-full h-full object-cover group-hover/modal-btn:scale-105 transition-transform duration-300"
            src={project.src}
            alt={project.title}
            width={400}
            height={267}
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/85 to-transparent">
            <div className="flex flex-col justify-end h-full p-6">
              <h3 className="text-lg text-white font-semibold">{project.title}</h3>
              <span className="text-xs bg-white text-black rounded-full px-3 py-1 mt-2">
                {project.category}
              </span>
            </div>
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

export default ProjectsSection;