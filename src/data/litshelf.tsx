import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
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
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  nextjs: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
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
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export const LitShelf: Project = {
  id: 'book-recommender',
  category: 'Book Recommendation System',
  title: 'LitShelf',
  src: `${BASE_PATH}/litshelf/home.png`,
  screenshots: [
    'home.png',
    'recommendations.png',
    'question-form.png',
    'book-card.png',
    'wishlist.png',
    'recently-viewed.png',
    'random-username.png',
    'mobile-view.png',
  ],
  live: 'https://litshelf.vercel.app',
  github: 'https://github.com/jjingofarouk/litshelf',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        LitShelf: Your Personalized Reading Journey
      </TypographyP>
      <TypographyP className="font-mono">
        LitShelf is a sophisticated Next.js 15.3.1 Progressive Web App (PWA) designed to deliver a tailored book discovery experience. Powered by React 19 and TypeScript 5.7.2, it features a hybrid recommendation algorithm integrating collaborative and content-based filtering, an interactive question-based preference form, and a unique random username signup system for data persistence. With a modern glassmorphic UI and a cohesive teal/sage palette, LitShelf offers an intuitive, mobile-first platform for book enthusiasts to explore curated recommendations, manage wishlists, and track reading preferences, all managed client-side using localStorage.
      </TypographyP>
      <ProjectsLinks live="https://litshelf.vercel.app" repo="https://github.com/jjingofarouk/litshelf" />
      <TypographyH3 className="my-4 mt-8">Smart Recommendation Engine</TypographyH3>
      <p className="font-mono mb-2">
        LitShelf’s core is a hybrid recommendation system combining collaborative filtering (leveraging user wishlist data) and content-based filtering (using cosine similarity on book metadata such as genres, tags, and keywords). This approach ensures diverse, personalized suggestions, limiting recommendations to two books per genre for variety. The algorithm dynamically refines suggestions based on user interactions, delivering a customized reading list with each session.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/recommendations.png`]} />
      <TypographyH3 className="my-4 mt-8">Interactive Question-Based Form</TypographyH3>
      <p className="font-mono mb-2">
        The preference form transforms user input into a conversational experience, prompting questions like “What’s your favorite genre?” or “What’s your budget?” with dynamic button options derived from the book dataset (e.g., genres, languages, price ranges). A “Get Recommendations Now” button allows early exits, while a progress indicator (e.g., “3/12”) maintains engagement. The glassmorphic design with subtle hover effects ensures a polished, user-friendly interface.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/question-form.png`]} />
      <TypographyH3 className="my-4 mt-8">Book Discovery Interface</TypographyH3>
      <p className="font-mono mb-2">
        Books are presented in a responsive grid of BookCard components, displaying cover images, titles, authors, and ratings. Users can toggle the preference form to refine suggestions, with a loading state ensuring seamless transitions. The mobile-first layout adapts across devices, prioritizing accessibility and usability.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/book-card.png`, `${BASE_PATH}/litshelf/mobile-view.png`]} />
      <TypographyH3 className="my-4 mt-8">Wishlist & Recently Viewed</TypographyH3>
      <p className="font-mono mb-2">
        Users can save books to a wishlist or track recently viewed titles, with data stored in localStorage. These interactions enhance the recommendation engine’s personalization. The interface provides clear visual feedback, with buttons styled in a warm teal palette for a cohesive experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/wishlist.png`, `${BASE_PATH}/litshelf/recently-viewed.png`]} />
      <TypographyH3 className="my-4 mt-8">Random Username Signup</TypographyH3>
      <p className="font-mono mb-2">
        The random username signup system assigns unique identifiers (e.g., “Reader_a2q5wtm2”) on first visits, stored in localStorage for session persistence without a backend. Users are prompted to save their ID for cross-device use, offering a lightweight alternative to traditional authentication.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/random-username.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        LitShelf delivers a seamless and engaging book discovery platform, combining advanced personalization with a modern, accessible design.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Hybrid recommendation engine with cosine similarity and diversity control</li>
        <li>Interactive, button-based preference form with skippable questions</li>
        <li>Random username signup for lightweight data persistence</li>
        <li>Responsive, glassmorphic UI with a teal/sage palette</li>
        <li>Mobile-first PWA with offline support via Next.js</li>
        <li>Type-safe development with TypeScript 5.7.2</li>
        <li>Client-side data management using localStorage</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        LitShelf leverages Next.js 15.3.1 and React 19 for high-performance rendering, with TypeScript 5.7.2 ensuring type safety and maintainable code. Tailwind CSS provides utility-first styling with custom variables (--foreground, --background) for a glassmorphic aesthetic. The recommendation algorithm, implemented without external libraries, uses cosine similarity for lightweight content-based filtering. LocalStorage enables serverless data persistence, while Vercel deployment with CI/CD ensures seamless updates. ESLint and TypeScript-ESLint maintain code quality.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
      <p className="font-mono mb-2">
        LitShelf was developed using a modern JavaScript ecosystem, with Next.js providing server-side rendering and static site generation. React 19’s hooks manage the interactive form and dynamic UI updates, while TypeScript ensures robust handling of book data and user preferences. Tailwind CSS streamlines styling with utility classes, and the recommendation algorithm was refined iteratively based on user wishlist interactions. Vercel deployment with automatic scaling and domain management ensures global accessibility.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        LitShelf transforms book discovery into a personalized, engaging experience. Explore the live application, review the codebase, and collaborate to enhance the reading journey for book lovers worldwide.
      </p>
    </div>
  ),
};