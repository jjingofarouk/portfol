// src/data/clinical-calculators.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
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

export const ClinicalCalculators: Project = {
  id: 'clinical-calculators',
  category: 'Health Tech',
  title: 'Clinical Calculators',
  src: `${BASE_PATH}/clinical-calculators/home.png`,
  screenshots: ['home.png', 'calculators.png', 'results.png'],
  live: 'https://clinical-calculators.vercel.app/',
  github: 'https://github.com/jjingofarouk/clinical-calculators',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Clinical Calculators = Precision Medicine
      </TypographyP>
      <TypographyP className="font-mono">
        Clinical Calculators is a Next.js tool for healthcare professionals, offering precise medical calculations.
      </TypographyP>
      <ProjectsLinks live="https://clinical-calculators.vercel.app/" repo="https://github.com/jjingofarouk/clinical-calculators" />
      <TypographyH3 className="my-4 mt-8">Calculator Interface</TypographyH3>
      <p className="font-mono mb-2">
        Easy-to-use calculators for medical metrics like BMI and drug dosages.
      </p>
      <SlideShow images={[`${BASE_PATH}/clinical-calculators/calculators.png`]} />
      <TypographyH3 className="my-4 mt-8">Results Display</TypographyH3>
      <p className="font-mono mb-2">
        Clear and accurate results for clinical decision-making.
      </p>
      <SlideShow images={[`${BASE_PATH}/clinical-calculators/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Accurate medical calculations</li>
        <li>Responsive design with Tailwind CSS</li>
        <li>Client-side processing for speed</li>
      </ul>
    </div>
  ),
};