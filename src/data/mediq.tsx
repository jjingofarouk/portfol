import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';
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
  content: ReactNode;
  github?: string;
  live: string;
};

const PROJECT_SKILLS = {
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <SiReact /> },
  css: { title: 'CSS3', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <SiNodedotjs /> },
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
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export const MediQ: Project = {
  id: 'mediq',
  category: 'Health Tool',
  title: 'MediQ',
  src: `${BASE_PATH}/mediq/home.png`,
  screenshots: ['home.png', 'searches.png', 'results.png'],
  live: 'https://mediq.vercel.app/',
  github: 'https://github.com/jjingofarouk/drug-interaction-checker',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.css,
    ],
    backend: [
      PROJECT_SKILLS.node,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        MediQ: Safety and Simplicity
      </TypographyP>
      <TypographyP className="font-mono">
        MediQ is a React-based application designed to check potential interactions between medications. Users can search for two drugs and receive detailed results in a clear, user-friendly interface, prioritizing medication safety and ease of use.
      </TypographyP>
      <ProjectsLinks live="https://mediq.vercel.app/" repo="https://github.com/jjingofarouk/drug-interaction-checker" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        The home screen offers a simple interface, enabling users to begin checking drug interactions quickly.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Search Interface</TypographyH3>
      <p className="font-mono mb-2">
        Users enter medication names with real-time autocomplete suggestions drawn from a comprehensive drug database.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/searches.png`]} />
      <TypographyH3 className="my-4 mt-8">Interaction Results</TypographyH3>
      <p className="font-mono mb-2">
        Detailed interaction reports display severity levels and alternative options in a clear, organized format.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        The application delivers a fast, secure, and mobile-responsive experience without storing personal data, focusing on functionality and user privacy.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Advanced search with autocomplete suggestions</li>
        <li>Comprehensive drug interaction analysis</li>
        <li>Optimized performance with minimal load times</li>
        <li>Privacy-focused design with HTTPS encryption</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Developed with React 18, the application uses modern JavaScript, React Hooks, and a local JSON database for efficient data management, with CSS3 for custom styling.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/home.png`]} />
      <p className="font-mono mb-2 mt-5">
        MediQ serves as a reliable tool for patients and learners seeking to understand medication safety with clarity and precision.
      </p>
    </div>
  ),
};