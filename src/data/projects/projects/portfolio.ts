// src/data/projects/projects/portfolio.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const portfolio: Project = {
  id: 'portfolio',
  category: 'Portfolio',
  title: 'My Portfolio',
  src: `${BASE_PATH}/portfolio/home_portfolio.png`,
  screenshots: ['home_portfolio.png'],
  live: 'https://www.jjingofarouk.xyz',
  github: 'https://github.com/jjingofarouk/portfol',
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.shadcn,
      PROJECT_SKILLS.aceternity,
      PROJECT_SKILLS.framerMotion,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.spline,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono">
        Welcome to my digital playground, where creativity meets code in the dopest way possible.
      </TypographyP>
      <ProjectsLinks live="https://www.jjingofarouk.xyz" repo="https://github.com/jjingofarouk/portfol" />
      <TypographyH3 className="my-4 mt-8">Beautiful 3D Objects</TypographyH3>
      <p className="font-mono mb-2">
        Did you see that 3D keyboard modal? Yeah! I made that. That interactive keyboard is being rendered in 3D on a webpage 🤯, and pressing each keycap reveals a skill in a goofy way. It's like typing, but make it art.
      </p>
      <SlideShow images={[`${BASE_PATH}/portfolio/home_portfolio.png`, `${BASE_PATH}/portfolio/skills.png`]} />
      <TypographyH3 className="my-4">Space Theme</TypographyH3>
      <p className="font-mono mb-2">
        Dark background + floating particles = out-of-this-world cool.
      </p>
      <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
      <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>
      <p className="font-mono mb-2">
        My top personal and freelance projects — no filler, all killer.
      </p>
      <SlideShow images={[`${BASE_PATH}/portfolio/ssuubi.jpg`, `${BASE_PATH}/portfolio/ddxpro.jpg`]} />
      <p className="font-mono mb-2 mt-8 text-center">
        This site's not just a portfolio — it's a whole vibe.
      </p>
    </div>
  ),
};