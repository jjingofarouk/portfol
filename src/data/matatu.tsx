// src/data/matatu.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill, RiNodejsFill } from 'react-icons/ri';
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
  mui: { title: 'Material-UI', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <RiNodejsFill /> },
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

export const MatatuTracker: Project = {
  id: 'matatu',
  category: 'Transport Tech',
  title: 'Matatu Tracker',
  src: `${BASE_PATH}/matatu/home.jpg`,
  screenshots: ['home.jpg', 'admin.png', 'tracking.png', 'booking.jpg'],
  live: 'https://matatu-tracker.vercel.app/',
  github: 'https://github.com/jjingofarouk/matatu-tracker',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.firebase,
      PROJECT_SKILLS.mui,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Matatu Tracker = Navigate Uganda’s Roads Like a Star
      </TypographyP>
      <TypographyP className="font-mono">
        Matatu Tracker is a React-based Progressive Web App that brings order to Uganda’s bustling minibus scene. Track buses in real-time, book tickets on the fly, and manage fleets with a cosmic, mobile-first interface. From passengers to admins, it’s your warp-speed ticket to smarter transit.
      </TypographyP>
      <ProjectsLinks live="https://matatu-tracker.vercel.app/" repo="https://github.com/jjingofarouk/matatu-tracker" />
      <TypographyH3 className="my-4 mt-8">Passenger Hub</TypographyH3>
      <p className="font-mono mb-2">
        Land on a sleek dashboard to find nearby buses, check live ETAs, and book tickets in seconds—perfect for Uganda’s on-the-go commuters.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Admin Command Center</TypographyH3>
      <p className="font-mono mb-2">
        Admins steer the mission: add users, assign roles (Driver, Conductor, Supervisor), suspend accounts, or delete users via a Material-UI-powered dashboard that’s as smooth as a lunar orbit.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/admin.png`]} />
      <TypographyH3 className="my-4 mt-8">Real-Time Tracking</TypographyH3>
      <p className="font-mono mb-2">
        Drivers beam live location updates to Firestore, letting passengers track buses and supervisors monitor fleets with stellar precision.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/tracking.png`]} />
      <TypographyH3 className="my-4 mt-8">Ticket Booking</TypographyH3>
      <p className="font-mono mb-2">
        Passengers secure seats with a tap, while conductors manage bookings—all synced in real-time for a seamless ride.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/booking.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Built for Uganda’s transport chaos, this PWA is fast, secure, and offline-capable, scaling for a pilot of 5–10 vehicles with cosmic efficiency.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time bus tracking with Firebase Firestore</li>
        <li>Role-based access for Admins, Drivers, Passengers, and more</li>
        <li>Secure user management via Cloud Functions</li>
        <li>Mobile-first PWA with offline support and push notifications</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Powered by React 18, Firebase (Authentication, Firestore, Cloud Functions), and Material-UI, with Tailwind CSS for a polished look. Cloud Functions ensure secure admin tasks, while the PWA setup delivers app-like performance on any device.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Matatu Tracker transforms Uganda’s minibus maze into a digital constellation. Hop aboard and explore the future of transit!
      </p>
    </div>
  ),
};