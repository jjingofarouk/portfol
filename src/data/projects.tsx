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
SiTensorflow,
SiApifox,
  SiCypress, 
SiAppstore,
SiChartdotjs, 
SiVercel,
  SiDeno,
SiNpm,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
SiTwilio,
SiMaildotcom,
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
  upstashRedis: { title: "Upstash Redis", bg: "black", fg: "white", icon: <RiNextjsFill /> },
 jquery: { title: "jQuery", bg: "black", fg: "white", icon: <SiJavascript /> },
  gemini: { title: "Gemini API", bg: "black", fg: "white", icon: <SiPython /> },
  reactNavigation: { title: "React Navigation", bg: "black", fg: "white", icon: <SiReactrouter /> },
    reactPDF: { title: "React PDF", bg: "black", fg: "white", icon: <SiReact /> },
    reactIcons: { title: "React Icons", bg: "black", fg: "white", icon: <SiReact /> },
reanimated: { title: "React Native Reanimated", bg: "black", fg: "white", icon: <SiReact /> },
  gestureHandler: { title: "Gesture Handler", bg: "black", fg: "white", icon: <SiReact /> },
    geofire: { title: "GeoFire", bg: "black", fg: "white", icon: <SiFirebase /> },
  twilio: { title: "Twilio", bg: "black", fg: "white", icon: <SiTwilio /> },
  nodemailer: { title: "Node Mailer", bg: "black", fg: "white", icon: <SiMaildotcom /> },
