import { ReactNode } from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
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
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <SiReact /> },
  next: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  framerMotion: { title: 'Framer Motion', bg: 'black', fg: 'white', icon: <SiReact /> },
  heroicons: { title: 'Heroicons', bg: 'black', fg: 'white', icon: <SiReact /> },
  redux: { title: 'Redux', bg: 'black', fg: 'white', icon: <SiReact /> },
  reactPDF: { title: 'React PDF', bg: 'black', fg: 'white', icon: <SiReact /> },
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <SiNodedotjs /> },
  vercelAnalytics: { title: 'Vercel Analytics', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
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

export const FreeResume: Project = {
  id: 'free-resume',
  category: 'Web Development & Productivity',
  title: 'FreeResume',
  src: `${BASE_PATH}/free-resume/home.png`,
  screenshots: [
    'home.png',
    'resume-builder.png',
    'resume-preview.png',
    'resume-import.png',
    'resume-parser.png',
    'features.png',
    'testimonials.png',
    'faq.png',
    'about.png',
    'contact.png',
    'not-found.png',
  ],
  live: 'http://free-resume-indol.vercel.app',
  github: 'https://github.com/jjingofarouk/free-resume',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
      PROJECT_SKILLS.heroicons,
      PROJECT_SKILLS.redux,
      PROJECT_SKILLS.reactPDF,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.vercelAnalytics,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        FreeResume: Helping Ugandans Land Their Dream Jobs
      </TypographyP>
      <TypographyP className="font-mono">
        FreeResume is a powerful Next.js 13.4.4 Progressive Web App (PWA) designed to empower Ugandan job seekers by enabling them to create professional, ATS-friendly resumes effortlessly and at no cost. Built with TypeScript 5.0.4 for robust typing, Tailwind CSS 3.3.2 for a vibrant teal-blue gradient UI (#0d9488 to #3b82f6), and Framer Motion 10.12.16 for seamless animations, the application prioritizes intuitiveness, mobile-first design, and accessibility. Redux Toolkit 1.9.5 manages complex state, while @react-pdf/renderer 3.1.10 ensures high-quality PDF outputs, delivering a reliable tool to enhance job application success.
      </TypographyP>
      <ProjectsLinks live="http://free-resume-indol.vercel.app" repo="https://github.com/jjingofarouk/free-resume" />
      <TypographyH3 className="my-4 mt-8">Welcoming Home Page</TypographyH3>
      <p className="font-mono mb-2">
        The homepage features a clean, gradient design (#0d9488 to #3b82f6) with a live resume preview powered by AutoTypingResume. Leveraging Next.js 13.4.4 and React 18.2.0, it employs Framer Motion for smooth transitions and @heroicons/react 2.0.18 icons (e.g., DocumentPlusIcon) to guide users, ensuring an engaging and accessible entry point across devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Effortless Resume Builder</TypographyH3>
      <p className="font-mono mb-2">
        The Resume Builder enables users to input details and view real-time previews via @react-pdf/renderer. Tailwind CSS ensures a responsive layout, Framer Motion provides subtle animations, and Redux Toolkit synchronizes state. TypeScript guarantees data integrity, allowing users to focus on crafting compelling resumes.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/resume-builder.png`, `${BASE_PATH}/free-resume/resume-preview.png`]} />
      <TypographyH3 className="my-4 mt-8">Smart Resume Import & ATS Checker</TypographyH3>
      <p className="font-mono mb-2">
        The Import and Parser pages allow users to upload existing resumes and verify ATS compatibility. Utilizing react-contenteditable 3.3.7 for seamless editing and Tailwind CSS for a refined interface, these pages feature gradient buttons (#0d9488) and @heroicons/react icons (e.g., UploadIcon) to enhance usability and accessibility.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/resume-import.png`, `${BASE_PATH}/free-resume/resume-parser.png`]} />
      <TypographyH3 className="my-4 mt-8">Feature Spotlight</TypographyH3>
      <p className="font-mono mb-2">
        The Features page highlights FreeResume’s capabilities, including real-time previews, ATS optimization, and PDF downloads. A Tailwind CSS grid, enriched with @heroicons/react icons (e.g., CheckCircleIcon) and Framer Motion animations, creates a dynamic and informative user experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/features.png`]} />
      <TypographyH3 className="my-4 mt-8">Voices from Uganda</TypographyH3>
      <p className="font-mono mb-2">
        The Testimonials page showcases success stories from Ugandan users, presented in a Tailwind CSS carousel animated by Framer Motion. Gradient accents (#3b82f6) and @heroicons/react icons (e.g., HeartIcon) foster trust and relatability, reinforcing the platform’s impact.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/testimonials.png`]} />
      <TypographyH3 className="my-4 mt-8">Helpful FAQ</TypographyH3>
      <p className="font-mono mb-2">
        The FAQ page addresses user queries in an accordion-style format, styled with Tailwind CSS and @heroicons/react icons (e.g., QuestionMarkCircleIcon). Gradient highlights (#0d9488) and TypeScript-driven rendering ensure clarity and ease of navigation.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/faq.png`]} />
      <TypographyH3 className="my-4 mt-8">Our Mission</TypographyH3>
      <p className="font-mono mb-2">
        The About page articulates FreeResume’s mission to empower Ugandan job seekers. Featuring Tailwind CSS styling, Framer Motion animations, and @heroicons/react icons (e.g., UsersIcon), it combines gradient headers (#0d9488 to #3b82f6) with an approachable narrative to inspire users.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/about.png`]} />
      <TypographyH3 className="my-4 mt-8">Get in Touch</TypographyH3>
      <p className="font-mono mb-2">
        The Contact page provides a streamlined form with real-time validation, built with React 18.2.0. Tailwind CSS, gradient buttons (#3b82f6), and @heroicons/react icons (e.g., EnvelopeIcon) create an inviting interface, with WCAG-compliant social links for accessibility.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/contact.png`]} />
      <TypographyH3 className="my-4 mt-8">Graceful Error Handling</TypographyH3>
      <p className="font-mono mb-2">
        A custom 404 page ensures a user-friendly experience with a gradient button (#0d9488 to #3b82f6) and a “Back to Home” link. Powered by Next.js routing and Tailwind CSS, it maintains navigational continuity.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/not-found.png`]} />
      <TypographyH3 className="my-4 mt-8">What Makes It Special</TypographyH3>
      <p className="font-mono mb-2">
        FreeResume is tailored to simplify and enhance job applications, particularly for Ugandan job seekers, offering a robust and accessible platform.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time resume building with ATS-friendly templates</li>
        <li>Next.js 13.4.4 PWA for fast, offline-capable performance</li>
        <li>PDF generation with @react-pdf/renderer 3.1.10</li>
        <li>Seamless state management using Redux Toolkit 1.9.5</li>
        <li>Engaging animations with Framer Motion 10.12.16</li>
        <li>Accessible UI with @heroicons/react 2.0.18 icons</li>
        <li>Teal-blue gradient design (#0d9488 to #3b82f6) with Inter font</li>
        <li>Usage insights via Vercel Analytics 1.0.1</li>
        <li>Reliable testing with Jest 29.5.0</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Tech Behind the Scenes</TypographyH3>
      <p className="font-mono mb-2">
        FreeResume leverages Next.js 13.4.4 for high-performance rendering, TypeScript 5.0.4 for type safety, and Tailwind CSS 3.3.2 for a cohesive gradient UI. Redux Toolkit ensures efficient state management, Framer Motion delivers engaging animations, and @react-pdf/renderer produces professional PDFs. Jest 29.5.0 and @testing-library/react 14.0.0 guarantee reliability, while Vercel Analytics 1.0.1 provides usage insights. Prettier with prettier-plugin-tailwindcss 0.2.1 maintains code quality, and Vercel’s CI/CD pipeline streamlines deployment.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <TypographyH3 className="my-4 mt-8">How It Came Together</TypographyH3>
      <p className="font-mono mb-2">
        Developed with precision, FreeResume utilizes Next.js 13.4.4 for scalability and TypeScript 5.0.4 for error-free coding. Tailwind CSS 3.3.2 creates a vibrant, accessible UI, while Redux Toolkit manages state efficiently. Framer Motion enhances interactivity, and @react-pdf/renderer with pdfjs-dist 3.7.107 handles PDF generation and parsing. Jest testing and Vercel Analytics ensure quality and performance, with seamless deployment via Vercel and GitHub CI/CD.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        FreeResume reflects a commitment to empowering Uganda’s job seekers, equipping them with tools to succeed in competitive markets. Explore the live application and review the codebase to collaborate on enhancing job application accessibility.
      </p>
    </div>
  ),
};