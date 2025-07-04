import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import GitHubCalendar from "react-github-calendar";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-300">
          My coding journey, visualized through GitHub contributions
        </p>
        <BoxReveal width="100%">
          <div className="mt-8 flex justify-center">
            <GitHubCalendar
              username="YOUR_GITHUB_USERNAME" // Replace with your GitHub username
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#1a1e22", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
            />
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default SkillsSection;