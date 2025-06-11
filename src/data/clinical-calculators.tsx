import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const ClinicalCalculators = {
  id: "clinical-calculators",
  category: "Healthcare",
  title: "Clinical Calculators",
  src: "/assets/projects-screenshots/clinical-calculators/home.png",
  screenshots: [
    "home.png",
    "search.png",
    "favorites.png",
    "cardiovascular.png",
    "neurology.png",
    "gastroenterology.png",
    "nephrology.png",
    "obstetrics.png",
    "pulmonary.png",
    "orthopedics.png",
    "icu.png",
    "general.png",
  ],
  live: "https://clinical-calculators.vercel.app/",
  github: "https://github.com/jjingofarouk/clinical-calculators",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.expo,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.mui,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Clinical Calculators: Precision for Healthcare
      </TypographyP>
      <TypographyP className="font-mono">
        Clinical Calculators is a React Native mobile app designed for healthcare professionals. With over 90 specialized calculators across multiple medical specialties, it delivers accurate, real-time clinical insights in a user-friendly, performant interface, empowering clinicians to make informed decisions on the go.
      </TypographyP>
      <ProjectsLinks live="https://clinical-calculators.vercel.app/" repo="https://github.com/jjingofarouk/clinical-calculators" />
      <TypographyH3 className="my-4 mt-8">Home Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        The app’s home screen offers a dynamic dashboard with quick access to specialty categories, a powerful search feature, and personalized favorites, enhancing clinical efficiency.
      </p>
      <SlideShow images={["/assets/projects-screenshots/clinical-calculators/home.png"]} />
      <TypographyH3 className="my-4 mt-8">Search & Favorites</TypographyH3>
      <p className="font-mono mb-2">
        A custom search feature allows quick access to calculators by name or specialty. The favorites system, powered by AsyncStorage, lets users bookmark tools for instant access.
      </p>
      <SlideShow images={["/assets/projects-screenshots/clinical-calculators/search.png", "/assets/projects-screenshots/clinical-calculators/favorites.png"]} />
      <TypographyH3 className="my-4 mt-8">Specialty Calculators</TypographyH3>
      <p className="font-mono mb-2">
        The app covers specialties like cardiovascular, neurology, and more, with precise tools for risk scoring, diagnostics, and patient assessment.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Cardiovascular: ASCVD Risk, CHADSVASC, HASBLED</li>
        <li>Neurology: Glasgow Coma Scale, NIH Stroke Scale</li>
        <li>Gastroenterology: Child-Pugh Score, FIB-4</li>
        <li>Nephrology: eGFR, Creatinine Clearance</li>
        <li>Obstetrics: Due Date, Apgar Score</li>
        <li>Pulmonary: BODE Index, CURB-65</li>
        <li>Orthopedics: Fracture Risk Assessment</li>
        <li>ICU: APACHE, SOFA Scores</li>
        <li>General: BMR, Caloric Needs</li>
      </ul>
      <SlideShow images={["/assets/projects-screenshots/clinical-calculators/cardiovascular.png", "/assets/projects-screenshots/clinical-calculators/neurology.png"]} />
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with React Native and Expo for cross-platform support. React Navigation enables seamless navigation, while React Native Paper, MUI, and Tailwind CSS create a modern UI. Reanimated and Gesture Handler deliver smooth animations, and AsyncStorage ensures offline data persistence. Chart Kit and SVG visualizations enhance complex calculators.
      </p>
      <SlideShow images={["/assets/projects-screenshots/clinical-calculators/home.png"]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Clinical Calculators is a powerful, accessible tool for clinicians, showcasing expertise in building complex, user-centric mobile apps with React Native.
      </p>
    </div>
  ),
};
