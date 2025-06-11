import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const BloodMatch = {
  id: "bloodmatch",
  category: "Healthcare",
  title: "BloodMatch",
  src: "/assets/projects-screenshots/bloodmatch/home.png",
  screenshots: ["home.png", "donor-search.png", "request-form.png", "map-view.png"],
  live: "https://bloodmatch.vercel.app",
  github: "https://github.com/jjingofarouk/bloodmatch",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactLeaflet,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.mongodb,
      PROJECT_SKILLS.express,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        BloodMatch = Save Lives with Connection
      </TypographyP>
      <TypographyP className="font-mono">
        BloodMatch is a React-based platform connecting blood donors with those in need. Featuring a geo-powered map and a vibrant UI (#b91c1c to #fee2e2), it streamlines donations with real-time matching and secure data handling.
      </TypographyP>
      <ProjectsLinks live="https://bloodmatch.vercel.app" repo="https://github.com/jjingofarouk/bloodmatch" />
      <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
      <p className="font-mono mb-2">
        A bold home page invites users to search for donors or request blood, styled with Tailwind CSS and a lifesaving aesthetic.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Donor Search</TypographyH3>
      <p className="font-mono mb-2">
        Find donors by blood type and location with real-time filters, backed by MongoDB for fast, secure queries.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/donor-search.png`]} />
      <TypographyH3 className="my-4 mt-8">Request Form</TypographyH3>
      <p className="font-mono mb-2">
        Submit urgent blood requests with a simple form, featuring validation and instant notifications to nearby donors.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/request-form.png`]} />
      <TypographyH3 className="my-4 mt-8">Map View</TypographyH3>
      <p className="font-mono mb-2">
        Locate donors on an interactive map using React-Leaflet, with custom markers for a seamless, mobile-friendly experience.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/map-view.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        BloodMatch is built to save lives through efficient, secure connections.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Geo-based donor matching</li>
        <li>Real-time blood request system</li>
        <li>Interactive map with donor locations</li>
        <li>Secure data with MongoDB and Express</li>
        <li>Responsive, accessible UI</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Developed with React 18, TypeScript, and Tailwind CSS, BloodMatch uses React-Leaflet for mapping and a Node.js/Express backend with MongoDB for real-time data.
      </p>
      <SlideShow images={[`${BASE_PATH}/bloodmatch/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        BloodMatch bridges the gap between donors and recipients. Join the lifesaving network today!
      </p>
    </div>
  ),
};
