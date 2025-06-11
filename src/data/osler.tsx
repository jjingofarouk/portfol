import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const DrJingo = {
  id: "osler",
  category: "Medical Education",
  title: "Dr Jingo",
  src: "/assets/projects-screenshots/osler/home.png",
  screenshots: ["home.png", "quiz.png", "case-study.png", "progress.png"],
  live: "https://drjingo.vercel.app",
  github: "https://github.com/jjingofarouk/drjingo",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.mui,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.prisma,
      PROJECT_SKILLS.postgresql,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Dr Jingo = Learn Medicine with Confidence
      </TypographyP>
      <TypographyP className="font-mono">
        Dr Jingo is a Next.js-based learning platform for medical students, offering interactive quizzes, case studies, and progress tracking. With a clinical-inspired UI (#2c5282 to #e2e8f0), it’s designed to make mastering medicine engaging and effective.
      </TypographyP>
      <ProjectsLinks live="https://drjingo.vercel.app" repo="https://github.com/jjingofarouk/drjingo" />
      <TypographyH3 className="my-4 mt-8">Home Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        A clean dashboard welcomes users with quick access to quizzes, case studies, and personalized progress insights, styled with Tailwind CSS.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Interactive Quizzes</TypographyH3>
      <p className="font-mono mb-2">
        Test knowledge with dynamic quizzes covering clinical topics, featuring instant feedback and Material-UI for a polished experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/quiz.png`]} />
      <TypographyH3 className="my-4 mt-8">Case Studies</TypographyH3>
      <p className="font-mono mb-2">
        Dive into real-world scenarios with detailed case studies, guiding users through diagnosis and treatment with interactive prompts.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/case-study.png`]} />
      <TypographyH3 className="my-4 mt-8">Progress Tracking</TypographyH3>
      <p className="font-mono mb-2">
        Monitor learning with visual progress charts, powered by Prisma and PostgreSQL for secure, real-time data updates.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/progress.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Dr Jingo is tailored for medical students, blending education with interactivity for effective learning.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Interactive quizzes with instant feedback</li>
        <li>Realistic case studies for practical learning</li>
        <li>Progress tracking with visual analytics</li>
        <li>Secure data storage with PostgreSQL</li>
        <li>Responsive, accessible UI for all devices</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with Next.js 13, TypeScript, and Tailwind CSS, Dr Jingo uses Material-UI for components, Prisma for PostgreSQL queries, and a Node.js backend for robust performance.
      </p>
      <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Dr Jingo is your study partner for medical excellence. Start learning today!
      </p>
    </div>
  ),
};
