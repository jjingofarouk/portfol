import { ReactNode } from 'react';
import { SiJavascript, SiJquery, SiPython, SiFlask, SiBootstrap } from 'react-icons/si';
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
  jquery: { title: 'jQuery', bg: 'black', fg: 'white', icon: <SiJquery /> },
  css: { title: 'CSS3', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  bootstrap: { title: 'Bootstrap', bg: 'black', fg: 'white', icon: <SiBootstrap /> },
  python: { title: 'Python', bg: 'black', fg: 'white', icon: <SiPython /> },
  flask: { title: 'Flask', bg: 'black', fg: 'white', icon: <SiFlask /> },
  gemini: { title: 'Gemini API', bg: 'black', fg: 'white', icon: <SiPython /> },
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

export const DrJingo: Project = {
  id: 'osler',
  category: 'ChatBot',
  title: 'AskOsler',
  src: `${BASE_PATH}/osler/home.png`,
  screenshots: ['home.png', 'chat.png', 'case_study_1.png', 'case_study_2.png', 'history.png', 'navigation.png'],
  live: 'https://oslermentor.onrender.com/',
  github: 'https://github.com/jjingofarouk/osler',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.jquery,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.bootstrap,
    ],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.flask,
      PROJECT_SKILLS.gemini,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        AskOsler: Clinical Mentorship and Modern Web Technology
      </TypographyP>
      <TypographyP className="font-mono">
        AskOsler is a Flask-based Progressive Web App (PWA) designed to provide clinical mentorship through a virtual Ugandan clinician, powered by the Gemini API. It delivers real-time, evidence-based medical guidance with features including interactive case studies, chat history, and intuitive navigation, demonstrating expertise in Python, Flask, and responsive front-end development.
      </TypographyP>
      <ProjectsLinks live="https://oslermentor.onrender.com/" repo="https://github.com/jjingofarouk/osler" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        The home screen features a clean, modern interface built with Bootstrap and custom CSS, ensuring a responsive and accessible design across all devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Navigation</TypographyH3>
      <p className="font-mono mb-2">
        A streamlined hamburger menu facilitates seamless navigation between chat, case study, and history features, optimized for both mobile and desktop environments.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/navigation.png`]} />
      <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
      <p className="font-mono mb-2">
        The dynamic chat interface, developed with jQuery and Flask, includes a hamburger menu and a sticky input bar, ensuring consistent usability across devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/chat.png`]} />
      <TypographyH3 className="my-4 mt-8">Case Study Mode</TypographyH3>
      <p className="font-mono mb-2">
        An interactive case study feature enables users to practice clinical reasoning with tailored scenarios, powered by the Gemini API for accurate and relevant responses.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/case_study_1.png`, `${BASE_PATH}/osler/case_study_2.png`]} />
      <TypographyH3 className="my-4 mt-8">Chat History</TypographyH3>
      <p className="font-mono mb-2">
        A dedicated history page tracks user interactions using local storage and Flask session management, ensuring data persistence and accessibility.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/history.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        AskOsler integrates clinical utility with advanced web technologies, offering a fast, secure, and offline-capable platform for medical education.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time medical guidance powered by the Gemini API</li>
        <li>Interactive case studies for clinical practice</li>
        <li>Chat history with local storage integration</li>
        <li>Progressive Web App with offline support</li>
        <li>Responsive UI with jQuery, Bootstrap, and hamburger menu</li>
        <li>Secure Flask backend with environment management</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        The application features a robust Flask backend for managing API requests, jQuery for dynamic front-end interactions, and PWA capabilities (manifest and service worker) for a native app-like experience. Streaming responses optimize performance, while HTTPS and environment variables safeguard API keys.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        AskOsler exemplifies the fusion of Python-based backend development, AI integration, and modern front-end techniques to create an effective tool for medical education.
      </p>
    </div>
  ),
};