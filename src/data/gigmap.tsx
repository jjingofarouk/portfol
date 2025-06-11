import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const GigMap = {
  id: "gigmap",
  category: "Freelance Tech",
  title: "GigMap",
  src: "/assets/projects-screenshots/gigmap/home.png",
  screenshots: [
    "home.png",
    "map-view.png",
    "freelancer-profile.png",
    "create-pin.png",
    "search-filters.png",
  ],
  live: "https://gigmap.vercel.app",
  github: "https://github.com/jjingofarouk/gigmap",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactLeaflet,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        GigMap = Connect Freelancers Worldwide
      </TypographyP>
      <TypographyP className="font-mono">
        GigMap is a React-based PWA that transforms freelance networking by pinning talent on an interactive global map. Powered by OpenStreetMap and React-Leaflet, it offers a sleek, gradient-driven UI (#9333ea to #f472b6) for freelancers to showcase skills and connect with clients, blending precision with a vibrant, mobile-first design.
      </TypographyP>
      <ProjectsLinks live="https://gigmap.vercel.app" repo="https://github.com/jjingofarouk/gigmap" />
      <TypographyH3 className="my-4 mt-8">Interactive Map</TypographyH3>
      <p className="font-mono mb-2">
        Explore freelancers’ locations on a dynamic map with custom markers, offering profile previews on click and smooth navigation via React-Leaflet.
      </p>
      <SlideShow images={[`${BASE_PATH}/gigmap/map-view.png`]} />
      <TypographyH3 className="my-4 mt-8">Freelancer Profiles</TypographyH3>
      <p className="font-mono mb-2">
        Detailed profiles highlight skills, portfolios, and reviews in a gradient-styled layout, with embedded maps for location context, optimized for all devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/gigmap/freelancer-profile.png`]} />
      <TypographyH3 className="my-4 mt-8">Profile Creation</TypographyH3>
      <p className="font-mono mb-2">
        A multi-step form guides freelancers to add details, skills, and geolocation, featuring real-time validation and Framer Motion animations for a seamless onboarding experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/gigmap/create-pin.png`]} />
      <TypographyH3 className="my-4 mt-8">Search & Filters</TypographyH3>
      <p className="font-mono mb-2">
        Find talent fast with keyword search and filters for skills, location, and availability, backed by Firebase for real-time results.
      </p>
      <SlideShow images={[`${BASE_PATH}/gigmap/search-filters.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        GigMap is built for scalability and accessibility, empowering freelancers with a global platform to shine.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Geolocation-based talent discovery</li>
        <li>Dynamic profile creation and management</li>
        <li>Real-time search and filtering</li>
        <li>Mobile-first PWA with offline support</li>
        <li>Secure data handling via Firebase</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Crafted with React 18, TypeScript, and Tailwind CSS, GigMap uses React-Leaflet for mapping, Framer Motion for animations, and a Node.js/Express backend with Firebase for secure, real-time data management.
      </p>
      <SlideShow images={[`${BASE_PATH}/gigmap/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        GigMap is your gateway to global freelance opportunities. Pin your skills and start connecting today!
      </p>
    </div>
  ),
};
