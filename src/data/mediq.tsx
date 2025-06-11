import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const MediQ = {
  id: "mediq",
  category: "Health Tool",
  title: "MediQ",
  src: "/assets/projects-screenshots/mediq/home.png",
  screenshots: ["home.png", "searches.png", "results.png"],
  live: "https://mediq.vercel.app/",
  github: "https://github.com/jjingofarouk/drug-interaction-checker",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.css,
    ],
    backend: [
      PROJECT_SKILLS.node,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        MediQ = Safety + Simplicity
      </TypographyP>
      <TypographyP className="font-mono">
        MediQ is a React-based tool that lets you quickly check for potential interactions between medications. Search for two drugs, get detailed results, and stay informed—all in a clean, user-friendly interface. Your health, made simple.
      </TypographyP>
      <ProjectsLinks live="https://mediq.vercel.app/" repo="https://github.com/jjingofarouk/drug-interaction-checker" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        Start with a straightforward interface designed to get you checking drug interactions in seconds.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Search Interface</TypographyH3>
      <p className="font-mono mb-2">
        Type in medication names and get real-time autocomplete suggestions from a comprehensive drug database.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/searches.png`]} />
      <TypographyH3 className="my-4 mt-8">Interaction Results</TypographyH3>
      <p className="font-mono mb-2">
        View detailed interaction reports, including severity levels and alternative suggestions, all clearly presented.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Enjoy a fast, secure, and mobile-responsive experience with no personal data stored—just pure functionality.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Advanced search with smart suggestions</li>
        <li>Comprehensive interaction analysis</li>
        <li>Optimized performance with minimal load times</li>
        <li>Privacy-focused design with HTTPS encryption</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with React 18, this app utilizes modern JavaScript, React Hooks, and a local JSON database for efficient data handling.
      </p>
      <SlideShow images={[`${BASE_PATH}/mediq/home.png`]} />
      <p className="font-mono mb-2 mt-5">
        Whether you’re a patient or a curious learner, MediQ is your go-to tool for understanding medication safety.
      </p>
    </div>
  ),
};
