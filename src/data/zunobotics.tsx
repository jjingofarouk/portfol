import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
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
  tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
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

export const ZunoBotics: Project = {
  id: 'zunobotics',
  category: 'Robotics & Automation',
  title: 'ZunoBotics',
  src: `${BASE_PATH}/zunobotics/home.jpg`,
  screenshots: ['home.jpg', 'features.png', 'dashboard.png'],
  live: 'https://zunobotics.com/',
  github: 'https://github.com/jjingofarouk/ZunoBotic',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        ZunoBotics - Empowering African Innovators
      </TypographyP>
      <TypographyP className="font-mono">
        ZunoBotics is a cutting-edge open-source robotics and automation innovation hub based in Uganda. Our mission is to democratize robotics by making technology accessible to students and innovators across Africa.
      </TypographyP>
      <ProjectsLinks live="https://zunobotics.com/" repo="https://github.com/jjingofarouk/ZunoBotic" />
      <TypographyH3 className="my-4 mt-8">Core Mission</TypographyH3>
      <p className="font-mono mb-2">
        ZunoBotics is committed to building a community of innovators, creating an ecosystem of shared knowledge and accessible innovation. By focusing on open-source projects and fostering collaboration, ZunoBotics enables students and young innovators to break financial and technical barriers.
      </p>
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Innovative tools for prototyping and automation</li>
        <li>Real-time data analysis and insights</li>
        <li>Modern, responsive user interfaces powered by Tailwind CSS</li>
        <li>Backed by Firebase for secure and scalable solutions</li>
        <li>Open-source repository to foster collaboration</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Our Journey</TypographyH3>
      <p className="font-mono mb-2">
        From its foundation at Makerere University in 2023, ZunoBotics has grown into a platform for empowering young minds. Key milestones include:
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>2023: ZunoBotics founded</li>
        <li>2024: Created the first prototype – an Autonomous Irrigation Robot</li>
        <li>2025: Official launch across Uganda</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Tools & Technologies</TypographyH3>
      <p className="font-mono mb-2">
        ZunoBotics equips innovators with cutting-edge tools, including Arduino, Raspberry Pi, STM32 microcontrollers, and software tools like ROS and OpenCV, fostering a robust ecosystem for innovation.
      </p>
      <SlideShow images={[`${BASE_PATH}/zunobotics/features.png`, `${BASE_PATH}/zunobotics/dashboard.png`]} />
    </div>
  ),
};