import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const osler: Project = {
  id: 'osler',
  category: 'Health Tool',
  title: 'Osler Mentor',
  src: `${BASE_PATH}/osler/home.png`,
  screenshots: ['home.png', 'chat.png', 'results.png'],
  live: 'https://osler-mentor.vercel.app/',
  github: 'https://github.com/jjingofarouk/osler-mentor',
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
    other: [
      PROJECT_SKILLS.pwa,
      PROJECT_SKILLS.dotenv,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Osler Mentor = Clinical Expertise + Technical Innovation
      </TypographyP>
      <TypographyP className="font-mono">
        Osler Mentor is a Flask-based Progressive Web App (PWA) I built to deliver clinical medical guidance through a virtual Ugandan clinician, Dr. Jingo. Powered by the Gemini API (`google-generativeai`), it provides real-time, scenario-based medical responses in a responsive, offline-capable chat interface, showcasing my skills in Python, Flask, and front-end development.
      </TypographyP>
      <ProjectsLinks live="https://osler-mentor.vercel.app/" repo="https://github.com/jjingofarouk/osler-mentor" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        A sleek, dark-themed interface welcomes users to engage with Dr. Jingo, built with Bootstrap and custom CSS for a polished, responsive design.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
      <p className="font-mono mb-2">
        Using jQuery and Flask, I crafted a dynamic chat UI with a sticky input bar, ensuring seamless user interaction across devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/chat.png`]} />
      <TypographyH3 className="my-4 mt-8">Clinical Guidance</TypographyH3>
      <p className="font-mono mb-2">
        Integrated the Gemini API to deliver tailored, evidence-based clinical responses, leveraging Python (`python-dotenv`) for secure API key management.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        This PWA combines technical prowess with clinical utility, offering a fast, secure, and accessible experience.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time clinical chat powered by Gemini API (`google-generativeai`)</li>
        <li>Progressive Web App with offline support via service workers</li>
        <li>Responsive UI with jQuery and Bootstrap (`bootstrap`)</li>
        <li>Secure backend with Flask and environment management (`python-dotenv`)</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        I engineered a robust Flask backend (`flask`, `werkzeug`) to handle API requests, integrated jQuery for dynamic front-end interactions, and implemented PWA features (manifest, service worker) for a native app-like experience. The app uses secure HTTPS and efficient streaming responses (`httpcore`, `httpx`) for optimal performance.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <p className="font-mono mb-2 mt-5">
        Osler Mentor reflects my ability to blend Python-based backend development, AI integration, and modern front-end techniques to create impactful health tools.
      </p>
    </div>
  ),
};