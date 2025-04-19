"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import projects, { Project, Skill } from "@/data/projects"; // Import projects data

// Component to display skill icons
const SkillIcons = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-2 py-1 text-xs text-white rounded-md"
          style={{ backgroundColor: skill.bg, color: skill.fg }}
        >
          {skill.icon}
          {skill.title}
        </div>
      ))}
    </div>
  );
};

// Component to display project links
const ProjectLinks = ({ live, github }: { live: string; github?: string }) => {
  return (
    <div className="flex gap-3 mt-2">
      <Link href={live} target="_blank" rel="noopener">
        <Button variant="default" size="sm">
          Visit Website
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
      {github && (
        <Link href={github} target="_blank" rel="noopener">
          <Button variant="default" size="sm">
            GitHub
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {projects.map((project: Project) => (
          <li
            className="w-[300px] h-[500px] border-[.5px] rounded-md border-zinc-600"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px]">
              <Splide
                options={{
                  type: "loop",
                  interval: 3000,
                  autoplay: true,
                  speed: 2000,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label={`${project.title} Images`}
              >
                {project.screenshots.map((image, idx) => (
                  <SplideSlide key={image}>
                    <Image
                      src={`${project.src.split("1.png")[0]}${image}`} // Construct image path
                      alt={`screenshot of ${project.title}`}
                      className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                      width={300}
                      height={200}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="p-4 text-zinc-300">
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-2 text-xs text-zinc-500">
                {typeof project.content === "object" && project.content.props.children[1].props.children}
              </p>
              {/* Display frontend and backend skills */}
              <div className="mt-2">
                {project.skills.frontend.length > 0 && (
                  <>
                    <span className="text-xs text-zinc-400">Frontend:</span>
                    <SkillIcons skills={project.skills.frontend} />
                  </>
                )}
                {project.skills.backend.length > 0 && (
                  <>
                    <span className="text-xs text-zinc-400">Backend:</span>
                    <SkillIcons skills={project.skills.backend} />
                  </>
                )}
              </div>
              {/* Display project links */}
              <ProjectLinks live={project.live} github={project.github} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;