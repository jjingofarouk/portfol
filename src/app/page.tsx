"use client";

import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";

const AboutSection = dynamic(() => import("@/components/sections/about"), {
  ssr: false,
});
const SkillsSection = dynamic(() => import("@/components/sections/skills"), {
  ssr: false,
});
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/sections/contact"), {
  ssr: false,
});

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;