"use client";
import Image from "next/image";
import React, { useState, lazy, Suspense } from "react";
import Link from "next/link";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";

// Lazy load modal components to improve initial load time
const Modal = lazy(() => import("../ui/animated-modal").then(mod => ({ default: mod.Modal })));
const ModalBody = lazy(() => import("../ui/animated-modal").then(mod => ({ default: mod.ModalBody })));
const ModalContent = lazy(() => import("../ui/animated-modal").then(mod => ({ default: mod.ModalContent })));
const ModalFooter = lazy(() => import("../ui/animated-modal").then(mod => ({ default: mod.ModalFooter })));
const ModalTrigger = lazy(() => import("../ui/animated-modal").then(mod => ({ default: mod.ModalTrigger })));
const SmoothScroll = lazy(() => import("../smooth-scroll"));
const FloatingDock = lazy(() => import("../ui/floating-dock").then(mod => ({ default: mod.FloatingDock })));

// Simple loading fallback
const LoadingFallback = () => <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg w-full h-full" />;

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-16">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 mb-16"
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Only load modal content when needed
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className="flex items-center justify-center">
      {/* Project Card */}
      <div
        className="relative w-full rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all group"
        style={{ aspectRatio: "3/2" }}
        onClick={handleOpenModal}
      >
        <Image
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={project.src}
          alt={project.title}
          width={400}
          height={250}
          loading="lazy"
        />
        <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent">
          <div className="flex flex-col h-full items-start justify-end p-4">
            <div className="text-lg text-white font-medium">{project.title}</div>
            <div className="text-xs bg-white text-black rounded-lg w-fit px-2 mt-1">
              {project.category}
            </div>
          </div>
        </div>
      </div>

      {/* Only render the modal when isModalOpen is true */}
      {isModalOpen && (
        <Suspense fallback={<LoadingFallback />}>
          <Modal onClose={() => setIsModalOpen(false)}>
            <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
              <Suspense fallback={<LoadingFallback />}>
                <SmoothScroll isInsideModal={true}>
                  <ModalContent>
                    <ProjectContents project={project} />
                  </ModalContent>
                </SmoothScroll>
              </Suspense>
              <ModalFooter className="gap-4">
                <button 
                  className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <Link href={project.live} target="_blank">
                  <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                    Visit
                  </button>
                </Link>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </Suspense>
      )}
    </div>
  );
};

const ProjectContents = ({ project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Frontend
            </p>
            <Suspense fallback={<div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />}>
              <FloatingDock items={project.skills.frontend} />
            </Suspense>
          </div>
        )}
        
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <Suspense fallback={<div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />}>
              <FloatingDock items={project.skills.backend} />
            </Suspense>
          </div>
        )}
      </div>
      <div className="mt-6">
        {project.content}
      </div>
    </>
  );
};

export default ProjectsSection;