reactNativePaper: { title: "React Native Paper", bg: "black", fg: "white", icon: <SiReact /> },
  asyncStorage: { title: "AsyncStorage", bg: "black", fg: "white", icon: <SiReact /> },
  chartKit: { title: "Chart Kit", bg: "black", fg: "white", icon: <SiReact /> },
  vectorIcons: { title: "Vector Icons", bg: "black", fg: "white", icon: <SiReact /> },
  vercelAnalytics: { title: "Vercel Analytics", bg: "black", fg: "white", icon: <SiVercel /> },
    nextjs: { title: "Next Js ", bg: "black", fg: "white", icon: <SiNextdotjs /> },
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
  reactLeaflet: { title: "React Leaflet", bg: "black", fg: "white", icon: <SiReact /> },
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
postgresql: {
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
heroicons: {
    title: "Hero Icons",
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
  astro: { title: "Astro", bg: "black", fg: "white", icon: <SiJest /> },
  bun: { title: "Bun", bg: "black", fg: "white", icon: <SiFirebase /> },
  jest: { title: "Jest", bg: "black", fg: "white", icon: <SiAxios /> },
  mocha: { title: "Mocha", bg: "black", fg: "white", icon: <SiRust /> },
  cypress: { title: "Cypress", bg: "black", fg: "white", icon: <SiShadcnui /> },
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
    apiintegration: { title: "API Integration", bg: "black", fg: "white", icon: <SiApifox /> },
tensorflow: { title: "Tensor Flow", bg: "black", fg: "white", icon: <SiTensorflow /> },
websocket: { title: "Web Socket", bg: "black", fg: "white", icon: <SiSocketdotio /> },
fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
chartjs: { title: "ChartJs", bg: "black", fg: "white", icon: <SiChartdotjs /> },
pwa: { title: "Progressive Web Application", bg: "black", fg: "white", icon: <SiAppstore /> },
go: { title: "Go", bg: "black", fg: "white", icon: <FaJava /> },
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
  id: "carewave",
  category: "Hospital Management Tech",
  title: "CareWave System",
  src: "/assets/projects-screenshots/carewave/landing.png",
  screenshots: ["landing.png", "clinical.png", "patient.png", "billing.png", "inventory.png"],
  live: "https://carewave-doctor.vercel.app",
  github: "https://github.com/jjingofarouk/CareWave_Doctors",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.materialUI,
      PROJECT_SKILLS.redux,
      PROJECT_SKILLS.firebase,
      PROJECT_SKILLS.tailwindcss,
      PROJECT_SKILLS.chartjs,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.mongodb,
      PROJECT_SKILLS.socketio,
      PROJECT_SKILLS.prisma,
      PROJECT_SKILLS.postgresql,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          CareWave = Your All-in-One Hospital Management Solution
        </TypographyP>
        <TypographyP className="font-mono">
          CareWave is an enterprise-grade hospital management system designed to streamline clinical, administrative, and operational workflows. With a modular architecture and modern tech stack, it empowers healthcare teams with real-time data, secure communication, and advanced analytics, reflecting my expertise in medical-tech innovation.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Clinical Operations</TypographyH3>
        <p className="font-mono mb-2">
          Equip doctors and staff with tools for diagnostics, treatment, and surgical planning via Clinical, Laboratory, Radiology, and Operation Theatre modules, all synced with live patient data.
        </p>
        <SlideShow images={[`${BASE_PATH}/carewave-hospital/clinical.png`]} />
        <TypographyH3 className="my-4 mt-8">Patient Management</TypographyH3>
        <p className="font-mono mb-2">
          Simplify scheduling and engagement with Appointment, Patient, and Queue Management modules, offering intuitive profiles, automated notifications, and efficient queue handling.
        </p>
        <SlideShow images={[`${BASE_PATH}/carewave-hospital/patient.png`]} />
        <TypographyH3 className="my-4 mt-8">Financial Tools</TypographyH3>
        <p className="font-mono mb-2">
          Streamline finances with Accounting, Billing, Claim Management, and Payroll modules, ensuring accurate tracking, insurance processing, and staff compensation.
        </p>
        <SlideShow images={[`${BASE_PATH}/carewave-hospital/billing.png`]} />
        <TypographyH3 className="my-4 mt-8">Resource Optimization</TypographyH3>
        <p className="font-mono mb-2">
          Manage resources efficiently with Inventory, Procurement, Pharmacy, and Substore modules, minimizing waste through robust stock and supply chain controls.
        </p>
        <SlideShow images={[`${BASE_PATH}/carewave-hospital/inventory.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          Built for scalability and security, CareWave transforms healthcare operations with a user-centric design and comprehensive functionality.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Real-time clinical and patient data integration</li>
          <li>Automated appointment and queue management</li>
          <li>Advanced financial and billing tools</li>
          <li>Efficient inventory and procurement systems</li>
          <li>Dynamic reporting and analytics dashboards</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          Powered by React, Node.js, and Express, CareWave uses MongoDB and PostgreSQL for data, Prisma for ORM, and Socket.IO for real-time updates. The frontend shines with Tailwind CSS, Material UI, Redux, and Chart.js for dynamic visuals.
        </p>
        <SlideShow images={[`${BASE_PATH}/carewave-hospital/landing.png`]} />
        <p className="font-mono mb-2 mt-10 text-center">
          CareWave is your hospital’s path to digital efficiency. Explore now and elevate care!
        </p>
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
  id: "free-resume",
  category: "Web Development & Productivity",
  title: "FreeResume",
  src: "/assets/projects-screenshots/free-resume/home.png",
  screenshots: [
    "home.png",
    "resume-builder.png",
    "resume-preview.png",
    "resume-import.png",
    "resume-parser.png",
    "features.png",
    "testimonials.png",
    "faq.png",
    "about.png",
    "contact.png",
    "not-found.png"
  ],
  live: "http://free-resume-indol.vercel.app",
  github: "https://github.com/jjingofarouk/free-resume",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
      PROJECT_SKILLS.heroicons,
      PROJECT_SKILLS.redux,
      PROJECT_SKILLS.reactPDF
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.vercelAnalytics
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          FreeResume: Helping Ugandans Land Their Dream Jobs
        </TypographyP>
        <TypographyP className="font-mono">
          FreeResume is more than a resume builder—it’s a tool to empower Ugandan job seekers to shine. This Next.js 13.4.4 Progressive Web App (PWA) makes crafting professional, ATS-friendly resumes simple and free. With TypeScript 5.0.4 for rock-solid code, Tailwind CSS 3.3.2 for a vibrant purple-blue gradient UI (#6b46c1 to #3b82f6), and Framer Motion 10.12.16 for smooth animations, I built this app to be intuitive, mobile-first, and accessible. Redux Toolkit 1.9.5 handles state, while @react-pdf/renderer 3.1.10 generates polished PDFs. It’s a project born from a passion to level the playing field for job seekers in Uganda.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Welcoming Home Page</TypographyH3>
        <p className="font-mono mb-2">
          The homepage invites users with a clean, gradient design (#6b46c1 to #3b82f6) and a live resume preview that comes to life with AutoTypingResume. Powered by Next.js 13.4.4 and React 18.2.0, it uses Framer Motion for buttery-smooth transitions and @heroicons/react 2.0.18 icons (like DocumentPlusIcon) to guide users, making it a breeze to start building a resume on any device.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Effortless Resume Builder</TypographyH3>
        <p className="font-mono mb-2">
          The Resume Builder is where the magic happens. Users can input their details and see a real-time preview, thanks to @react-pdf/renderer. Tailwind CSS styles a responsive layout, Framer Motion adds subtle animations, and Redux Toolkit keeps everything in sync. TypeScript ensures every field is rock-solid, so users can focus on crafting their story.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/resume-builder.png`, `${BASE_PATH}/free-resume/resume-preview.png`]} />
        <TypographyH3 className="my-4 mt-8">Smart Resume Import & ATS Checker</TypographyH3>
        <p className="font-mono mb-2">
          Got an existing resume? The Import and Parser pages let users upload it and check ATS compatibility. Built with react-contenteditable 3.3.7 for easy edits and Tailwind CSS for a polished look, these pages use gradient buttons (#6b46c1) and @heroicons/react icons (like UploadIcon) to keep things user-friendly and accessible.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/resume-import.png`, `${BASE_PATH}/free-resume/resume-parser.png`]} />
        <TypographyH3 className="my-4 mt-8">Feature Spotlight</TypographyH3>
        <p className="font-mono mb-2">
          The Features page showcases what makes FreeResume special: real-time previews, ATS optimization, and easy PDF downloads. Tailwind CSS and @heroicons/react icons (like CheckCircleIcon) create a vibrant grid, with Framer Motion animations that make exploring the app’s capabilities feel dynamic and engaging.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/features.png`]} />
        <TypographyH3 className="my-4 mt-8">Voices from Uganda</TypographyH3>
        <p className="font-mono mb-2">
          The Testimonials page shares stories from Ugandan users—students, engineers, and educators—who’ve landed interviews with FreeResume. A Tailwind CSS carousel, animated by Framer Motion, uses gradient accents (#3b82f6) and @heroicons/react icons (like HeartIcon) to build trust and connection.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/testimonials.png`]} />
        <TypographyH3 className="my-4 mt-8">Helpful FAQ</TypographyH3>
        <p className="font-mono mb-2">
          The FAQ page answers user questions in a clear, accordion-style format. Styled with Tailwind CSS and @heroicons/react icons (like QuestionMarkCircleIcon), it uses gradient highlights (#6b46c1) to keep the design cohesive and easy to navigate, with TypeScript ensuring reliable data rendering.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/faq.png`]} />
        <TypographyH3 className="my-4 mt-8">Our Mission</TypographyH3>
        <p className="font-mono mb-2">
          The About page tells the story of FreeResume’s mission to empower Ugandan job seekers. With Tailwind CSS styling, Framer Motion animations, and @heroicons/react icons (like UsersIcon), it blends gradient headers (#6b46c1 to #3b82f6) with a warm, approachable tone to inspire users.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/about.png`]} />
        <TypographyH3 className="my-4 mt-8">Get in Touch</TypographyH3>
        <p className="font-mono mb-2">
          The Contact page offers a simple form for user inquiries, built with React 18.2.0 and real-time validation. Tailwind CSS, gradient buttons (#3b82f6), and @heroicons/react icons (like EnvelopeIcon) create a welcoming vibe, with accessible social links (LinkedIn, GitHub) for WCAG compliance.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/contact.png`]} />
        <TypographyH3 className="my-4 mt-8">Graceful Error Handling</TypographyH3>
        <p className="font-mono mb-2">
          A custom 404 page keeps things friendly with a gradient button (#6b46c1 to #3b82f6) and a “Back to Home” link. Built with Next.js routing and Tailwind CSS, it ensures users never feel lost, no matter where they land.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/not-found.png`]} />
        <TypographyH3 className="my-4 mt-8">What Makes It Special</TypographyH3>
        <p className="font-mono mb-2">
          FreeResume is designed to make job applications easier and more effective, especially for Ugandans.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Real-time resume building with ATS-friendly templates</li>
          <li>Next.js 13.4.4 PWA for fast, offline-capable performance</li>
          <li>PDF generation with @react-pdf/renderer 3.1.10</li>
          <li>Seamless state management using Redux Toolkit 1.9.5</li>
          <li>Engaging animations with Framer Motion 10.12.16</li>
          <li>Accessible UI with @heroicons/react 2.0.18 icons</li>
          <li>Purple-blue gradient design (#6b46c1 to #3b82f6) with Inter font</li>
          <li>Usage insights via Vercel Analytics 1.0.1</li>
          <li>Reliable testing with Jest 29.5.0</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Tech Behind the Scenes</TypographyH3>
        <p className="font-mono mb-2">
          With three years of full-stack experience, I built FreeResume to be robust and user-friendly. Next.js 13.4.4 powers fast rendering, TypeScript 5.0.4 keeps the code tight, and Tailwind CSS 3.3.2 brings the UI to life with a bold gradient palette. Redux Toolkit manages complex state, Framer Motion adds delightful animations, and @react-pdf/renderer creates professional PDFs. Jest and @testing-library/react 14.0.0 ensure reliability, while Vercel Analytics tracks performance. Prettier with prettier-plugin-tailwindcss 0.2.1 keeps the codebase clean, and Vercel’s CI/CD pipeline makes updates a breeze.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
        <TypographyH3 className="my-4 mt-8">How It Came Together</TypographyH3>
        <p className="font-mono mb-2">
          FreeResume was built with passion and precision, using Next.js 13.4.4 for speed and scalability. TypeScript 5.0.4 ensured error-free coding, while Tailwind CSS 3.3.2 crafted a vibrant, accessible UI. Redux Toolkit streamlined state management, and Framer Motion brought the app to life with animations. @react-pdf/renderer handled PDF exports, with pdfjs-dist 3.7.107 for parsing. Jest testing and Vercel Analytics kept quality and insights high. Deployed on Vercel with GitHub CI/CD, it’s ready to help job seekers shine.
        </p>
        <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          FreeResume is my way of giving back to Uganda’s job seekers, helping them land opportunities with confidence. Check out the live app, dive into the code, and let’s make job applications easier together!
        </p>
      </div>
    );
  }
},
{
  id: "gigmap",
  category: "Freelance Tech",
  title: "GigMap",
  src: "/assets/projects-screenshots/gigmap/home.png",
  screenshots: [
    "home.png",
    "freelancer-profile.png",
    "create-pin1.png",
    "create-pin2.png",
    "create-pin3.png",
    "create-pin4.png",
    "map-view.png",
    "search-filters.png",
    "skills-display.png", 
    "contact-form.png",
    "not-found.png"
  ],
  live: "https://gigmap.vercel.app",
  github: "https://github.com/jjingofarouk/gigmap",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactRouter,
      PROJECT_SKILLS.reactLeaflet,
      PROJECT_SKILLS.axios,
      PROJECT_SKILLS.ts
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.firebase
    ]
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          GigMap: Empowering Freelancers with a Global Stage
        </TypographyP>
        <TypographyP className="font-mono">
          GigMap is a sophisticated React 19 Progressive Web App (PWA) that redefines freelance networking by connecting talent with opportunities worldwide. Leveraging OpenStreetMap and React-Leaflet for precise geolocation, GigMap offers a dynamic platform where freelancers can pin their services on an interactive map, showcase their expertise, and engage with clients seamlessly. As a full-stack developer with three years of experience, I architected GigMap with a vibrant, gradient-driven UI (#8b5cf6 to #ec4899), TypeScript for type safety, and a robust Node.js backend, delivering a scalable, mobile-first solution that’s as intuitive as it is powerful.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Interactive Map Experience</TypographyH3>
        <p className="font-mono mb-2">
          At its core, GigMap features an interactive map powered by React-Leaflet 5.0.0 and OpenStreetMap, enabling users to explore freelancers’ locations with pinpoint precision. Custom red dot emoji markers (🔴) provide a sleek, minimalist aesthetic, revealing profile previews on click, while smooth zoom and pan controls ensure a fluid experience across devices.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/map-view.png`]} />
        <TypographyH3 className="my-4 mt-8">Dynamic Freelancer Profiles</TypographyH3>
        <p className="font-mono mb-2">
          Freelancer profiles are a centerpiece of GigMap, built with React Router 7.5.1 for seamless navigation. Each profile features a gradient header (#8b5cf6 to #d946ef), a bio, skill tags, and an embedded OpenStreetMap view. Tabbed sections for portfolios and reviews, styled with subtle animations, provide a comprehensive showcase of talent, optimized for both desktop and mobile.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/freelancer-profile.png`]} />
        <TypographyH3 className="my-4 mt-8">Multi-Step Profile Creation</TypographyH3>
        <p className="font-mono mb-2">
          The “Create Pin” feature offers a three-step form, crafted with React 19’s state management for a smooth onboarding experience. Freelancers input their basic information, skills, and geolocation coordinates across distinct steps, guided by a vibrant progress bar (#8b5cf6 to #d946ef) and real-time validation. The form’s clean, SVG-free design uses Unicode icons (e.g., →, ✓, ←) and gradient buttons for a modern, accessible UI, with clear instructions for obtaining coordinates.
        </p>
        <SlideShow images={[
          `${BASE_PATH}/gigmap/create-pin1.png`,
          `${BASE_PATH}/gigmap/create-pin2.png`,
          `${BASE_PATH}/gigmap/create-pin3.png`,
          `${BASE_PATH}/gigmap/create-pin4.png`
        ]} />
        <TypographyH3 className="my-4 mt-8">Advanced Search & Filters</TypographyH3>
        <p className="font-mono mb-2">
          GigMap’s search and filter system, powered by Axios 1.8.4 for API calls, allows clients to discover freelancers by skills, location, or keywords. A responsive search bar and dropdowns, accented with #d946ef highlights, adapt dynamically to screen sizes, ensuring a delightful and efficient talent discovery process.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/search-filters.png`]} />
        <TypographyH3 className="my-4 mt-8">Skills Showcase</TypographyH3>
        <p className="font-mono mb-2">
          Skills are presented as interactive tags with a soft gradient (#ede9fe to #fae8ff), clickable to filter related freelancers. This feature, built with TypeScript for type-safe data handling, enhances discoverability and aligns with GigMap’s vibrant, user-centric design.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/skills-display.png`]} />
        <TypographyH3 className="my-4 mt-8">Seamless Contact Integration</TypographyH3>
        <p className="font-mono mb-2">
          Clients can connect with freelancers via an integrated contact form, supporting email links and a “Save” feature for profile bookmarking. The form’s rounded inputs and hover effects (#8b5cf6 on focus) ensure a cohesive, professional interaction, WCAG-compliant for accessibility.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/contact-form.png`]} />
        <TypographyH3 className="my-4 mt-8">Robust Error Handling</TypographyH3>
        <p className="font-mono mb-2">
          GigMap includes a polished 404 page for invalid routes, featuring a Unicode-based error indicator (!) and a gradient-styled “Back to Homepage” button (#8b5cf6 to #d946ef). This ensures a consistent user experience, even when navigating to non-existent pages.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/not-found.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          Engineered for global scalability, GigMap combines cutting-edge technology with a visually stunning interface, empowering freelancers and clients in a competitive digital marketplace.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Interactive OpenStreetMap integration with React-Leaflet 5.0.0 and custom red dot markers (🔴)</li>
          <li>Dynamic profiles with tabbed navigation via React Router 7.5.1</li>
          <li>Three-step profile creation with TypeScript validation and progress tracking</li>
          <li>Advanced search and filtering with Axios-powered API calls</li>
          <li>Mobile-first PWA with offline support and responsive layouts</li>
          <li>Secure backend with Node.js, Express, and Firebase</li>
          <li>SVG-free, accessible UI with Unicode icons and WCAG compliance</li>
          <li>Gradient-driven design (#8b5cf6 to #ec4899) for a modern aesthetic</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          With three years of full-stack expertise, I built GigMap’s frontend using React 19, TypeScript 5.7.2, and Vite 6.3.1 for lightning-fast development and builds. React-Leaflet 5.0.0 powers the mapping functionality with custom emoji-based markers, and Axios 1.8.4 handles API requests to a Node.js/Express backend, augmented by Firebase for real-time data and authentication. ESLint 9.22.0, with plugins for React Hooks and Refresh, ensures code quality, while TypeScript provides robust type safety. The UI, styled with a custom CSS framework inspired by Tailwind’s utility-first approach, features vibrant gradients (#8b5cf6 to #ec4899), Inter font, and subtle shadows for a professional, hospital-chic aesthetic. OpenStreetMap integration adheres to ODbL licensing, with proper attribution.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
        <p className="font-mono mb-2">
          GigMap was developed using a modern JavaScript ecosystem, with Vite as the build tool for rapid iteration and optimized production builds. The frontend leverages React 19’s latest features, including improved state management and hooks, while TypeScript ensures type-safe components and API responses. The backend, built with Node.js and Express, uses Firebase for secure user management and real-time database operations. Development was streamlined with ESLint and TypeScript-ESLint for linting, ensuring maintainable, error-free code. The project was deployed on Vercel, with CI/CD pipelines for seamless updates.
        </p>
        <SlideShow images={[`${BASE_PATH}/gigmap/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          GigMap transforms freelance networking into a global, map-driven experience. Explore the live app, review the code, and let’s collaborate to elevate your next project to cosmic heights!
        </p>
      </div>
    );
  }
},
{
  id: "book-recommender",
  category: "Personalized Tech",
  title: "LitShelf",
  src: "/assets/projects-screenshots/litshelf/home.png",
  screenshots: [
    "home.png",
    "recommendations.png",
    "question-form.png",
    "book-card.png",
    "wishlist.png",
    "recently-viewed.png",
    "random-username.png",
    "mobile-view.png"
  ],
  live: "https://litshelf.vercel.app",
  github: "https://github.com/jjingofarouk/litshelf",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind
    ],
    backend: [] // No backend since data is client-side with localStorage
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          LitShelf: Your Personalized Reading Journey
        </TypographyP>
        <TypographyP className="font-mono">
          LitShelf is a Next.js 15.3.1-powered Progressive Web App (PWA) that delivers a highly personalized book discovery experience. Built with React 19 and TypeScript 5.7.2, it features a hybrid recommendation algorithm combining collaborative and content-based filtering, an interactive question-based form for user preferences, and a unique random username signup system for data persistence. With a sleek glassmorphic UI and a warm teal/sage palette, this app offers a delightful, mobile-first experience for book lovers to find their next read, manage wishlists, and explore curated suggestions—all without a traditional backend.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <TypographyH3 className="my-4 mt-8">Smart Recommendation Engine</TypographyH3>
        <p className="font-mono mb-2">
          At the heart of LitShelf lies a sophisticated hybrid recommendation system, blending collaborative filtering (using user wishlist data) and content-based filtering (via cosine similarity on book metadata like genres, tags, and keywords). This ensures highly personalized suggestions while maintaining diversity, with up to two books per genre for variety. The algorithm dynamically adjusts based on user interactions, providing a tailored reading list on every visit.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/recommendations.png`]} />
        <TypographyH3 className="my-4 mt-8">Interactive Question-Based Form</TypographyH3>
        <p className="font-mono mb-2">
          The preference form reimagines user input as a conversational journey. Users answer questions like “What’s your favorite genre?” or “What’s your budget?” by clicking buttons, with options dynamically pulled from the book dataset (e.g., genres, languages, price ranges). A “Get Recommendations Now” button at each step lets users stop early, while a progress indicator (e.g., “3/12”) keeps them engaged. The glassmorphic design, with subtle hover effects, ensures a modern, intuitive experience.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/question-form.png`]} />
        <TypographyH3 className="my-4 mt-8">Book Discovery Interface</TypographyH3>
        <p className="font-mono mb-2">
          Books are displayed in a responsive grid using BookCard components, showcasing cover images, titles, authors, and ratings. Users can toggle the question form to refine suggestions, with a loading state for seamless transitions. The UI adapts across devices, with a mobile-first layout ensuring accessibility and usability on all screen sizes.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/book-card.png`, `${BASE_PATH}/book-recommender/mobile-view.png`]} />
        <TypographyH3 className="my-4 mt-8">Wishlist & Recently Viewed</TypographyH3>
        <p className="font-mono mb-2">
          Users can save books to a wishlist or track recently viewed books, with data persisted in localStorage. These interactions feed into the recommendation engine, enhancing personalization over time. The interface provides clear visual feedback, with buttons styled in a warm teal palette for consistency.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/wishlist.png`, `${BASE_PATH}/book-recommender/recently-viewed.png`]} />
        <TypographyH3 className="my-4 mt-8">Random Username Signup</TypographyH3>
        <p className="font-mono mb-2">
          A unique feature, the random username signup assigns each user an identifier like “Reader_a2q5wtm2” on their first visit, stored in localStorage. This lightweight method persists wishlist and viewing data across sessions without a backend, offering a creative alternative to traditional authentication. Users are prompted to save their ID for use on other devices.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/random-username.png`]} />
        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <p className="font-mono mb-2">
          LitShelf combines cutting-edge personalization with a user-centric design, making book discovery both fun and efficient.
        </p>
        <ul className="font-mono list-disc list-inside mb-2">
          <li>Hybrid recommendation engine with cosine similarity and diversity control</li>
          <li>Interactive, button-based preference form with skippable questions</li>
          <li>Random username signup for lightweight data persistence</li>
          <li>Responsive, glassmorphic UI with a teal/sage palette</li>
          <li>Mobile-first PWA with offline support via Next.js</li>
          <li>Type-safe development with TypeScript 5.7.2</li>
          <li>Client-side data management using localStorage</li>
        </ul>
        <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
        <p className="font-mono mb-2">
          Built with Next.js 15.3.1 and React 19, Book Recommender leverages TypeScript for robust type safety, ensuring maintainable and error-free code. The frontend uses Tailwind CSS for utility-first styling, with custom variables (--foreground, --background) for a cohesive glassmorphic aesthetic. The recommendation algorithm employs cosine similarity for content-based filtering, implemented without external libraries for a lightweight solution. LocalStorage handles data persistence, making the app serverless yet functional. Vercel deployment with CI/CD ensures seamless updates, while ESLint and TypeScript-ESLint maintain code quality.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
        <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
        <p className="font-mono mb-2">
          The project was developed using a modern JavaScript ecosystem, with Next.js as the framework for its server-side rendering and static site generation capabilities. React 19’s hooks and state management powered the interactive form and dynamic UI updates. TypeScript ensured type-safe handling of book data and user preferences, while Tailwind CSS streamlined the styling process with utility classes. The recommendation algorithm was iteratively refined, incorporating user feedback from wishlist interactions. Deployment on Vercel, with automatic scaling and domain management, made the app accessible globally.
        </p>
        <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
        <p className="font-mono mb-2 mt-5 text-center">
          LitShelf transforms book discovery into a personalized, engaging experience. Check out the live app, explore the code, and let’s craft your next reading adventure together!
        </p>
      </div>
    );
  }
},
  {
    id: "osler",
    category: "Health Tool",
    title: "Dr. Jingo",
    src: "/assets/projects-screenshots/osler/home.png",
    screenshots: ["home.png", "chat.png", "case_study_1.png", "case_study_2.png", "history.png", "navigation.png"],
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
            Dr. Jingo = Clinical Mentorship + Modern Web Technology
          </TypographyP>
          <TypographyP className="font-mono">
            Dr. Jingo is a Flask-based Progressive Web App (PWA) I developed to deliver clinical mentorship through a virtual Ugandan clinician, Dr. Jingo. Powered by the Gemini API, it provides real-time, evidence-based medical guidance with features like interactive case studies, chat history, and intuitive navigation, showcasing my expertise in Python, Flask, and responsive front-end development.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
          <p className="font-mono mb-2">
            A clean and modern interface invites users to engage with Dr. Jingo. Built with Bootstrap and custom CSS for a responsive and user-friendly design across devices.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Navigation</TypographyH3>
          <p className="font-mono mb-2">
            I implemented a sleek hamburger menu for seamless navigation, allowing users to effortlessly switch between chat, case study, and history features, optimized for both mobile and desktop experiences.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/navigation.png`]} />
          <TypographyH3 className="my-4 mt-8">Chat Interface</TypographyH3>
          <p className="font-mono mb-2">
            Using jQuery and Flask, I created a dynamic chat UI with a hamburger menu for navigation and a sticky input bar for seamless interaction on mobile and desktop.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/chat.png`]} />
          <TypographyH3 className="my-4 mt-8">Case Study Mode</TypographyH3>
          <p className="font-mono mb-2">
            I implemented an interactive case study feature that allows users to practice clinical reasoning with tailored scenarios. This is also powered by the Gemini API for accurate responses.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/case_study_1.png`, `${BASE_PATH}/osler/case_study_2.png`]} />
          <TypographyH3 className="my-4 mt-8">Chat History</TypographyH3>
          <p className="font-mono mb-2">
            A dedicated history page tracks user interactions using local storage and Flask session management for persistence and accessibility.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/history.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            This PWA combines clinical utility with technical innovation, thus offering a fast, secure, and offline-capable experience.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Real-time medical guidance boosted by Gemini API</li>
            <li>Interactive case studies for clinical practice</li>
            <li>Chat history with local storage integration</li>
            <li>Progressive Web App with offline support</li>
            <li>Responsive UI with jQuery, Bootstrap, and hamburger menu</li>
            <li>Secure Flask backend with environment management</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            I built a robust Flask backend to manage API requests, integrated jQuery for dynamic front-end interactions, and implemented PWA features (manifest, service worker) for a native app-like experience. The hamburger menu enhances navigation and streaming responses ensure performance. Secure HTTPS and environment variables protect API keys.
          </p>
          <SlideShow images={[`${BASE_PATH}/osler/home.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            This app demonstrates my ability to merge Python-based backend development, AI integration, and modern front-end techniques to create powerful health tools for medical education.
          </p>
        </div>
      );
    },
  },
  {
    id: "uccr",
    category: "Healthcare",
    title: "UCCR - Uganda Clinical Case Reports",
    src: "/assets/projects-screenshots/uccr/home.png",
    screenshots: ["home.png", "case-detail.png", "case-create.png", "comment-section.png", "profile.png", "inbox.png", "mobile-view.png"],
    live: "https://uccrug.vercel.app",
    github: "https://github.com/jjingofarouk/uccr",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.css
      ],
      backend: [
        PROJECT_SKILLS.firebase
      ]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            UCCR: Uganda Clinical Case Reports
          </TypographyP>
          <TypographyP className="font-mono">
            UCCR is a Next.js 14.2.3-powered web application designed for doctors, medical students, and healthcare professionals to share and discuss clinical cases from Uganda. Built with React 18.2.0 and Firebase 10.12.2, it offers features like case creation with multimedia support, interactive comment sections with reactions, user profiles, and private messaging. The app features a responsive design with plain CSS, providing a professional platform for medical collaboration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Case Management</TypographyH3>
          <p className="font-mono mb-2">
            UCCR allows users to create detailed case reports with titles, presenting complaints, histories, investigations, management plans, and optional image uploads stored in Firebase Storage. The interface is intuitive, with a responsive layout that adapts to various devices, ensuring accessibility for medical professionals on the go.
          </p>
          <SlideShow images={[`${BASE_PATH}/uccr/case-create.png`, `${BASE_PATH}/uccr/case-detail.png`]} />
          <TypographyH3 className="my-4 mt-8">Interactive Discussions</TypographyH3>
          <p className="font-mono mb-2">
            The comment section enables rich discussions with features like comments, replies, and reactions (Like, Insightful, Dislike) powered by Firestore. Users can engage with cases, share insights, and vote on comments, fostering a collaborative learning environment.
          </p>
          <SlideShow images={[`${BASE_PATH}/uccr/comment-section.png`]} />
          <TypographyH3 className="my-4 mt-8">User Profiles & Messaging</TypographyH3>
          <p className="font-mono mb-2">
            Users can upload profile photos and access private messaging via Firebase Authentication and Firestore. The inbox feature supports secure communication between healthcare professionals, enhancing networking and case consultation.
          </p>
          <SlideShow images={[`${BASE_PATH}/uccr/profile.png`, `${BASE_PATH}/uccr/inbox.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            UCCR combines robust functionality with a user-focused design to support medical education and collaboration.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Firebase Authentication with Email/Password</li>
            <li>Case creation with multimedia support</li>
            <li>Interactive comment system with reactions</li>
            <li>User profiles with photo upload</li>
            <li>Private messaging between users</li>
            <li>Responsive design with plain CSS</li>
            <li>Mobile-first layout for accessibility</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js 14.2.3 and React 18.2.0, UCCR leverages Firebase 10.12.2 for authentication, Firestore for real-time data, and Storage for media. The frontend uses plain CSS for styling, ensuring a lightweight and customizable design. Framer Motion adds smooth animations, while Lucide React provides icons. Deployed on Vercel, the app benefits from automatic scaling and CI/CD, with ESLint maintaining code quality.
          </p>
          <SlideShow images={[`${BASE_PATH}/uccr/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
          <p className="font-mono mb-2">
            Developed using Next.js for server-side rendering and static generation, UCCR integrates Firebase for backend services. React hooks manage state and user interactions, while Firestore ensures real-time updates for comments and messages. Plain CSS provides a tailored styling approach, with responsive design tested across devices. Deployment on Vercel with Firebase Hosting ensures global accessibility and scalability.
          </p>
          <SlideShow images={[`${BASE_PATH}/uccr/mobile-view.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            UCCR empowers healthcare professionals with a platform for sharing and learning from clinical cases. Explore the live app, review the code, and contribute to enhancing medical knowledge!
          </p>
        </div>
      );
    },
  },
  {
    id: "BloodMatch",
    category: "Health Tool",
    title: "BloodMatch",
    src: "/assets/projects-screenshots/BloodMatch/home.png",
    screenshots: ["home.png", "donor_dashboard.png", "request_blood.png", "profile.png", "emergency_services.png", "hospitals.png", "pharmacies.png"],
    live: "https://bloodmatchug.vercel.app/",
    github: "https://github.com/jjingofarouk/BloodMatch",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.reactLeaflet,
        PROJECT_SKILLS.chartjs,
        PROJECT_SKILLS.pwa,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.geofire,
        PROJECT_SKILLS.twilio,
        PROJECT_SKILLS.nodemailer,
      ]
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            BloodMatch = Blood Donation Platform + Modern Web Technology
          </TypographyP>
          <TypographyP className="font-mono">
            BloodMatch is a Firebase-based Progressive Web App (PWA) I developed to connect blood donors with recipients in real-time across Uganda. Powered by Firebase, GeoFire, and React, it offers geolocation-based matching, multi-channel notifications, and comprehensive healthcare resources, showcasing my expertise in full-stack development, geospatial technology, and responsive UI design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Home Screen</TypographyH3>
          <p className="font-mono mb-2">
            A clean and modern interface with a responsive navbar, designed with a red-white theme to reflect the blood donation mission, built using React and custom CSS for accessibility across devices.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/home.png`]} />
          <TypographyH3 className="my-4 mt-8">Donor Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            An interactive map powered by Leaflet and GeoFire displays nearby blood requests with filters and Google Maps directions, optimized for donor engagement and usability.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/donor_dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">Request Blood</TypographyH3>
          <p className="font-mono mb-2">
            Recipients can submit urgent blood requests with geolocation data, processed by Firebase Cloud Functions for real-time matching with compatible donors.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/request_blood.png`]} />
          <TypographyH3 className="my-4 mt-8">Profile Management</TypographyH3>
          <p className="font-mono mb-2">
            Users can update profiles with photos via Firebase Storage and track donation eligibility, enhancing personalization and user engagement.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/profile.png`]} />
          <TypographyH3 className="my-4 mt-8">Emergency Services</TypographyH3>
          <p className="font-mono mb-2">
            A curated list of Ugandan ambulance services with contact details, integrated as a static dataset for quick access during emergencies.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/emergency_services.png`]} />
          <TypographyH3 className="my-4 mt-8">Hospitals & Pharmacies</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive lists of hospitals and pharmacies across Uganda, providing critical healthcare resources, styled for clarity and accessibility.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/hospitals.png`, `${BASE_PATH}/BloodMatch/pharmacies.png`]} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            This PWA combines lifesaving utility with technical innovation, offering a fast, secure, and offline-capable experience.
          </p>
          <ul className="font-mono list-disc list-inside mb-2">
            <li>Geolocation-based donor-recipient matching with GeoFire</li>
            <li>Real-time push, email, and SMS notifications via Firebase, Twilio, and Nodemailer</li>
            <li>Interactive map with Leaflet for request visualization</li>
            <li>Progressive Web App with offline support and installability</li>
            <li>Admin dashboard with Chart.js analytics for platform insights</li>
            <li>Curated healthcare resources including emergency services, hospitals, and pharmacies</li>
            <li>Secure Firebase backend with Cloud Functions and Firestore</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <p className="font-mono mb-2">
            I built a robust Firebase backend with Cloud Functions for matching and notifications, integrated React with TypeScript for a type-safe frontend, and implemented PWA features for a native-like experience. The responsive navbar with a hamburger menu ensures accessibility, while Twilio and Nodemailer enable multi-channel notifications.
          </p>
          <SlideShow images={[`${BASE_PATH}/BloodMatch/home.png`]} />
          <p className="font-mono mb-2 mt-5 text-center">
            This app demonstrates my ability to merge geospatial technology, real-time systems, and user-centric design to create impactful health tools for social good.
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
}

];
export default projects;
