// src/data/uccr.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiCss3 } from 'react-icons/si';
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
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  nextjs: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  css: { title: 'CSS', bg: 'black', fg: 'white', icon: <SiCss3 /> },
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

export const UCCR: Project = {
  id: 'uccr',
  category: 'Healthcare',
  title: 'UCCR - Uganda Clinical Case Reports',
  src: `${BASE_PATH}/uccr/home.png`,
  screenshots: [
    'home.png',
    'case-detail.png',
    'case-create.png',
    'comment-section.png',
    'profile.png',
    'inbox.png',
    'mobile-view.png',
  ],
  live: 'https://www.ugandacasereports.org',
  github: 'https://github.com/jjingofarouk/uccr',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.css,
    ],
    backend: [PROJECT_SKILLS.firebase],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          UCCR: Uganda Clinical Case Reports
        </TypographyP>
        <TypographyP className="font-mono">
          UCCR is a Next.js 14.2.3-powered web application designed for doctors, medical students,
          and healthcare professionals to share and discuss clinical cases from Uganda. Built with
          React 18.2.0 and Firebase 10.12.2, it offers features like case creation with multimedia
          support, interactive comment sections with reactions, user profiles, and private
          messaging. The app features a responsive design with plain CSS, providing a professional
          platform for medical collaboration.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Case Management</TypographyH3>
        <p className="font-mono mb-2">
          UCCR allows users to create detailed case reports with titles, presenting complaints,
          histories, investigations, management plans, and optional image uploads stored in
          Firebase Storage. The interface is intuitive, with a responsive layout that adapts to
          various devices, ensuring accessibility for medical professionals on the go.
        </p>
        <SlideShow images={[`${BASE_PATH}/uccr/case-create.png`, `${BASE_PATH}/uccr/case-detail.png`]} />
        <TypographyH3 className="my-4 mt-8">Interactive Discussions</TypographyH3>
        <p className="font-mono mb-2">
          The comment section enables rich discussions with features like comments, replies, and
          reactions (Like, Insightful, Dislike) powered by Firestore. Users can engage with cases,
          share insights, and vote on comments, fostering a collaborative learning environment.
        </p>
        <SlideShow images={[`${BASE_PATH}/uccr/comment-section.png`]} />
        <TypographyH3 className="my-4 mt-8">User Profiles & Messaging</TypographyH3>
        <p className="font-mono mb-2">
          Users can upload profile photos and access private messaging via Firebase Authentication
          and Firestore. The inbox feature supports secure communication between healthcare
          professionals, enhancing networking and case consultation.
        </p>
        <SlideShow images={[`${BASE_PATH}/uccr/profile.png`, `${BASE_PATH}/uccr/inbox.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Firebase Authentication with Email/Password</li>
          <li>Case creation with multimedia support</li>
          <li>Interactive comment system with reactions</li>
          <li>User profiles with photo upload</li>
          <li>Private messaging between users</li>
          <li>Responsive design with plain CSS</li>
          <li>Mobile-first layout for accessibility</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          Built with Next.js 14.2.3 and React 18.2.0, UCCR leverages Firebase 10.12.2 for
          authentication, Firestore for real-time data, and Storage for media. The frontend uses
          plain CSS for styling, ensuring a lightweight and customizable design. Framer Motion adds
          smooth animations, while Lucide React provides icons. Deployed on Vercel, the app
          benefits from automatic scaling and CI/CD, with ESLint maintaining code quality.
        </p>
        <SlideShow images={[`${BASE_PATH}/uccr/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
        <p className="font-mono mb-2">
          Developed using Next.js for server-side rendering and static generation, UCCR integrates
          Firebase for backend services. React hooks manage state and user interactions, while
          Firestore ensures real-time updates for comments and messages. Plain CSS provides a
          tailored styling approach, with responsive design tested across devices. Deployment on
          Vercel with Firebase Hosting ensures global accessibility and scalability.
        </p>
        <SlideShow images={[`${BASE_PATH}/uccr/mobile-view.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          UCCR empowers healthcare professionals with a platform for sharing and learning from
          clinical cases. Explore the live app, review the code, and contribute to enhancing medical
          knowledge!
        </p>
      </div>
    );
  },
};