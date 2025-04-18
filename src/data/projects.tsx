import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Use Material UI's icon library directly:

// React Icons
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiRedux,
  SiCss3,
  SiGit,
  SiNpm,
  SiGraphql,
  SiRust,
  SiKubernetes,
  SiDeno,
  SiSvelte,
  SiAstro,
  SiBun,
  SiJest,
  SiMocha,
  SiCypress,
  SiRabbitmq,
  SiTerraform,
  SiFastapi,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava, FaAws } from "react-icons/fa";

// Base Path for Assets
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongodb: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  gsap: { title: "GSAP", bg: "black", fg: "white", icon: "" },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },

  // Newly Added Skills
  redux: { title: "Redux", bg: "black", fg: "white", icon: <SiRedux /> },
  css: { title: "CSS", bg: "black", fg: "white", icon: <SiCss3 /> },
  git: { title: "Git", bg: "black", fg: "white", icon: <SiGit /> },
  npm: { title: "NPM", bg: "black", fg: "white", icon: <SiNpm /> },
  graphql: { title: "GraphQL", bg: "black", fg: "white", icon: <SiGraphql /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  materialUI: {
    title: "materialUI",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  rust: { title: "Rust", bg: "black", fg: "white", icon: <SiRust /> },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  deno: { title: "Deno", bg: "black", fg: "white", icon: <SiDeno /> },
  svelte: { title: "Svelte", bg: "black", fg: "white", icon: <SiSvelte /> },
  astro: { title: "Astro", bg: "black", fg: "white", icon: <SiAstro /> },
  bun: { title: "Bun", bg: "black", fg: "white", icon: <SiBun /> },
  jest: { title: "Jest", bg: "black", fg: "white", icon: <SiJest /> },
  mocha: { title: "Mocha", bg: "black", fg: "white", icon: <SiMocha /> },
  cypress: { title: "Cypress", bg: "black", fg: "white", icon: <SiCypress /> },
  rabbitmq: {
    title: "RabbitMQ",
    bg: "black",
    fg: "white",
    icon: <SiRabbitmq />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
  go: { title: "Go", bg: "black", fg: "white", icon: <SiGit /> },
  java: { title: "Java", bg: "black", fg: "white", icon: <FaJava /> },
  aws: { title: "AWS", bg: "black", fg: "white", icon: <FaAws /> },
  nextdotjs: {
    title: "Next.js (alt)",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "carewave-doctor",
    category: "telemedicine platform",
    title: "CareWaveDoctor",
    src: "/assets/projects-screenshots/carewave/carewave.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.materialUI,
        PROJECT_SKILLS.redux,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongodb,
        PROJECT_SKILLS.socketio,
      ],
    },
    live: "https://carewave-doctor.vercel.app/",
    github: "https://github.com/jjingofarouk/CareWave_Doctors",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CareWaveDoctor: Empowering Physicians in Telemedicine
          </TypographyP>
          <TypographyP className="font-mono">
            CareWaveDoctor is a comprehensive telemedicine platform that enables
            doctors to conduct virtual consultations, manage patient records,
            and schedule appointments seamlessly. Designed with a user-friendly
            interface, it ensures efficient and effective patient care delivery
            in a digital environment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            A centralized dashboard providing an overview of upcoming
            appointments, patient messages, and quick access to essential
            features.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carewave-doctor/dashboard.png`,
              `${BASE_PATH}/carewave-doctor/appointments.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Patient Management</TypographyH3>
          <p className="font-mono mb-2">
            Access and manage detailed patient profiles, including medical
            history, ongoing treatments, and previous consultation notes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carewave-doctor/patient-list.png`,
              `${BASE_PATH}/carewave-doctor/patient-profile.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Telemedicine Sessions
          </TypographyH3>
          <p className="font-mono mb-2">
            Conduct secure video consultations with patients, featuring
            real-time chat and file sharing capabilities.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carewave-doctor/video-call.png`,
              `${BASE_PATH}/carewave-doctor/chat.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Appointment Scheduling
          </TypographyH3>
          <p className="font-mono mb-2">
            Manage your availability and allow patients to book appointments
            based on your schedule, with automated reminders and notifications.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carewave-doctor/schedule.png`,
              `${BASE_PATH}/carewave-doctor/appointment-details.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "carewave-patients",
    category: "telemedicine platform",
    title: "CareWavePatients",
    src: "/assets/projects-screenshots/carewave/carewave.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts, // TypeScript
        PROJECT_SKILLS.next, // Next.js
        PROJECT_SKILLS.chakra, // Chakra UI
        PROJECT_SKILLS.reactQuery, // React Query
        PROJECT_SKILLS.firebase, // Firebase
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.prisma, // Prisma ORM
        PROJECT_SKILLS.python, // Python
        PROJECT_SKILLS.postgres, // PostgreSQL
        PROJECT_SKILLS.socketio, // Socket.IO
      ],
    },
    live: "https://carewave-patients.vercel.app/", // Hypothetical live URL
    github: "https://github.com/jjingofarouk/CareWave_Patients",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CareWavePatients = Your Health, Your Way
          </TypographyP>
          <TypographyP className="font-mono">
            CareWavePatients is a telemedicine app built for patients to connect
            with doctors anytime, anywhere. Book appointments, join video
            consultations, manage prescriptions, and track your health—all from
            your phone. Take control of your care with ease and convenience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Book Appointments</TypographyH3>
          <p className="font-mono mb-2">
            Schedule virtual visits with your doctor at a time that works for
            you, with a simple and intuitive booking system.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/book-appointment.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Video Consultations</TypographyH3>
          <p className="font-mono mb-2">
            Connect face-to-face with your doctor through secure, real-time
            video calls powered by Socket.IO.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/video-consultation.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Health Records</TypographyH3>
          <p className="font-mono mb-2">
            View your medical history, test results, and doctor notes in one
            secure place, accessible anytime.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/health-records.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Prescriptions</TypographyH3>
          <p className="font-mono mb-2">
            Receive and manage digital prescriptions from your doctor, with
            options to send them to your pharmacy.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/prescriptions.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Health Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Monitor your upcoming appointments, recent visits, and health
            updates from a personalized dashboard.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/dashboard.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Notifications</TypographyH3>
          <p className="font-mono mb-2">
            Stay on top of your care with real-time reminders for appointments
            and medication, powered by Firebase.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/carewave-patients/notifications.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "mediq",
    category: "Health Tool",
    title: "MediQ",
    src: "/assets/projects-screenshots/mediq/home.png",
    screenshots: ["home.png", "searches.png", "results.png"],
    live: "https://mediq.vercel.app/",
    github: "https://github.com/jjingofarouk/drug-interaction-checker",
    skills: {
      frontend: [
        PROJECT_SKILLS.js, // Modern JavaScript (ES6+)
        PROJECT_SKILLS.react, // React 18 (replacing Next.js for accuracy)
        PROJECT_SKILLS.css, // CSS3 for custom styling
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js (for development environment)
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            MediQ = Safety + Simplicity
          </TypographyP>
          <TypographyP className="font-mono">
            MediQ is a React-based tool that lets you quickly
            check for potential interactions between medications. Search for two
            drugs, get detailed results, and stay informed—all in a clean,
            user-friendly interface. Your health, made simple.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
          <p className="font-mono mb-2">
            Start with a straightforward interface designed to get you checking
            drug interactions in seconds.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/mediq/home.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Search Interface</TypographyH3>
          <p className="font-mono mb-2">
            Type in medication names and get real-time autocomplete suggestions
            from a comprehensive drug database.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/mediq/searches.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Interaction Results</TypographyH3>
          <p className="font-mono mb-2">
            View detailed interaction reports, including severity levels and
            alternative suggestions, all clearly presented.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/mediq/results.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Enjoy a fast, secure, and mobile-responsive experience with no
            personal data stored—just pure functionality.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Advanced search with smart suggestions</li>
            <li>Comprehensive interaction analysis</li>
            <li>Optimized performance with minimal load times</li>
            <li>Privacy-focused design with HTTPS encryption</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Technical Highlights
          </TypographyH3>
          <p className="font-mono mb-2">
            Built with React 18, this app utilizes modern JavaScript, React
            Hooks, and a local JSON database for efficient data handling.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/mediq/home.png`]} // Reuse home image as placeholder
          />

          <p className="font-mono mb-2 mt-5">
            Whether you’re a patient or a curious learner, MediQ
             is your go-to tool for understanding medication safety.
          </p>
        </div>
      );
    },
  },
  {
    id: "zano",
    category: "E-commerce",
    title: "Zano!",
    src: "/assets/projects-screenshots/zano/home_zano.jpg",
    screenshots: ["home_zano.jpg"],
    live: "https://zanoug.vercel.app/",
    github: "https://github.com/jjingofarouk/Ecommerce-React",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts, // TypeScript
        PROJECT_SKILLS.next, // Next.js
        PROJECT_SKILLS.aceternity, // Aceternity UI 
        PROJECT_SKILLS.tailwind, // Tailwind CSS
      ],
      backend: [
        PROJECT_SKILLS.sanity, // Sanity CMS for product management
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Zano! = Step Into Style
          </TypographyP>
          <TypographyP className="font-mono">
            Zano! is your go-to online shoe shop, bringing you the latest kicks
            with a sleek, modern vibe. Built with smooth animations and a
            user-friendly design, browsing for your next pair feels as good as
            wearing them.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <p className="font-mono mb-2 mt-8">
            Hit the landing page and find trending styles, exclusive deals, and
            a curated selection of shoes for every occasion.
          </p>
          <SlideShow images={[`${BASE_PATH}/zano/home_zano.jpg`]} />

          <TypographyH3 className="my-4 mt-8">Shop</TypographyH3>
          <p className="font-mono mb-2">
            Explore a wide range of shoes—sneakers, boots, sandals, and more.
            Filter by size, style, or brand to find your perfect fit.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/zano/shop.jpg`,
              `${BASE_PATH}/zano/product.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>
          <p className="font-mono mb-2">
            Powered by Sanity CMS, Zano! keeps the inventory fresh and dynamic,
            with real-time updates on stock, styles, and deals.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/zano/shoe1.png`,
              `${BASE_PATH}/zano/shoe2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Cart & Checkout</TypographyH3>
          <p className="font-mono mb-2">
            Add your favorites to the cart and breeze through checkout—Zano!
            makes shopping fast, secure, and stylish.
          </p>
          <SlideShow images={[`${BASE_PATH}/zano/cart.png`]} />

          <p className="font-mono mb-2 my-8">
            Scoring high on performance and design, Zano! delivers a top-tier
            shopping experience. Whether you’re after the latest drop or a
            timeless classic, step into Zano! and find your stride.
          </p>
        </div>
      );
    },
  },

  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/home_portfolio.png",
    screenshots: ["home_portfolio.png"],
    live: "https://www.jjingofarouk.xyz",
    github: "https://github.com/jjingofarouk/portfol",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/home_portfolio.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/ssuubi.jpg`,
              `${BASE_PATH}/portfolio/ddxpro.jpg`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
{
  id: "matatu",
  category: "Transport Tech",
  title: "Matatu Tracker",
  src: "/assets/projects-screenshots/matatu/home.png",
  screenshots: ["home.png", "admin.png", "tracking.png", "booking.png"],
  live: "https://matatu-tracker.vercel.app/",
  github: "https://github.com/jjingofarouk/matatu-tracker",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.firebase,
      PROJECT_SKILLS.mui,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.firebase,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Matatu Tracker = Navigate Uganda’s Roads Like a Star
        </TypographyP>
        <TypographyP className="font-mono">
          Matatu Tracker is a React-based Progressive Web App that brings order to Uganda’s bustling minibus scene. Track buses in real-time, book tickets on the fly, and manage fleets with a cosmic, mobile-first interface. From passengers to admins, it’s your warp-speed ticket to smarter transit.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Passenger Hub</TypographyH3>
        <p className="font-mono mb-2">
          Land on a sleek dashboard to find nearby buses, check live ETAs, and book tickets in seconds—perfect for Uganda’s on-the-go commuters.
        </p>
        <SlideShow images={[`${BASE_PATH}/matatu/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Admin Command Center</TypographyH3>
        <p className="font-mono mb-2">
          Admins steer the mission: add users, assign roles (Driver, Conductor, Supervisor), suspend accounts, or delete users via a Material-UI-powered dashboard that’s as smooth as a lunar orbit.
        </p>
        <SlideShow images={[`${BASE_PATH}/matatu/admin.png`]} />
        <TypographyH3 className="my-4 mt-8">Real-Time Tracking</TypographyH3>
        <p className="font-mono mb-2">
          Drivers beam live location updates to Firestore, letting passengers track buses and supervisors monitor fleets with stellar precision.
        </p>
        <SlideShow images={[`${BASE_PATH}/matatu/tracking.png`]} />
        <TypographyH3 className="my-4 mt-8">Ticket Booking</TypographyH3>
        <p className="font-mono mb-2">
          Passengers secure seats with a tap, while conductors manage bookings—all synced in real-time for a seamless ride.
        </p>
        <SlideShow images={[`${BASE_PATH}/matatu/booking.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          Built for Uganda’s transport chaos, this PWA is fast, secure, and offline-capable, scaling for a pilot of 5–10 vehicles with cosmic efficiency.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Real-time bus tracking with Firebase Firestore</li>
          <li>Role-based access for Admins, Drivers, Passengers, and more</li>
          <li>Secure user management via Cloud Functions</li>
          <li>Mobile-first PWA with offline support and push notifications</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          Powered by React 18, Firebase (Authentication, Firestore, Cloud Functions), and Material-UI, with Tailwind CSS for a polished look. Cloud Functions ensure secure admin tasks, while the PWA setup delivers app-like performance on any device.
        </p>
        <SlideShow images={[`${BASE_PATH}/matatu/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          Matatu Tracker transforms Uganda’s minibus maze into a digital constellation. Hop aboard and explore the future of transit!
        </p>
      </div>
    );
  },
}
];
export default projects;
