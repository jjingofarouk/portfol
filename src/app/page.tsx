"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import BlogSection from "@/components/sections/blog";
import AboutSection from "@/components/sections/about";

function MainPage() {
  return (
    <SmoothScroll>
      <main className={cn("bg-slate-100 dark:bg-transparent p-2")}>
        <div className="top-0 z-0 fixed w-full h-screen">
          <AnimatedBackground />
        </div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;