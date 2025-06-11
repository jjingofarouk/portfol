import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const TouchedHearts = {
  id: "touched-hearts",
  category: "Mental Health Tech",
  title: "Touched Hearts",
  src: "/assets/projects-screenshots/touched-hearts/home.png",
  screenshots: ["home.png", "chat.png", "resources.png", "profile.png"],
  live: "https://touchedhearts.vercel.app",
  github: "https://github.com/jjingofarouk/touched-hearts",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.mongodb,
      PROJECT_SKILLS.socketio,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Touched Hearts = Your Mental Wellness Companion
      </TypographyP>
      <TypographyP className="font-mono">
        Touched Hearts is a Next.js-based mental health platform offering real-time chat support, resources, and personalized profiles. With a soothing UI (#5a67d8 to #e9d8fd), it’s designed to provide comfort and connection for users seeking support.
      </TypographyP>
      <ProjectsLinks live="https://touchedhearts.vercel.app" repo="https://github.com/jjingofarouk/touched-hearts" />
      <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
      <p className="font-mono mb-2">
        A welcoming home page invites users to explore chat, resources, or profile features, styled with Tailwind CSS and Framer Motion animations.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Real-Time Chat</TypographyH3>
      <p className="font-mono mb-2">
        Connect with support agents via Socket.IO-powered chat, offering instant, secure communication for mental health guidance.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/chat.png`]} />
      <TypographyH3 className="my-4 mt-8">Resource Library</TypographyH3>
      <p className="font-mono mb-2">
        Access curated mental health resources, from articles to exercises, stored in MongoDB for quick retrieval and dynamic display.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/resources.png`]} />
      <TypographyH3 className="my-4 mt-8">User Profiles</TypographyH3>
      <p className="font-mono mb-2">
        Manage personalized settings and track wellness progress in a secure, user-friendly profile interface.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/profile.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Touched Hearts prioritizes accessibility and empathy for mental health support.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time chat with support agents</li>
        <li>Curated mental health resource library</li>
        <li>Personalized user profiles</li>
        <li>Secure data with MongoDB and Socket.IO</li>
        <li>Responsive, soothing UI design</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with Next.js 13, TypeScript, and Tailwind CSS, Touched Hearts uses Framer Motion for animations, Socket.IO for real-time chat, and a Node.js/MongoDB backend for secure data management.
      </p>
      <SlideShow images={[`${BASE_PATH}/touched-hearts/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Touched Hearts is here to support your mental wellness. Connect and find comfort today!
      </p>
    </div>
  ),
};
