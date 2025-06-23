// src/data/carewave.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
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

export const CareWave: Project = {
  id: 'carewave',
  category: 'Health Tech',
  title: 'CareWave',
  src: `${BASE_PATH}/carewave/carewave.png`,
  screenshots: ['carewave.png', 'dashboard.png', 'booking.png'],
  live: 'https://carewave.vercel.app/',
  github: 'https://github.com/jjingofarouk/carewave',
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
        CareWave = Seamless Healthcare Access
      </TypographyP>
      <TypographyP className="font-mono">
        CareWave is a Next.js-powered platform streamlining healthcare access with appointment booking, patient management, and real-time updates. Built for efficiency, it offers a responsive interface for patients and providers alike.
      </TypographyP>
      <ProjectsLinks live="https://carewave.vercel.app/" repo="https://github.com/jjingofarouk/carewave" />
      <TypographyH3 className="my-4 mt-8">Patient Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Patients can view upcoming appointments, book new ones, and manage their profiles with ease.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/carewave.png`]} />
      <TypographyH3 className="my-4 mt-8">Provider Interface</TypographyH3>
      <p className="font-mono mb-2">
        Healthcare providers manage schedules and patient data through a clean, intuitive dashboard.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/dashboard.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time appointment booking</li>
        <li>Secure patient data management with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};