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
  content: ReactNode;
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
            GitHub
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
        Matatu Tracker: Efficient Transit Management for Uganda
      </TypographyP>
      <TypographyP className="font-mono">
        Matatu Tracker is a React-based Progressive Web App (PWA) designed to streamline Uganda’s minibus transportation system. It enables real-time bus tracking, ticket booking, and fleet management through a secure, mobile-first interface, serving passengers, drivers, and administrators with a robust platform for enhanced transit operations.
      </TypographyP>
      <ProjectsLinks live="https://matatu-tracker.vercel.app/" repo="https://github.com/jjingofarouk/matatu-tracker" />
      <TypographyH3 className="my-4 mt-8">Passenger Interface</TypographyH3>
      <p className="font-mono mb-2">
        The passenger dashboard provides access to nearby bus locations, real-time estimated times of arrival (ETAs), and instant ticket booking, optimized for Uganda’s dynamic commuting environment.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Administrative Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Administrators manage operations through a Material-UI-powered interface, supporting user creation, role assignments (Driver, Conductor, Supervisor), account suspensions, and user deletions with a secure and efficient workflow.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/admin.png`]} />
      <TypographyH3 className="my-4 mt-8">Real-Time Tracking</TypographyH3>
      <p className="font-mono mb-2">
        Drivers transmit live location updates to Firebase Firestore, enabling passengers to track buses and supervisors to monitor fleet activities with high accuracy and reliability.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/tracking.png`]} />
      <TypographyH3 className="my-4 mt-8">Ticket Booking System</TypographyH3>
      <p className="font-mono mb-2">
        Passengers can reserve seats effortlessly, while conductors manage bookings in real-time, ensuring synchronized and streamlined ticketing operations.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/booking.jpg`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Engineered to address Uganda’s complex transportation needs, this PWA offers high performance, security, and offline capabilities, scalable for a pilot deployment of 5–10 vehicles.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time bus tracking with Firebase Firestore</li>
        <li>Role-based access for administrators, drivers, passengers, and other stakeholders</li>
        <li>Secure user management via Firebase Cloud Functions</li>
        <li>Mobile-first PWA with offline support and push notifications</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Developed using React 18, Firebase (Authentication, Firestore, Cloud Functions), and Material-UI, with Tailwind CSS for a refined user interface. Firebase Cloud Functions secure administrative operations, while the PWA architecture ensures app-like performance across devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Matatu Tracker enhances Uganda’s minibus transportation system through advanced digital solutions. Explore the platform to experience its capabilities for modern transit management.
      </p>
    </div>
  ),
};