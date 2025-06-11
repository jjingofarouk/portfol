import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const Dwaliro = {
  id: "dwaliro",
  category: "Medical Tech",
  title: "Dwaliro",
  src: "/assets/projects-screenshots/dwaliro/home.png",
  screenshots: [
    "home.png",
    "trials.png",
    "study-details.png",
    "details.png",
    "details2.png",
    "details3.png",
    "study-design.png",
    "participants.png",
    "interventions.png",
    "locations.png",
    "regulatory.png",
    "results.png",
    "statistics.png",
    "filters.png",
  ],
  live: "https://dwaliro.vercel.app",
  github: "https://github.com/jjingofarouk/dwaliro",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactRouter,
      PROJECT_SKILLS.styledComponents,
      PROJECT_SKILLS.axios,
      PROJECT_SKILLS.reactSpring,
      PROJECT_SKILLS.lucideReact,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Dwaliro: Your Gateway to Clinical Research
      </TypographyP>
      <TypographyP className="font-mono">
        Dwaliro is my love letter to medical tech—a React-powered web app that makes exploring clinical trials from ClinicalTrials.gov feel like a breeze. Named after the Luganda word for "hospital," it’s got a sleek, hospital-inspired vibe with dark teal (#1A4A4F) headers and soft beige (#F5F1E9) backgrounds. Drawing on my medical background, I built Dwaliro to be intuitive, responsive, and packed with features for researchers, doctors, and curious folks alike. From real-time data to animated analytics, it’s a clean, professional tool that’s as precise as a surgeon’s scalpel.
      </TypographyP>
      <ProjectsLinks live="https://dwaliro.vercel.app" repo="https://github.com/jjingofarouk/dwaliro" />
      <TypographyH3 className="my-4 mt-8">Trials Grid</TypographyH3>
      <p className="font-mono mb-2">
        The trials page is where it all starts—a clean, responsive grid of trial cards showing titles, statuses, phases, and quick summaries. It’s built for speed and scale, handling thousands of trials with pagination that keeps things snappy. Think of it as your digital research binder, but way cooler.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/trials.png`]} />
      <TypographyH3 className="my-4 mt-8">Smart Filters</TypographyH3>
      <p className="font-mono mb-2">
        Need to zero in on specific trials? The filters section is your command center. You can slice and dice trials by status (e.g., Recruiting, Completed), phase (e.g., Phase 1, Phase 3), study type, or even keywords with a real-time search bar. The UI is buttery smooth, with dropdowns and toggles that feel natural and responsive, making it easy to find exactly what you’re after. It’s like having a research assistant who never sleeps.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/filters.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Details</TypographyH3>
      <p className="font-mono mb-2">
        Click into a trial, and the Study Details section lays it all out with accordion-style panels. You’ll see the trial’s title, status (with slick badges like “Recruiting”), type, phase, and full timeline—start dates, completion dates, you name it. The description panel dives deep into the trial’s purpose, formatted for easy reading. It’s like having a study’s entire dossier at your fingertips.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/study-details.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Design</TypographyH3>
      <p className="font-mono mb-2">
        Want to know how a trial’s structured? The Study Design component breaks it down: allocation (randomized or not), masking (double-blind, anyone?), model (parallel or crossover), and endpoint classification. Each field pairs with a Lucide-React icon for that extra polish, and a fallback UI handles missing data gracefully. It’s nerdy in the best way.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/study-design.png`]} />
      <TypographyH3 className="my-4 mt-8">Participant Information</TypographyH3>
      <p className="font-mono mb-2">
        The Participant Information section is all about the people in the trial. Animated counters (powered by React-Spring) show enrollment numbers, while cards highlight age ranges and sex. A detailed eligibility criteria block lays out who can join, formatted for quick scanning. It’s perfect for figuring out if a trial fits your research focus.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/participants.png`]} />
      <TypographyH3 className="my-4 mt-8">Trial Interventions</TypographyH3>
      <p className="font-mono mb-2">
        Curious about the treatments? The Interventions section serves up expandable cards for drugs, devices, procedures, or behavioral therapies. Each card details the name, type, status, dosage, and route, with tailored icons (like a pill for drugs) and smooth animations. It’s a clear, interactive way to explore what’s being tested.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/interventions.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Locations</TypographyH3>
      <p className="font-mono mb-2">
        The Locations section maps out where trials are happening, with cards listing facilities, cities, states, and countries. A badge shows the total number of sites, and a subtle click animation adds a tactile feel. It’s a quick way to see the trial’s geographic scope without wading through spreadsheets.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/locations.png`]} />
      <TypographyH3 className="my-4 mt-8">Regulatory Information</TypographyH3>
      <p className="font-mono mb-2">
        Compliance matters, and the Regulatory Information component delivers. It lists the NCT ID, FDA regulation status (with “Yes” or “No” badges), and sponsor, all in a clean, icon-driven layout. This is your go-to for understanding a trial’s oversight and legitimacy.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/regulatory.png`]} />
      <TypographyH3 className="my-4 mt-8">Study Results</TypographyH3>
      <p className="font-mono mb-2">
        The Results section is where trials come full circle, summarizing adverse events, outcomes, and publications. Each result type gets its own icon and detailed text, with a fallback for unpublished trials. It’s a goldmine for evaluating a study’s impact and findings.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/results.png`]} />
      <TypographyH3 className="my-4 mt-8">Hospital-Chic Design</TypographyH3>
      <p className="font-mono mb-2">
        Dwaliro’s design screams modern healthcare—dark teal headers, soft beige backgrounds, and the Inter font give it a clinical yet welcoming feel. Subtle animations and high-contrast text (WCAG-compliant) make it accessible and engaging, like stepping into a high-tech hospital.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Mobile-First Magic</TypographyH3>
      <p className="font-mono mb-2">
        Whether you’re on a phone, tablet, or desktop, Dwaliro’s got you covered. The mobile-first UI adjusts fonts, padding, and layouts dynamically, with touch-friendly controls and smooth transitions. It’s built for researchers on the move.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/mobile.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Dwaliro is designed for anyone diving into clinical trials—doctors, researchers, or patients—offering a robust, user-friendly platform with deep insights and a professional edge.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Dynamic trial grid with pagination and advanced filters</li>
        <li>Comprehensive trial details across eight specialized components</li>
        <li>Animated analytics for enrollment, outcomes, and participant stats</li>
        <li>Real-time data via Firebase and ClinicalTrials.gov API</li>
        <li>Accessible, WCAG-compliant design with fluid animations</li>
        <li>Responsive UI optimized for all devices</li>
        <li>Custom teal-beige theme for a medical aesthetic</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        I built Dwaliro with React 18 and styled-components for a modular, pixel-perfect frontend. React Router keeps navigation seamless, while Axios powers API calls to a Firebase Cloud Functions backend, securely fetching trial data. React-Spring drives slick animations for counters and accordions, and Lucide-React icons add a modern touch. The teal-beige theme, Inter font, and clean code (thanks to ESLint and Prettier) make it a joy to work with.
      </p>
      <SlideShow images={[`${BASE_PATH}/dwaliro/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        Dwaliro blends medical precision with tech innovation—a tool that’s as functional as it is beautiful. Check it out and let’s talk about bringing this energy to your team!
      </p>
      <TypographyH3 className="my-4 mt-8">Note on Data Source</TypographyH3>
      <p className="font-mono mb-2">
        Dwaliro pulls data from ClinicalTrials.gov via Firebase Cloud Functions. Some trials may have incomplete details depending on the API’s response. Future updates could tap into additional data sources for even richer insights.
      </p>
    </div>
  ),
};
