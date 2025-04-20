"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
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
import { ChevronLeft, ChevronRight, Filter, Grid3X3, Rows } from "lucide-react";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "showcase">("showcase");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const shuffledProjects = shuffleArray(projects);
    setAllProjects(shuffledProjects);
  }, []);

  const getCategories = () => {
    const categories = new Set<string>();
    projects.forEach(project => categories.add(project.category));
    return ["All", ...Array.from(categories)];
  };

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newPosition = direction === "left" 
        ? carouselRef.current.scrollLeft - scrollAmount 
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth"
      });

      // Update current slide for indicators
      const slideWidth = carouselRef.current.clientWidth;
      const newSlide = Math.round(newPosition / slideWidth);
      setCurrentSlide(Math.max(0, Math.min(newSlide, filteredProjects.length - 1)));
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto md:min-h-[100vh] py-16">
      <Link href="#projects">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-12"
          )}
        >
          Projects
        </h2>
      </Link>

      {/* View mode & category filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Filter size={18} className="text-gray-500" />
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 max-w-[300px] md:max-w-none">
            {getCategories().map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-3 py-1 text-sm rounded-full whitespace-nowrap",
                  activeCategory === category 
                    ? "bg-black text-white dark:bg-white dark:text-black" 
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode("grid")}
            className={cn(
              "p-2 rounded-md",
              viewMode === "grid" 
                ? "bg-gray-200 dark:bg-gray-700" 
                : "bg-transparent"
            )}
          >
            <Grid3X3 size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => setViewMode("showcase")}
            className={cn(
              "p-2 rounded-md",
              viewMode === "showcase" 
                ? "bg-gray-200 dark:bg-gray-700" 
                : "bg-transparent"
            )}
          >
            <Rows size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {filteredProjects.map((project) => (
            <ModalWrapper key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Showcase/Carousel View */}
      {viewMode === "showcase" && (
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="min-w-full md:min-w-[80%] snap-center flex justify-center px-4"
              >
                <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-sm">
                  <div className="md:w-1/2">
                    <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: "3/2" }}>
                      <Image
                        className="object-cover w-full h-full"
                        src={project.src}
                        alt={project.title}
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <span className="inline-block text-xs bg-black text-white dark:bg-white dark:text-black rounded-lg px-2 py-1 mb-4">
                        {project.category}
                      </span>
                      <div className="mb-6 line-clamp-3 md:line-clamp-4 text-gray-700 dark:text-gray-300">
                        {typeof project.content === 'string' ? project.content : 'Explore this project for more details.'}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.skills.frontend?.slice(0, 4).map((skill, idx) => (
                          <span key={idx} className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                            {skill.name}
                          </span>
                        ))}
                        {project.skills.backend?.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="text-xs bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded">
                            {skill.name}
                          </span>
                        ))}
                        {((project.skills.frontend?.length || 0) + (project.skills.backend?.length || 0)) > 6 && (
                          <span className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">+more</span>
                        )}
                      </div>
                      
                      <div className="flex gap-4">
                        <Modal>
                          <ModalTrigger className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md text-sm">
                            Learn More
                          </ModalTrigger>
                          <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
                            <SmoothScroll isInsideModal={true}>
                              <ModalContent>
                                <ProjectContent project={project} />
                              </ModalContent>
                            </SmoothScroll>
                            <ModalFooter className="gap-4">
                              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
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
                        
                        <Link href={project.live} target="_blank">
                          <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md text-sm">
                            Visit Live
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 md:ml-4"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 md:mr-4"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredProjects.slice(0, 10).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (carouselRef.current) {
                    const width = carouselRef.current.clientWidth;
                    carouselRef.current.scrollTo({
                      left: width * idx,
                      behavior: "smooth"
                    });
                    setCurrentSlide(idx);
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full",
                  currentSlide === idx 
                    ? "bg-black dark:bg-white" 
                    : "bg-gray-300 dark:bg-gray-700"
                )}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
            {filteredProjects.length > 10 && (
              <span className="text-xs text-gray-500">+{filteredProjects.length - 10} more</span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const ModalWrapper = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className="relative w-full h-auto rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-white">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2 mt-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContent project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
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
    </div>
  );
};

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="p-4">
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible mb-8">
        {project.skills.frontend?.length ? (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">Frontend</p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        ) : null}
        {project.skills.backend?.length ? (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        ) : null}
      </div>
      {project.content}
    </div>
  );
};

export default ProjectsSection;