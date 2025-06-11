// src/data/ssuubi.tsx
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

export const Ssuubi: Project = {
  id: 'ssuubi',
  category: 'Education Tech',
  title: 'Ssuubi',
  src: `${BASE_PATH}/ssuubi/home.jpg`,
  screenshots: ['home.jpg', 'courses.png', 'dashboard.png'],
  live: 'https://ssuubi.vercel.app/',
  github: 'https://github.com/jjingofarouk/ssuubi',
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
        Ssuubi = Empowering Education
      </TypographyP>
      <TypographyP className="font-mono">
        Ssuubi is a Next.js-based platform designed to enhance access to educational resources with course management and student progress tracking. It delivers a seamless experience for learners and educators.
      </TypographyP>
      <ProjectsLinks live="https://ssuubi.vercel.app/" repo="https://github.com/jjingofarouk/ssuubi" />
      <TypographyH3 className="my-4 mt-8">Course Portal</TypographyH3>
      <p className="font-mono mb-2">
        Students browse and enroll in courses with a user-friendly interface.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/courses.png`]} />
      <TypographyH3 className="my-4 mt-8">Educator Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Educators manage course content and track student progress efficiently.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/dashboard.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Course enrollment and management</li>
        <li>Real-time progress tracking with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};