import { ReactNode } from 'react';
import { SiJavascript, SiPython, SiFlask, SiTailwindcss } from 'react-icons/si';
import { FaFontAwesome } from 'react-icons/fa';
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
  html: { title: 'HTML5', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  fontAwesome: { title: 'Font Awesome', bg: 'black', fg: 'white', icon: <FaFontAwesome /> },
  python: { title: 'Python', bg: 'black', fg: 'white', icon: <SiPython /> },
  flask: { title: 'Flask', bg: 'black', fg: 'white', icon: <SiFlask /> },
  transformers: { title: 'Transformers', bg: 'black', fg: 'white', icon: <SiPython /> },
  sentenceTransformers: { title: 'Sentence Transformers', bg: 'black', fg: 'white', icon: <SiPython /> },
  googletrans: { title: 'Google Translate', bg: 'black', fg: 'white', icon: <SiPython /> },
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

export const Ssuubi: Project = {
  id: 'ssuubi',
  category: 'Mental Health Tech',
  title: 'Ssuubi Chatbot',
  src: `${BASE_PATH}/ssuubi/home.png`,
  screenshots: ['home.png', 'chat.png', 'mood.png', 'crisis.png'],
  live: 'https://ssuubi-mental-health-bot.onrender.com',
  github: 'https://github.com/jjingofarouk/ssuubi-mental-health-bot',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.fontAwesome,
    ],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.flask,
      PROJECT_SKILLS.transformers,
      PROJECT_SKILLS.sentenceTransformers,
      PROJECT_SKILLS.googletrans,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Ssuubi Chatbot: Empathetic Mental Health Support
      </TypographyP>
      <TypographyP className="font-mono">
        Ssuubi is a Flask-based Progressive Web App (PWA) designed as a mental health chatbot, offering compassionate, intent-driven responses through a dark-mode interface with teal accents (#10A37F). Utilizing Hugging Face models and Google Translate, it supports users addressing anxiety, depression, or crises, delivering tailored guidance with a focus on medical-tech innovation.
      </TypographyP>
      <ProjectsLinks live="https://ssuubi-mental-health-bot.onrender.com" repo="https://github.com/jjingofarouk/ssuubi-mental-health-bot" />
      <TypographyH3 className="my-4 mt-8">Conversational Core</TypographyH3>
      <p className="font-mono mb-2">
        Users engage in real-time conversations with Ssuubi, which employs Hugging Face models to analyze sentiment and intent, delivering responses from a curated JSON library for empathetic and relevant support.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Mood Check Interface</TypographyH3>
      <p className="font-mono mb-2">
        The mood selection interface allows users to indicate their emotional state (e.g., Tired, Not Great) via intuitive buttons, triggering personalized responses designed to validate and support.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/mood.png`]} />
      <TypographyH3 className="my-4 mt-8">Crisis Response System</TypographyH3>
      <p className="font-mono mb-2">
        For urgent inputs like expressions of despair, Ssuubi activates a crisis mode, presenting red-background alerts with resources such as 988 and Text HOME to 741741 for immediate assistance.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/crisis.png`]} />
      <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
      <p className="font-mono mb-2">
        The responsive chat interface features typing indicators, a sidebar for history and resources, and a dark theme (#202123) with teal accents, ensuring seamless usability on mobile and desktop devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/chat.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Ssuubi provides robust mental health support through AI-driven functionality and a user-focused design, scalable for broader implementation.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Intent detection for anxiety, depression, sleep issues, and more</li>
        <li>Real-time crisis detection with resource links</li>
        <li>In-memory context storage for lightweight operation</li>
        <li>Multilingual support via Google Translate</li>
        <li>Responsive, dark-mode UI with Tailwind CSS</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Developed with Flask, Python 3.12, and Hugging Face models (`distilbert-base-uncased` for sentiment, `all-MiniLM-L6-v2` for embeddings), Ssuubi utilizes Tailwind CSS and Font Awesome for a refined front-end. In-memory storage reduces dependency on databases, while regex patterns and JSON responses ensure reliable intent handling.
      </p>
      <SlideShow images={[`${BASE_PATH}/ssuubi/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Ssuubi offers a compassionate digital companion for mental health support. Explore the platform to access its resources and contribute to its development.
      </p>
    </div>
  ),
};