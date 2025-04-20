// src/data/projects/projects/touched-hearts.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots/touched-hearts';

export const touchedHearts: Project = {
  id: 'touched-hearts',
  category: 'NGO Platform',
  title: 'Touched Hearts',
  src: `${BASE_PATH}/home.png`,
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
        Touched Hearts: A React-Powered NGO Platform
      </TypographyP>
      <TypographyP className="font-mono">
        I developed Touched Hearts, a comprehensive web platform for an NGO focused on education, healthcare, and  support for communities in East & Central Africa. Using React 19, React Router, and Bootstrap, I built a responsive, accessible site with over 20 pages, dynamic content, and optimized performance to showcase the organization’s impact and engage users effectively.
      </TypographyP>
      <ProjectsLinks
        live="https://www.touchedhearts.org/" 
        repo="https://github.com/jjingofarouk/touched" 
      />
      <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
      <p className="font-mono mb-2">
        I designed a clean and responsive homepage with Bootstrap. Integrated key CTAs and a modular layout to highlight the NGO’s mission and initiatives.
      </p>
      <SlideShow images={[`${BASE_PATH}/home.png`, `${BASE_PATH}/about.png`]} />
      <TypographyH3 className="my-4 mt-8">Programs</TypographyH3>
      <p className stronghold mb-2">
        I created dedicated pages for programs like education and healthcare using React Router for seamless navigation and reusable components for consistency.
      </p>
      <SlideShow
        images={[
          `${BASE_PATH}/programs.png`,
          `${BASE_PATH}/education.png`,
          `${BASE_PATH}/healthcare.png`,
        ]}
      />
      <TypographyH3 className="my-4 mt-8">Stories</TypographyH3>
      <p className="font-mono mb-2">
        I implemented dynamic story pages using React Router’s params and a JSON database to enable scalable content updates without a backend.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/stories.png`, `${BASE_PATH}/story-detail.png`]}
      />
      <TypographyH3 className="my-4 mt-8">Get Involved</TypographyH3>
      <p className="font-mono mb-2">
        I built intuitive pages for volunteering and partnerships. Optimized user flows with React state management and responsive grids.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/get-involved.png`, `${BASE_PATH}/volunteers.png`]}
      />
      <TypographyH3 className="my-4 mt-8">Donate & Events</TypographyH3>
      <p className="font-mono mb-2">
        I developed streamlined donation and event pages, ensuring fast load times and accessibility with modern JavaScript and CSS.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/donate.png`, `${BASE_PATH}/events.png`]}
      />
      <TypographyH3 className="my-4 mt-8">My Technical Contributions</TypographyH3>
      <p className="font-mono mb-2">
        This project showcases my ability to deliver a feature-rich and performant web app:
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>
          Architected 20+ routes with React Router for efficient navigation
        </li>
        <li>
          Built responsive layouts with Bootstrap, achieving cross-device compatibility
        </li>
        <li>
          Integrated JSON data for dynamic story rendering, reducing maintenance overhead
        </li>
        <li>
          Optimized performance with lazy-loaded images and minimal DOM updates
        </li>
        <li>
          Ensured WCAG-compliant accessibility with semantic HTML and ARIA attributes
        </li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        I leveraged React 19’s latest features, React Router for dynamic routing, and Bootstrap for rapid styling. The app uses a JSON-based content system, enabling easy updates without server-side logic.
      </p>
      <SlideShow
        images={[`${BASE_PATH}/home.png`, `${BASE_PATH}/gallery.png`]}
      />
      <p className="font-mono mb-2 mt-5">
        Touched Hearts demonstrates my skills in building scalable, user-focused web applications that meet real-world needs.
      </p>
    </div>
  ),
};