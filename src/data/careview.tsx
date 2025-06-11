// src/data/careview.tsx
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

export const CareView: Project = {
  id: 'careview',
  category: 'Health Tech',
  title: 'CareView',
  src: `${BASE_PATH}/careview/home.jpg`,
  screenshots: ['home.jpg', 'dashboard.png', 'reports.png'],
  live: 'https://careview.vercel.app/',
  github: 'https://github.com/jjingofarouk/careview',
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
        CareView = Healthcare Analytics
      </TypographyP>
      <TypographyP className="font-mono">
        CareView provides healthcare analytics and reporting tools, built with Next.js for a responsive and data-driven experience.
      </TypographyP>
      <ProjectsLinks live="https://careview.vercel.app/" repo="https://github.com/jjingofarouk/careview" />
      <TypographyH3 className="my-4 mt-8">Analytics Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Visualize patient data and trends with interactive charts.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/dashboard.png`]} />
      <TypographyH3 className="my-4 mt-8">Reports</TypographyH3>
      <p className="font-mono mb-2">
        Generate detailed healthcare reports for providers.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/reports.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Data visualization with charts</li>
        <li>Secure data storage with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};