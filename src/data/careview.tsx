import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const CareView = {
  id: "careview",
  category: "Diagnostic Assistant",
  title: "CareView",
  src: "/assets/projects-screenshots/careview/home.png",
  screenshots: ["home.png", "symptom-input.png", "diagnosis-results.png"],
  live: "https://careviewu.vercel.app/",
  github: "https://github.com/jjingofarouk/careview-symptom-checker",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.mui,
    ],
    backend: [
      PROJECT_SKILLS.node,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        CareView = Precision + Care
      </TypographyP>
      <TypographyP className="font-mono">
        CareView is an advanced React-based symptom checker designed to empower users with potential diagnoses based on their symptoms. Uses an advanced algorithm that analyzes symptoms, risk factors, and medical history to provide accurate yet user-friendly diagnostic insights. The app focuses on accessibility and clarity to guides users toward informed health decisions.
      </TypographyP>
      <ProjectsLinks live="https://careviewu.vercel.app/" repo="https://github.com/jjingofarouk/careview-symptom-checker" />
      <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
      <p className="font-mono mb-2">
        A welcoming interface invites users to input symptoms and explore potential diagnoses with ease and confidence.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Symptom Input</TypographyH3>
      <p className="font-mono mb-2">
        Users can select symptoms, specify severity, duration, and additional factors like risk factors and travel history for a comprehensive analysis.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/symptom-input.png`]} />
      <TypographyH3 className="my-4 mt-8">Diagnosis Results</TypographyH3>
      <p className="font-mono mb-2">
        Detailed diagnostic reports display top differential diagnoses, probability scores, confidence levels, and tailored medical guidance when available.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/diagnosis-results.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        CareView has a user-centric design to deliver a seamless and secure health tool experience.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Intelligent symptom analysis with weighted scoring</li>
        <li>Support for single and combination symptom inputs</li>
        <li>Integration of risk factors, travel, and drug history</li>
        <li>Mobile-responsive, accessible UI with Material-UI</li>
        <li>Privacy-first approach with no personal data storage</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with React 18, CareView utilizes modern JavaScript, React Hooks, and Material-UI for a fully responsive interface. The diagnostic algorithm processes weighted symptom data to ensure reliable results even for single-symptom inputs.
      </p>
      <SlideShow images={[`${BASE_PATH}/careview/home.png`]} />
      <p className="font-mono mb-2 mt-5">
        CareView is a vital tool for individuals seeking preliminary health insights and for professionals exploring innovative health tech solutions.
      </p>
    </div>
  ),
};
