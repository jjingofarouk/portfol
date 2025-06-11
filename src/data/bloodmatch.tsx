// src/data/bloodmatch.tsx
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

export const BloodMatch: Project = {
  id: 'bloodmatch',
  category: 'Health Tech',
  title: 'BloodMatch',
  src: `${BASE_PATH}/bloodmatch/home.jpg`,
  screenshots: ['home.jpg', 'donor.png', 'request.png'],
  live: 'https://bloodmatch.vercel.app/',
  github: 'https://github.com/jjingofarouk/bloodmatch',
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
        BloodMatch = Connecting Blood Donors
      </TypographyP>
      <TypographyP className="font-mono">
        BloodMatch is a Next.js platform for coordinating blood donations and requests.
      </TypographyP>
      <ProjectsLinks live="https://bloodmatch.vercel.app/" repo="https://github.com/jjingofarouk/bloodmatch" />
      <TypographyH3 className="my-4 mt-8">Donor Portal</TypographyH3>
      <p className="font-mono mb-2">
        Donors register and manage their availability.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/donor.png`]} />
      <TypographyH3 className="my-4 mt-8">Request System</TypographyH3>
      <p className="font-mono mb-2">
        Request blood with specific requirements.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/request.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Blood donation coordination</li>
        <li>Secure backend with Firebase</li>
        <li>Responsive design with Tailwind CSS</li>
      </ul>
    </div>
  ),
};