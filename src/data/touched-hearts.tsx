import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiBootstrap } from 'react-icons/si';
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
  bootstrap: { title: 'Bootstrap', bg: 'black', fg: 'white', icon: <SiBootstrap /> },
  css: { title: 'CSS3', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  reactRouter: { title: 'React Router', bg: 'black', fg: 'white', icon: <SiReact /> },
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

export const TouchedHearts: Project = {
  id: 'touched-hearts',
  category: 'NGO Platform',
  title: 'Touched Hearts',
  src: `${BASE_PATH}/touched-hearts/home.png`,
  screenshots: [
    'home.png',
    'programs.png',
    'stories.png',
    'donate.png',
    'events.png',
    'about.png',
    'gallery.png',
  ],
  live: 'https://www.touchedhearts.org/',
  github: 'https://github.com/jjingofarouk/touched',
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.bootstrap,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.reactRouter,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Touched Hearts: NGO Platform for Community Impact
      </TypographyP>
      <TypographyP className="font-mono">
        Touched Hearts is a comprehensive web platform developed for an NGO dedicated to education, healthcare, and community support in East and Central Africa. Built with React 19, React Router, and Bootstrap, the platform features over 20 responsive, accessible pages with dynamic content and optimized performance to highlight the organization’s initiatives and engage users effectively.
      </TypographyP>
      <ProjectsLinks live="https://www.touchedhearts.org/" repo="https://github.com/jjingofarouk/touched" />
      <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
      <p className="font-mono mb-2">
        The homepage features a clean, responsive design using Bootstrap, with prominent calls-to-action and a modular layout to emphasize the NGO’s mission and programs.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/home.png`, `${BASE_PATH}/touched-hearts/about.png`]} />
      <TypographyH3 className="my-4 mt-8">Programs</TypographyH3>
      <p className="font-mono mb-2">
        Dedicated pages for programs such as education and healthcare utilize React Router for seamless navigation and reusable components for consistent design and functionality.
      </p>
      <SlideShow
        images={[
          `${BASE_PATH}/touched-hearts/programs.png`,
          `${BASE_PATH}/touched-hearts/education.png`,
          `${BASE_PATH}/touched-hearts/healthcare.png`,
        ]}
      />
      <TypographyH3 className="my-4 mt-8">Stories</TypographyH3>
      <p className="font-mono mb-2">
        Dynamic story pages leverage React Router’s parameters and a JSON database for scalable content updates, enabling efficient management without backend dependencies.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/touched-hearts/stories.png`, `${BASE_PATH}/touched-hearts/story-detail.png`]}
      />
      <TypographyH3 className="my-4 mt-8">Get Involved</TypographyH3>
      <p className="font-mono mb-2">
        Pages for volunteering and partnerships feature optimized user flows, utilizing React state management and responsive grids for enhanced accessibility and engagement.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/touched-hearts/get-involved.png`, `${BASE_PATH}/touched-hearts/volunteers.png`]}
      />
      <TypographyH3 className="my-4 mt-8">Donate & Events</TypographyH3>
      <p className="font-mono mb-2">
        Donation and event pages are streamlined for fast load times and accessibility, built with modern JavaScript and CSS for a cohesive user experience.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/touched-hearts/donate.png`, `${BASE_PATH}/touched-hearts/events.png`]}
      />
      <TypographyH3 className="my-4 mt-8">Technical Contributions</TypographyH3>
      <p className="font-mono mb-2">
        The platform demonstrates advanced web development techniques for scalability and user engagement:
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Architected over 20 routes with React Router for efficient navigation</li>
        <li>Utilized Bootstrap for responsive, cross-device compatible layouts</li>
        <li>Implemented JSON-based data for dynamic story rendering, minimizing maintenance</li>
        <li>Optimized performance with lazy-loaded images and minimal DOM updates</li>
        <li>Ensured WCAG-compliant accessibility with semantic HTML and ARIA attributes</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        The application leverages React 19’s advanced features, React Router for dynamic routing, and Bootstrap for rapid, consistent styling. A JSON-based content system facilitates easy updates without server-side logic, ensuring maintainability and performance.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/touched-hearts/home.png`, `${BASE_PATH}/touched-hearts/gallery.png`]}
      />
      <p className="font-mono mb-2 mt-5 text-center">
        Touched Hearts delivers a scalable, user-focused web platform that effectively supports the NGO’s mission to drive community impact in East and Central Africa.
      </p>
    </div>
  ),
};