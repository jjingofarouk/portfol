import {
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFontawesome,
  SiGoogletranslate,
  SiGraphql,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiStyledcomponents,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaJava, FaAws } from 'react-icons/fa';
import { Skill } from './types';

export const PROJECT_SKILLS: Record<string, Skill> = {
  // Frontend Frameworks and Libraries
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <RiReactjsFill /> },
  next: { title: 'Next.js', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  vue: { title: 'Vue.js', bg: 'black', fg: 'white', icon: <SiVuedotjs /> },
  svelte: { title: 'Svelte', bg: 'black', fg: 'white', icon: <SiSvelte /> },

  // Styling and UI Libraries
  css: { title: 'CSS', bg: 'black', fg: 'white', icon: <SiCss3 /> },
  tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  bootstrap: { title: 'Bootstrap', bg: 'black', fg: 'white', icon: <SiBootstrap /> },
  styledcomponents: { title: 'Styled Components', bg: 'black', fg: 'white', icon: <SiStyledcomponents /> },
  chakra: { title: 'Chakra UI', bg: 'black', fg: 'white', icon: <SiChakraui /> },
  shadcn: { title: 'ShadCN UI', bg: 'black', fg: 'white', icon: <SiShadcnui /> },
  mui: { title: 'Material-UI', bg: 'black', fg: 'white', icon: <SiReact /> }, // No specific icon, using React
  fontawesome: { title: 'Font Awesome', bg: 'black', fg: 'white', icon: <SiFontawesome /> },
  framermotion: { title: 'Framer Motion', bg: 'black', fg: 'white', icon: <TbBrandFramerMotion /> },
  aceternity: { title: 'Aceternity', bg: 'black', fg: 'white', icon: <SiReact /> }, // Custom logo, using React
  spline: { title: 'Spline', bg: 'black', fg: 'white', icon: <SiThreedotjs /> }, // No specific icon, using Three.js
  reactrouter: { title: 'React Router', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  reactspring: { title: 'React Spring', bg: 'black', fg: 'white', icon: <SiReact /> }, // No specific icon, using React
  lucidereact: { title: 'Lucide React', bg: 'black', fg: 'white', icon: <SiReact /> }, // No specific icon, using React

  // Programming Languages
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  python: { title: 'Python', bg: 'black', fg: 'white', icon: <SiPython /> },
  java: { title: 'Java', bg: 'black', fg: 'white', icon: <FaJava /> },

  // Backend Frameworks
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <RiNodejsFill /> },
  express: { title: 'Express', bg: 'black', fg: 'white', icon: <SiExpress /> },
  flask: { title: 'Flask', bg: 'black', fg: 'white', icon: <SiFlask /> },
  fastapi: { title: 'FastAPI', bg: 'black', fg: 'white', icon: <SiFastapi /> },

  // Databases
  mongodb: { title: 'MongoDB', bg: 'black', fg: 'white', icon: <SiMongodb /> },
  postgres: { title: 'PostgreSQL', bg: 'black', fg: 'white', icon: <SiPostgresql /> },

  // Cloud Platforms and Services
  aws: { title: 'AWS', bg: 'black', fg: 'white', icon: <FaAws /> },
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  supabase: { title: 'Supabase', bg: 'black', fg: 'white', icon: <SiSupabase /> },
  vercel: { title: 'Vercel', bg: 'black', fg: 'white', icon: <SiVercel /> },

  // DevOps and Infrastructure
  docker: { title: 'Docker', bg: 'black', fg: 'white', icon: <SiDocker /> },
  kubernetes: { title: 'Kubernetes', bg: 'black', fg: 'white', icon: <SiKubernetes /> },
  terraform: { title: 'Terraform', bg: 'black', fg: 'white', icon: <SiTerraform /> },

  // Testing Frameworks
  jest: { title: 'Jest', bg: 'black', fg: 'white', icon: <SiJest /> },

  // Version Control and Package Managers
  git: { title: 'Git', bg: 'black', fg: 'white', icon: <SiGit /> },
  npm: { title: 'NPM', bg: 'black', fg: 'white', icon: <SiNpm /> },

  // API and Networking
  axios: { title: 'Axios', bg: 'black', fg: 'white', icon: <SiAxios /> },
  graphql: { title: 'GraphQL', bg: 'black', fg: 'white', icon: <SiGraphql /> },
  socketio: { title: 'Socket.io', bg: 'black', fg: 'white', icon: <SiSocketdotio /> },
  rabbitmq: { title: 'RabbitMQ', bg: 'black', fg: 'white', icon: <SiRabbitmq /> },

  // Content Management Systems
  sanity: { title: 'Sanity', bg: 'black', fg: 'white', icon: <SiSanity /> },

  // Machine Learning and Data Science
  transformers: { title: 'Hugging Face Transformers', bg: 'black', fg: 'white', icon: <SiTensorflow /> }, // No specific icon, using TensorFlow
  sentencetransformers: { title: 'Sentence Transformers', bg: 'black', fg: 'white', icon: <SiTensorflow /> }, // No specific icon, using TensorFlow
  googletrans: { title: 'Google Translate', bg: 'black', fg: 'white', icon: <SiGoogletranslate /> },

  // Miscellaneous
  redux: { title: 'Redux', bg: 'black', fg: 'white', icon: <SiRedux /> },
  reactquery: { title: 'React Query', bg: 'black', fg: 'white', icon: <SiReactquery /> },
  prisma: { title: 'Prisma', bg: 'black', fg: 'white', icon: <SiPrisma /> },
  ytdlp: { title: 'yt-dlp', bg: 'black', fg: 'white', icon: <SiPython /> }, // Using Python as more relevant
  eslint: { title: 'ESLint', bg: 'black', fg: 'white', icon: <SiEslint /> },
  prettier: { title: 'Prettier', bg: 'black', fg: 'white', icon: <SiPrettier /> },
  json: { title: 'JSON', bg: 'black', fg: 'white', icon: <SiJavascript /> }, // No specific icon, using JavaScript
};