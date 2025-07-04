"use client";
import Image from "next/image";
import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css"; // Import the stylesheet
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
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <AnimatedModal>
      <ModalTrigger className="group/modal-btn bg-transparent">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "3/2" }}>
          <DeviceFrameset device="MacBook Pro" zoom={0.8}>
            <Image
              className="w-full h-full object-cover group-hover/modal-btn:scale-105 transition-transform duration-300"
              src={project.src}
              alt={project.title}
              width={400}
              height={267}
              priority
            />
          </DeviceFrameset>
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

export default ProjectCard;