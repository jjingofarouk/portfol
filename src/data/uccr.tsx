import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const UCCR = {
  id: "uccr",
  category: "Medical Tool",
  title: "UCCR",
  src: "/assets/projects-screenshots/uccr/home.png",
  screenshots: ["home.png", "calculator.png", "results.png"],
  live: "https://uccr.vercel.app",
  github: "https://github.com/jjingofarouk/uccr",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.mui,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        UCCR = Precision Nephrology
      </TypographyP>
      <TypographyP className="font-mono">
        UCCR (Urine Creatinine-to-Cortisol Ratio) is a React-based tool for nephrologists and clinicians to calculate critical renal metrics. With a clean, medical-grade UI (#3182ce to #edf2f7), it delivers fast, accurate results for patient care.
      </TypographyP>
      <ProjectsLinks live="https://uccr.vercel.app" repo="https://github.com/jjingofarouk/uccr" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        A minimal home screen offers quick access to the UCCR calculator, styled with Tailwind CSS for clarity and ease of use.
      </p>
      <SlideShow images={[`${BASE_PATH}/uccr/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Calculator Interface</TypographyH3>
      <p className="font-mono mb-2">
        Input urine creatinine and cortisol levels with real-time validation, powered by Material-UI for a professional, responsive form.
      </p>
      <SlideShow images={[`${BASE_PATH}/uccr/calculator.png`]} />
      <TypographyH3 className="my-4 mt-8">Results Display</TypographyH3>
      <p className="font-mono mb-2">
        View precise UCCR ratios with interpretive guidance, presented in a clear, mobile-friendly layout for clinical decision-making.
      </p>
      <SlideShow images={[`${BASE_PATH}/uccr/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        UCCR is designed for simplicity and accuracy, supporting clinicians in renal assessments.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Accurate UCCR calculations</li>
        <li>Real-time input validation</li>
        <li>Interpretive results for clinical use</li>
        <li>Mobile-responsive, accessible UI</li>
        <li>Privacy-focused with no data storage</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with React 18, Tailwind CSS, and Material-UI, UCCR ensures a lightweight, performant experience with no backend dependencies.
      </p>
      <SlideShow images={[`${BASE_PATH}/uccr/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        UCCR is your trusted tool for renal insights. Calculate with confidence today!
      </p>
    </div>
  ),
};
