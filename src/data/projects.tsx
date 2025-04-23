import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiCypress,
  SiDeno,
SiNpm,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFontawesome,
  SiGoogletranslate,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMocha,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiRust,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiTerraform,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiYoutube,
} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
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
 expo: { title: "Expo", bg: "black", fg: "white", icon: <SiJavascript /> },
 jquery: { title: "jQuery", bg: "black", fg: "white", icon: <SiJavascript /> },
  gemini: { title: "Gemini API", bg: "black", fg: "white", icon: <SiPython /> },
  reactNavigation: { title: "React Navigation", bg: "black", fg: "white", icon: <SiReactrouter /> },
  reanimated: { title: "React Native Reanimated", bg: "black", fg: "white", icon: <SiReact /> },
  gestureHandler: { title: "Gesture Handler", bg: "black", fg: "white", icon: <SiReact /> },
  reactNativePaper: { title: "React Native Paper", bg: "black", fg: "white", icon: <SiReact /> },
  asyncStorage: { title: "AsyncStorage", bg: "black", fg: "white", icon: <SiReact /> },
  chartKit: { title: "Chart Kit", bg: "black", fg: "white", icon: <SiReact /> },
  vectorIcons: { title: "Vector Icons", bg: "black", fg: "white", icon: <SiReact /> },
  lucide: { title: "Lucide Icons", bg: "black", fg: "white", icon: <SiReactrouter /> },
chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  mui: {
    title: "Material-UI",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  html: { title: "HTML", bg: "black", fg: "white", icon: <SiHtml5 /> },
  fontAwesome: { title: "Font Awesome", bg: "black", fg: "white", icon: <SiFontawesome /> },
  flask: { title: "Flask", bg: "black", fg: "white", icon: <SiFlask /> },
  transformers: { title: "Hugging Face Transformers", bg: "black", fg: "white", icon: <SiMongodb /> },
  sentenceTransformers: { title: "Sentence Transformers", bg: "black", fg: "white", icon: <SiMongodb /> },
  googletrans: { title: "Google Translate", bg: "black", fg: "white", icon: <SiGoogletranslate /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  bootstrap: { title: "Bootstrap", bg: "black", fg: "white", icon: <SiBootstrap /> },
  ytDlp: { title: "yt-dlp", bg: "black", fg: "white", icon: <SiYoutube /> },
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
reactRouter: {
    title: "React Router",
    bg: "black",
    fg: "white",
    icon: <SiReactrouter />,
  },
lucideReact: {
    title: "Lucide React",
    bg: "black",
    fg: "white",
    icon: <SiReactrouter />,
  },
reactSpring: {
    title: "React Spring",
    bg: "black",
    fg: "white",
    icon: <SiReactrouter />,
  },
  styledComponents: {
    title: "Styled Components",
    bg: "black",
    fg: "white",
    icon: <SiStyledcomponents />,
  },
  axios: {
    title: "Axios",
    bg: "black",
    fg: "white",
    icon: <SiAxios />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
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
    icon: <SiFirebase />,
  },

  // Newly Added Skills
  redux: { title: "Redux", bg: "black", fg: "white", icon: <SiRedux /> },
  css: { title: "CSS", bg: "black", fg: "white", icon: <SiCss3 /> },
  git: { title: "Git", bg: "black", fg: "white", icon: <SiRedux /> },
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
    id: "ssuubi",
    category: "Mental Health Tech",
    title: "Ssuubi Chatbot",
    src: "/assets/projects-screenshots/ssuubi/home.png",
    screenshots: ["home.png", "chat.png", "mood.png", "crisis.png"],
    live: "https://ssuubi-mental-health-bot.onrender.com",
    github: "https://github.com/jjingofarouk/ssuubi-mental-health-bot",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.fontAwesome,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.transformers,
        PROJECT_SKILLS.sentenceTransformers,
        PROJECT_SKILLS.googletrans,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Ssuubi = Your Empathetic Mental Health Companion
          </TypographyP>
          <TypographyP className="font-mono">
            Ssuubi is a Flask-powered mental health chatbot that delivers compassionate, intent-driven responses with a sleek, dark-mode UI inspired by clinical precision and cosmic calm. Built to support users through anxiety, depression, or crisis, it leverages AI to detect emotions and provide tailored guidance, reflecting my expertise in medical-tech innovation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Conversational Core</TypographyH3>
          <p className="font-mono mb-2">
            Engage in real-time chats with Ssuubi, which uses Hugging Face models to analyze sentiments and intents, delivering responses from a curated JSON library—think of it as a digital therapist with a teal-accented touch.
          </p>
          <SlideShow images={[`${BASE_PATH}/ssuubi/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Mood Check Interface</TypographyH3>
          <p className="font-mono mb-2">
            Select your mood (e.g., 😴 Tired, 😔 Not Great) via intuitive buttons, triggering personalized replies that validate your emotions with clinical empathy.
          </p>
          <SlideShow images={[`${BASE_PATH}/ssuubi/mood.png`]} />
          <TypographyH3 className="my-4 mt-8">Crisis Response System</TypographyH3>
          <p className="font-mono mb-2">
            For urgent messages like “I can’t go on,” Ssuubi activates crisis mode, displaying red-background alerts with resources like 988 and Text HOME to 741741, ensuring immediate support.
          </p>
          <SlideShow images={[`${BASE_PATH}/ssuubi/crisis.png`]} />
          <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
          <p className="font-mono mb-2">
            The responsive chat UI, with typing indicators and a sidebar for history and resources, offers a seamless experience on mobile and desktop, wrapped in a dark `#202123` theme with `#10A37F` accents.
          </p>
          <SlideShow images={[`${BASE_PATH}/ssuubi/chat.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Designed for mental health support, Ssuubi combines AI precision with a user-centric interface, scalable for broader deployment with a nod to my medical-tech roots.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Intent detection for anxiety, depression, sleep issues, and more</li>
            <li>Real-time crisis detection with urgent resource links</li>
            <li>In-memory context storage for lightweight operation</li>
            <li>Multilingual support via Google Translate</li>
            <li>Responsive, dark-mode UI with Tailwind CSS</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            Built with Flask, Python 3.12, and Hugging Face models (`distilbert-base-uncased` for sentiment, `all-MiniLM-L6-v2` for embeddings), Ssuubi uses Tailwind CSS and Font Awesome for a polished frontend. In-memory storage eliminates database needs, while regex patterns and JSON responses ensure robust intent handling.
          </p>
          <SlideShow images={[`${BASE_PATH}/ssuubi/home.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            Ssuubi is your cosmic guide through mental health challenges. Connect and find support today!
          </p>
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
            pressing each keycap reveals a skill in a goofy way. It's like
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
            This site's not just a portfolio — it's a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "mininews",
    category: "News Aggregation",
    title: "MiniNews",
    src: "/assets/projects-screenshots/mininews/home.png",
    screenshots: ["home.png", "filters.png", "article.png", "saved.png"],
    live: "https://www.mangunews.vercel.app", // Replace with actual live link, e.g., "https://mininews.vercel.app"
    github: "https://github.com/jjingofarouk/MiniNews",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactRouter,
        PROJECT_SKILLS.styledComponents,
        PROJECT_SKILLS.axios,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            MiniNews = Your Cosmic News Portal
          </TypographyP>
          <TypographyP className="font-mono">
            MiniNews is a React-powered news aggregator that beams global headlines to your screen with a sleek, black-and-white UI inspired by Grok and ChatGPT. Filter by category, country, or source, search for breaking stories, and save articles for later—all with a nod to clinical precision from my medical roots.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Stellar Headlines Grid</TypographyH3>
          <p className="font-mono mb-2">
            Land on a responsive grid of headlines, each card pulsing with images, titles, and snippets. It’s like flipping through a digital newspaper, but make it futuristic.
          </p>
          <SlideShow images={[`${BASE_PATH}/mininews/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Hyperdrive Filters</TypographyH3>
          <p className="font-mono mb-2">
            Zoom through news with filters for categories (business, tech), countries, languages, and sources. Powered by a slick UI, it’s as intuitive as a stethoscope.
          </p>
          <SlideShow images={[`${BASE_PATH}/mininews/filters.png`]} />
          <TypographyH3 className="my-4 mt-8">Article Deep Dive</TypographyH3>
          <p className="font-mono mb-2">
            Click a headline to explore full articles (well, as full as NewsAPI’s free tier allows). Clean typography and subtle animations keep you locked in.
          </p>
          <SlideShow images={[`${BASE_PATH}/mininews/article.png`]} />
          <TypographyH3 className="my-4 mt-8">Saved Articles Vault</TypographyH3>
          <p className="font-mono mb-2">
            Bookmark your favorite stories with a tap. The “Saved” section is your personal news archive, ready for a quick revisit.
          </p>
          <SlideShow images={[`${BASE_PATH}/mininews/saved.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Built for news junkies, MiniNews delivers a fast, responsive experience with a medical-tech twist, reflecting my dual expertise.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Dynamic headline grid with pagination</li>
            <li>Advanced filtering by category, country, and source</li>
            <li>Real-time search with keyword matching</li>
            <li>Local storage for saving articles</li>
            <li>Minimalistic UI with smooth transitions</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            Crafted with React 18, styled-components for pixel-perfect styling, and Axios for NewsAPI calls. React Router powers seamless navigation, while the Inter font adds a clinical yet modern vibe. The Context API keeps state management as smooth as a surgical procedure.
          </p>
          <SlideShow images={[`${BASE_PATH}/mininews/home.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            MiniNews is your warp-speed gateway to global stories. Dive in and explore the news universe!
          </p>
          <TypographyH3 className="my-4 mt-8">Note on NewsAPI</TypographyH3>
          <p className="font-mono mb-2">
            MiniNews uses NewsAPI’s free tier, which caps requests at 100/day and limits article content. If headlines don’t load, the API’s limit may be hit. Swap in a paid key or RSS feeds for uninterrupted access.
          </p>
        </div>
      );
    },
  },
  {
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Clinical Calculators: Precision for Healthcare
          </TypographyP>
          <TypographyP className="font-mono">
            Clinical Calculators is a React Native mobile app designed for healthcare professionals. With over 90 specialized calculators across multiple medical specialties, it delivers accurate, real-time clinical insights in a user-friendly, performant interface, empowering clinicians to make informed decisions on the go.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
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
      );
    },
  },
  {
    id: "matatu",
    category: "Transport Tech",
    title: "Matatu Tracker",
    src: "/assets/projects-screenshots/matatu/home.jpg",
    screenshots: ["home.jpg", "admin.png", "tracking.png", "booking.jpg"],
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
          <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
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
          <SlideShow images={[`${BASE_PATH}/matatu/booking.jpg`]} />
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
          <SlideShow images={[`${BASE_PATH}/matatu/home.jpg`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            Matatu Tracker transforms Uganda’s minibus maze into a digital constellation. Hop aboard and explore the future of transit!
          </p>
        </div>
      );
    },
  },
  {
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
    live: "https://dwaliro.vercel.app", // Replace with actual live link
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Dwaliro: Your Gateway to Clinical Research
          </TypographyP>
          <TypographyP className="font-mono">
            Dwaliro is my love letter to medical tech—a React-powered web app that makes exploring clinical trials from ClinicalTrials.gov feel like a breeze. Named after the Luganda word for "hospital," it’s got a sleek, hospital-inspired vibe with dark teal (#1A4A4F) headers and soft beige (#F5F1E9) backgrounds. Drawing on my medical background, I built Dwaliro to be intuitive, responsive, and packed with features for researchers, doctors, and curious folks alike. From real-time data to animated analytics, it’s a clean, professional tool that’s as precise as a surgeon’s scalpel.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
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
      );
    },
  },
{
  id: "osler",
  category: "Health Tool",
  title: "Osler Mentor",
  src: "/assets/projects-screenshots/osler/home.png",
  screenshots: ["home.png", "chat.png", "results.png"],
  live: "https://oslermentor.onrender.com/",
  github: "https://github.com/jjingofarouk/osler",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.jquery,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.bootstrap,
    ],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.flask,
      PROJECT_SKILLS.gemini,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Osler Mentor = Clinical Expertise + Technical Innovation
        </TypographyP>
        <TypographyP className="font-mono">
          Osler Mentor is a Flask-based Progressive Web App (PWA) I developed to provide clinical medical guidance through a virtual Ugandan clinician, Dr. Osler. Powered by the Gemini API, it delivers real-time, scenario-based medical responses in a responsive, offline-capable chat interface, showcasing my expertise in Python, Flask, and front-end development.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
        <p className="font-mono mb-2">
          A sleek, dark-themed interface welcomes users to engage with Dr. Osler, built with Bootstrap and custom CSS for a polished, responsive design.
        </p>
        <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
        <p className="font-mono mb-2">
          Using jQuery and Flask, I crafted a dynamic chat UI with a sticky input bar, ensuring seamless interaction across devices.
        </p>
        <SlideShow images={[`${BASE_PATH}/osler/chat.png`]} />
        <TypographyH3 className="my-4 mt-8">Clinical Guidance</TypographyH3>
        <p className="font-mono mb-2">
          Integrated the Gemini API to deliver tailored, evidence-based clinical responses, leveraging Python for secure API key management.
        </p>
        <SlideShow images={[`${BASE_PATH}/osler/results.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          This PWA combines technical prowess with clinical utility, offering a fast, secure, and accessible experience.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Real-time clinical chat powered by Gemini API</li>
          <li>Progressive Web App with offline support via service workers</li>
          <li>Responsive UI with jQuery and Bootstrap</li>
          <li>Secure backend with Flask and environment management</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          I engineered a robust Flask backend to handle API requests, integrated jQuery for dynamic front-end interactions, and implemented PWA features (manifest, service worker) for a native app-like experience. The app uses secure HTTPS and efficient streaming responses for optimal performance.
        </p>
        <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          Osler Mentor reflects my ability to blend Python-based backend development, AI integration, and modern front-end techniques to create impactful health tools.
        </p>
      </div>
    );
  },
},
{
  id: "solverpro",
  category: "Enterprise Educational Tech",
  title: "SolverPro Enterprise Graphing Platform",
  src: "/assets/projects-screenshots/solverpro/home.png",
  screenshots: ["home.png", "graph.png", "controls.png"],
  live: "https://jjingofarouk.github.io/SolverPro/",
  github: "https://github.com/jjingofarouk/SolverPro",
  skills: {
    frontend: [
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.js,
    ],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          SolverPro Enterprise = Advanced Mathematical Visualization
        </TypographyP>
        <TypographyP className="font-mono">
          SolverPro Enterprise is a professional-grade graphing platform powered by the Desmos API, designed for educational institutions and businesses. It combines sophisticated mathematical visualization with an intuitive UI to deliver a comprehensive solution for plotting, analyzing, and sharing complex equations. With its enterprise-ready design, function library management, and export capabilities, SolverPro transforms complex mathematical concepts into accessible visual representations for students, educators, researchers, and professionals.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Professional Function Library</TypographyH3>
        <p className="font-mono mb-2">
          Manage multiple functions with color-coded organization in the interactive sidebar. Instantly access standard functions (y = x², sin(x), log(x)) or create custom expressions with real-time visualization. Click any function to highlight it in the graph.
        </p>
        <SlideShow images={[`${BASE_PATH}/solverpro/graph.png`]} />
        <TypographyH3 className="my-4 mt-8">Enterprise-Grade Controls</TypographyH3>
        <p className="font-mono mb-2">
          The advanced control panel features precision zooming, workspace management, and export capabilities. Interactive tooltips provide guidance, while the modern UI with subtle animations ensures a premium user experience suitable for professional environments.
        </p>
        <SlideShow images={[`${BASE_PATH}/solverpro/controls.png`]} />
        <TypographyH3 className="my-4 mt-8">Responsive Enterprise Design</TypographyH3>
        <p className="font-mono mb-2">
          Built with a sophisticated responsive architecture, SolverPro Enterprise adapts seamlessly across devices while maintaining its professional appearance. The carefully crafted interface uses modern UI principles with consistent spacing, shadows, and typography to create a premium look and feel.
        </p>
        <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Enterprise Features</TypographyH3>
        <p className="font-mono mb-2">
          SolverPro Enterprise goes beyond basic graphing to deliver a complete solution for mathematical visualization needs:
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Interactive function library with color-coded organization</li>
          <li>Workspace saving and export capabilities for documentation</li>
          <li>Professional UI with intuitive navigation and tooltips</li>
          <li>Responsive design optimized for all devices</li>
          <li>Advanced graph manipulation and visualization tools</li>
          <li>Enterprise-ready architecture for institutional deployment</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Excellence</TypographyH3>
        <p className="font-mono mb-2">
          SolverPro Enterprise leverages modern web technologies with an architecture designed for performance and scalability. The clean, modular codebase ensures easy maintenance and extension, while the optimized Desmos API integration provides powerful mathematical capabilities with minimal overhead. Custom animations and transitions create a polished user experience worthy of enterprise environments.
        </p>
        <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          SolverPro Enterprise: Where mathematical precision meets professional design.
        </p>
        <TypographyH3 className="my-4 mt-8">Integration & Deployment</TypographyH3>
        <p className="font-mono mb-2">
          SolverPro Enterprise is designed for seamless integration into existing educational platforms and corporate environments. With its API-driven architecture based on Desmos v1.10, it can be deployed as a standalone application or embedded within larger systems. Future enterprise roadmap includes enhanced collaboration features, authentication integration, and advanced data export options.
        </p>
      </div>
    );
  },
},
{
  id: "touched-hearts",
  category: "NGO Platform",
  title: "Touched Hearts",
  src: "/assets/projects-screenshots/touched-hearts/home.png",
  screenshots: [
    "home.png",
    "programs.png",
    "stories.png",
    "donate.png",
    "events.png",
    "about.png",
    "gallery.png",
  ],
  live: "https://www.touchedhearts.org/",
  github: "https://github.com/jjingofarouk/touched",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.bootstrap,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.reactRouter,
    ],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Touched Hearts: A React-Powered NGO Platform
        </TypographyP>
        <TypographyP className="font-mono">
          I developed Touched Hearts, a comprehensive web platform for an NGO focused on education, healthcare, and support for communities in East & Central Africa. Using React 19, React Router, and Bootstrap, I built a responsive, accessible site with over 20 pages, dynamic content, and optimized performance to showcase the organization’s impact and engage users effectively.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
        <p className="font-mono mb-2">
          I designed a clean and responsive homepage with Bootstrap. Integrated key CTAs and a modular layout to highlight the NGO’s mission and initiatives.
        </p>
        <SlideShow images={[`${BASE_PATH}/touched-hearts/home.png`, `${BASE_PATH}/touched-hearts/about.png`]} />
        <TypographyH3 className="my-4 mt-8">Programs</TypographyH3>
        <p className="font-mono mb-2">
          I created dedicated pages for programs like education and healthcare using React Router for seamless navigation and reusable components for consistency.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/touched-hearts/programs.png`,
            `${BASE_PATH}/touched-hearts/education.png`,
            `${BASE_PATH}/touched-hearts/healthcare.png`,
          ]}
        />
        <TypographyH3 className="my-4 mt-8">Stories</TypographyH3>
        <p className="font-mono mb-2">
          I implemented dynamic story pages using React Router’s params and a JSON database to enable scalable content updates without a backend.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/touched-hearts/stories.png`, `${BASE_PATH}/touched-hearts/story-detail.png`]}
        />
        <TypographyH3 className="my-4 mt-8">Get Involved</TypographyH3>
        <p className="font-mono mb-2">
          I built intuitive pages for volunteering and partnerships. Optimized user flows with React state management and responsive grids.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/touched-hearts/get-involved.png`, `${BASE_PATH}/touched-hearts/volunteers.png`]}
        />
        <TypographyH3 className="my-4 mt-8">Donate & Events</TypographyH3>
        <p className="font-mono mb-2">
          I developed streamlined donation and event pages, ensuring fast load times and accessibility with modern JavaScript and CSS.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/touched-hearts/donate.png`, `${BASE_PATH}/touched-hearts/events.png`]}
        />
        <TypographyH3 className="my-4 mt-8">Technical Contributions</TypographyH3>
        <p className="font-mono mb-2">
          This project showcases my ability to deliver a feature-rich and performant web app:
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Architected 20+ routes with React Router for efficient navigation</li>
          <li>Built responsive layouts with Bootstrap, achieving cross-device compatibility</li>
          <li>Integrated JSON data for dynamic story rendering, reducing maintenance overhead</li>
          <li>Optimized performance with lazy-loaded images and minimal DOM updates</li>
          <li>Ensured WCAG-compliant accessibility with semantic HTML and ARIA attributes</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          I leveraged React 19’s latest features, React Router for dynamic routing, and Bootstrap for rapid styling. The app uses a JSON-based content system, enabling easy updates without server-side logic.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/touched-hearts/home.png`, `${BASE_PATH}/touched-hearts/gallery.png`]}
        />
        <p className="font-mono mb-2 mt-5 text-center">
          Touched Hearts demonstrates my skills in building scalable, user-focused web applications that meet real-world needs.
        </p>
      </div>
    );
  },
},
  {
    id: "tubesnap",
    category: "Media Downloader",
    title: "TubeSnap",
    src: "/assets/projects-screenshots/tubesnap/home.png",
    screenshots: ["home.png", "download.png", "features.png"],
    live: "https://tubesnap-vko7.onrender.com",
    github: "https://github.com/jjingofarouk/TubeSnap",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.fontAwesome,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.ytDlp,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TubeSnap = Your Cosmic YouTube Downloader
          </TypographyP>
          <TypographyP className="font-mono">
            TubeSnap is a Flask-powered YouTube downloader that snaps videos and audio off the platform with stellar speed and precision. Has a sleek, YouTube-red interface that offers high-quality downloads up to 1080p and audio extraction in MP3 or WAV. Blends my medical-tech finesse with user-centric design. I got inspired to create his tool to more easily download physiology videos. 
          </TypographyP> 
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interstellar Interface</TypographyH3>
          <p className="font-mono mb-2">
            Land on a vibrant, red-accented UI (#FF0000) with a pulsating download button. Enter a YouTube URL, pick your format, and watch TubeSnap work its magic—fast, secure, and ad-free.
          </p>
          <SlideShow images={[`${BASE_PATH}/tubesnap/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Download Command Center</TypographyH3>
          <p className="font-mono mb-2">
            Choose video resolutions (1080p, 720p, 480p, 360p) or extract audio in MP3/WAV. Powered by yt-dlp, downloads are as smooth as a feather! Has real-time feedback via a spinning loader.
          </p>
          <SlideShow images={[`${BASE_PATH}/tubesnap/download.png`]} />
          <TypographyH3 className="my-4 mt-8">Feature Constellation</TypographyH3>
          <p className="font-mono mb-2">
            From high-speed downloads to a responsive feature grid showcasing speed, quality, and security, TubeSnap’s design ensures a seamless experience across devices. has modern hover animations for cosmic flair.
          </p>
          <SlideShow images={[`${BASE_PATH}/tubesnap/features.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Engineered for media enthusiasts. TubeSnap delivers a lightweight, secure, and intuitive platform that helped me improve my expertise in crafting impactful tech solutions at the start of my software career. 
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Video downloads in MP4 up to 1080p</li>
            <li>Audio extraction in MP3 or WAV</li>
            <li>Responsive UI with Bootstrap and Font Awesome</li>
            <li>Fast downloads via yt-dlp</li>
            <li>Safe, ad-free experience with error handling</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            Built with Flask and Python 3.12, TubeSnap leverages yt-dlp for robust downloads. The frontend uses HTML, CSS, Bootstrap, and Font Awesome for a polished, mobile-first UI. Asynchronous fetch ensures smooth file delivery, while the Inter font adds clinical elegance.
          </p>
          <SlideShow images={[`${BASE_PATH}/tubesnap/home.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            TubeSnap is your warp-speed portal to YouTube content. Snap videos and audio with ease!
          </p>
          <TypographyH3 className="my-4 mt-8">Note on Usage</TypographyH3>
          <p className="font-mono mb-2">
            TubeSnap respects YouTube’s terms of service. Use it for personal, non-commercial purposes. Ensure valid URLs and sufficient server capacity for high-quality downloads.
          </p>
        </div>
      );
    },
  }
];
export default projects;
