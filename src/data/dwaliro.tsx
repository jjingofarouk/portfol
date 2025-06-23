import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
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
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  nextjs: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  reactRouter: { title: 'React Router', bg: 'black', fg: 'white', icon: <SiReact /> },
  styledComponents: { title: 'Styled Components', bg: 'black', fg: 'white', icon: <SiReact /> },
  axios: { title: 'Axios', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  reactSpring: { title: 'React Spring', bg: 'black', fg: 'white', icon: <SiReact /> },
  lucideReact: { title: 'Lucide React', bg: 'black', fg: 'white', icon: <SiReact /> },
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

export const Dwaliro: Project = {
  id: 'dwaliro',
  category: 'Clinical Trials',
  title: 'Dwaliro',
  src: `${BASE_PATH}/dwaliro/home.png`,
  screenshots: [
    'home.png',
    'trials.png',
    'study-details.png',
    'details.png',
    'details2.png',
    'details3.png',
    'study-design.png',
    'participants.png',
    'interventions.png',
    'locations.png',
    'regulatory.png',
    'results.png',
    'statistics.png',
    'filters.png',
  ],
  live: 'https://dwaliro.vercel.app',
  github: 'https://github.com/jjingofarouk/dwaliro',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactRouter,
      PROJECT_SKILLS.styledComponents,
      PROJECT_SKILLS.axios,
      PROJECT_SKILLS.reactSpring,
      PROJECT_SKILLS.lucideReact,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Dwaliro: Your Gateway to Clinical Research
      </TypographyP>
      <TypographyP className="font-mono">
        Dwaliro is a powerful React-powered web application designed to streamline exploration of clinical trials sourced from ClinicalTrials.gov. Named after the Luganda word for "hospital," it features a professional hospital-inspired aesthetic with dark teal (#1A4A4F) headers and soft beige (#F5F1E9) backgrounds. Dwaliro delivers an intuitive, responsive, and feature-rich platform for researchers, clinicians, and stakeholders with real-time data and animated analytics with precision and clarity.
      </TypographyP>
      <ProjectsLinks live="https://dwaliro.vercel.app" repo="https://github.com/jjingofarouk/dwaliro" />
      <TypographyH3 className="my-4 mt-8">Trials Grid</TypographyH3>
      <p className="font-mono mb-2">
        The trials page provides a responsive grid of trial cards that displays titles, statuses, phases, and concise summaries. Engineered for performance to support thousands of trials with efficient pagination that ensures rapid load times and scalability.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/trials.png`]} />
      <TypographyH3 className="my-4 mt-8">Smart Filters</TypographyH3>
      <p className="font-mono mb-2">
        The filters section enables precise trial selection by status, phase, study type, or keywords via a real-time search bar. Features intuitive dropdowns and toggles to ensure seamless navigation and rapid query refinement for efficient research.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/filters.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Details</TypographyH3>
      <p className="font-mono mb-2">
        The Study Details section organizes trial information within accordion-style panels with titles, statuses, types, phases, and timelines. Detailed descriptions are formatted for clarity to provide comprehensive insights at a glance.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/study-details.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Design</TypographyH3>
      <p className="font-mono mb-2">
        The Study Design component details trial structure including allocation, masking, model, and endpoint classification. Enhanced with Lucide-React icons and a robust fallback UI for clear presentation of complex data.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/study-design.png`]} />
      <TypographyH3 className="my-4 mt-8">Participant Information</TypographyH3>
      <p className="font-mono mb-2">
        The Participant Information section visualizes enrollment data with animated counters powered by React-Spring alongside cards detailing age ranges, sex, and eligibility criteria. This facilitates rapid assessment of trial demographics.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/participants.png`]} />
      <TypographyH3 className="my-4 mt-8">Trial Interventions</TypographyH3>
      <p className="font-mono mb-2">
        The Interventions section presents expandable cards for drugs, devices, procedures, or therapies and details names, types, statuses, dosages, and routes. Tailored icons and animations enhance usability and engagement.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/interventions.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Locations</TypographyH3>
      <p className="font-mono mb-2">
        The Locations section lists trial sites by facility, city, state, and country with a badge indicating total sites. Subtle animations provide a polished interactive experience for exploring geographic distribution.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/locations.png`]} />
      <TypographyH3 className="my-4 mt-8">Regulatory Information</TypographyH3>
      <p className="font-mono mb-2">
        The Regulatory Information component details NCT IDs, FDA regulation statuses, and sponsors in an icon-driven layout, ensuring clear visibility into trial compliance and oversight.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/regulatory.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Results</TypographyH3>
      <p className="font-mono mb-2">
        The Results section summarizes adverse events, outcomes, and publications with dedicated icons and detailed text. A fallback mechanism ensures usability for trials with limited data.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Hospital-Chic Design</TypographyH3>
      <p className="font-mono mb-2">
        Dwaliro’s design features dark teal headers, soft beige backgrounds, and the Inter font for a professional yet accessible aesthetic. WCAG-compliant contrast and subtle animations enhance user experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Mobile-First Magic</TypographyH3>
      <p className="font-mono mb-2">
        Optimized for all devices with a mobile-first UI that dynamically adjusts layouts, fonts, and controls for seamless functionality and touch-friendly navigation for users on the go.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/mobile.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Theapp provides a robust platform for clinical trial exploration and offering advanced functionality and a professional interface for diverse user groups.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Dynamic trial grid with pagination and advanced filters</li>
        <li>Comprehensive trial details across eight specialized components</li>
        <li>Animated analytics for enrollment, outcomes, and participant stats</li>
        <li>Real-time data via Firebase and ClinicalTrials.gov API</li>
        <li>Accessible, WCAG-compliant design with fluid animations</li>
        <li>Responsive UI optimized for all devices</li>
        <li>Custom teal-beige theme for a medical aesthetic</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with React 18 and styled-components, Dwaliro ensures a modular, precise frontend. React Router enables seamless navigation, while Axios facilitates secure API interactions with a Firebase Cloud Functions backend. React-Spring powers animations, and Lucide-React icons enhance visual clarity. The codebase adheres to high standards with ESLint and Prettier.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Dwaliro combines medical expertise with technical innovation, delivering a functional and aesthetically refined platform. Explore it to experience its potential for your research needs.
      </p>
      <TypographyH3 className="my-4 mt-8">Note on Data Source</TypographyH3>
      <p className="font-mono mb-2">
        Dwaliro integrates data from ClinicalTrials.gov via Firebase Cloud Functions. Some trials may lack complete details due to API limitations. Future enhancements may incorporate additional data sources for deeper insights.
      </p>
    </div>
  ),
};