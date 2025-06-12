// src/data/mediq.tsx
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

export const MediQ: Project = {
  id: 'mediq',
  category: 'Health Tech',
  title: 'MediQ',
  src: `${BASE_PATH}/mediq/home.png`,
  screenshots: ['home.png', 'records.png', 'appointments.png'],
  live: 'https://mediq.vercel.app/',
  github: 'https://github.com/jjingofarouk/mediq',
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
        MediQ = Smart Medical Records
      </TypographyP>
      <TypographyP className="font-mono">
        MediQ is a Next.js platform for managing medical records and appointments with a focus on security and accessibility.
      </TypographyP>
      <ProjectsLinks live="https://mediq.vercel.app/" repo="https://github.com/jjingofarouk/mediq" />
      <TypographyH3 className="my-4 mt-8">Record Management</TypographyH3>
      <p className="font-mono mb-2">
        Patients access and update their medical records securely.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/records.png`]} />
      <TypographyH3 className="my-4 mt-8">Appointment Scheduling</TypographyH3>
      <p className="font-mono mb-2">
        Seamless booking and management of medical appointments.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/appointments.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Secure medical record storage</li>
        <li>Appointment scheduling with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};