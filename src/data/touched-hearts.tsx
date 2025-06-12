// src/data/touched-hearts.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode | any;
  github?: string;
  live: string;
};

const PROJECT_SKILLS = {
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <SiReact /> },
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  nextjs: { title: 'Next Js ', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant="default" size="sm">
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant="default" size="sm">
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export const TouchedHearts: Project = {
  id: 'touched-hearts',
  category: 'Social Good',
  title: 'Touched Hearts',
  src: `${BASE_PATH}/touched-hearts/home.png`,
  screenshots: ['home.png', 'donations.png', 'events.png'],
  live: 'https://touched-hearts.vercel.app/',
  github: 'https://github.com/jjingofarouk/touched-hearts',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Touched Hearts = Community Support
      </TypographyP>
      <TypographyP className="font-mono">
        Touched Hearts is a Next.js platform for organizing community donations and events.
      </TypographyP>
      <ProjectsLinks live="https://touched-hearts.vercel.app/" repo="https://github.com/jjingofarouk/touched-hearts" />
      <TypographyH3 className="my-4 mt-8">Donation Portal</TypographyH3>
      <p className="font-mono mb-2">
        Manage and track community donations.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/donations.png`]} />
      <TypographyH3 className="my-4 mt-8">Event Management</TypographyH3>
      <p className="font-mono mb-2">
        Organize and promote community events.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/events.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Donation tracking</li>
        <li>Event management with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};