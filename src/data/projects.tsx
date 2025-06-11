import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { SiAxios, SiBootstrap, SiChakraui, SiCss3, SiTensorflow, SiApifox, SiCypress, SiAppstore, SiChartdotjs, SiVercel, SiDeno, SiNpm, SiDocker, SiExpress, SiFastapi, SiFirebase, SiFlask, SiTwilio, SiMaildotcom, SiFontawesome, SiGoogletranslate, SiGraphql, SiHtml5, SiJavascript, SiJest, SiKubernetes, SiMongodb, SiMocha, SiNextdotjs, SiPostgresql, SiPrisma, SiPython, SiRabbitmq, SiReact, SiReactquery, SiReactrouter, SiRedux, SiRust, SiSanity, SiShadcnui, SiSocketdotio, SiStyledcomponents, SiSvelte, SiTailwindcss, SiTerraform, SiThreedotjs, SiTypescript, SiVuedotjs, SiYoutube } from 'react-icons/si';
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaJava, FaAws } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import AceTernityLogo from '@/components/logos/aceternity';

// Base Path for Assets
const BASE_PATH = '/assets/projects-screenshots';

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode | any;
  github?: string;
  live: string;
};

export const PROJECT_SKILLS = {
  next: { title: 'Next.js', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  expo: { title: 'Expo', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  upstashRedis: { title: 'Upstash Redis', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  jquery: { title: 'jQuery', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  gemini: { title: 'Gemini API', bg: 'black', fg: 'white', icon: <SiPython /> },
  reactNavigation: { title: 'React Navigation', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  reactPDF: { title: 'React PDF', bg: 'black', fg: 'white', icon: <SiReact /> },
  reactIcons: { title: 'React Icons', bg: 'black', fg: 'white', icon: <SiReact /> },
  reanimated: { title: 'React Native Reanimated', bg: 'black', fg: 'white', icon: <SiReact /> },
  gestureHandler: { title: 'Gesture Handler', bg: 'black', fg: 'white', icon: <SiReact /> },
  geofire: { title: 'GeoFire', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  twilio: { title: 'Twilio', bg: 'black', fg: 'white', icon: <SiTwilio /> },
  nodemailer: { title: 'Node Mailer', bg: 'black', fg: 'white', icon: <SiMaildotcom /> },
  reactNativePaper: { title: 'React Native Paper', bg: 'black', fg: 'white', icon: <SiReact /> },
  asyncStorage: { title: 'AsyncStorage', bg: 'black', fg: 'white', icon: <SiReact /> },
  chartKit: { title: 'Chart Kit', bg: 'black', fg: 'white', icon: <SiReact /> },
  vectorIcons: { title: 'Vector Icons', bg: 'black', fg: 'white', icon: <SiReact /> },
  vercelAnalytics: { title: 'Vercel Analytics', bg: 'black', fg: 'white', icon: <SiVercel /> },
  nextjs: { title: 'Next Js ', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  lucide: { title: 'Lucide Icons', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  chakra: { title: 'Chakra UI', bg: 'black', fg: 'white', icon: <SiChakraui /> },
  mui: { title: 'Material-UI', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  reactLeaflet: { title: 'React Leaflet', bg: 'black', fg: 'white', icon: <SiReact /> },
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  html: { title: 'HTML', bg: 'black', fg: 'white', icon: <SiHtml5 /> },
  fontAwesome: { title: 'Font Awesome', bg: 'black', fg: 'white', icon: <SiFontawesome /> },
  flask: { title: 'Flask', bg: 'black', fg: 'white', icon: <SiFlask /> },
  transformers: { title: 'Hugging Face Transformers', bg: 'black', fg: 'white', icon: <SiMongodb /> },
  sentenceTransformers: { title: 'Sentence Transformers', bg: 'black', fg: 'white', icon: <SiMongodb /> },
  googletrans: { title: 'Google Translate', bg: 'black', fg: 'white', icon: <SiGoogletranslate /> },
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <RiNodejsFill /> },
  python: { title: 'Python', bg: 'black', fg: 'white', icon: <SiPython /> },
  prisma: { title: 'Prisma', bg: 'black', fg: 'white', icon: <SiPrisma /> },
  postgres: { title: 'PostgreSQL', bg: 'black', fg: 'white', icon: <SiPostgresql /> },
  postgresql: { title: 'PostgreSQL', bg: 'black', fg: 'white', icon: <SiPostgresql /> },
  bootstrap: { title: 'Bootstrap', bg: 'black', fg: 'white', icon: <SiBootstrap /> },
  ytDlp: { title: 'yt-dlp', bg: 'black', fg: 'white', icon: <SiYoutube /> },
  mongodb: { title: 'MongoDB', bg: 'black', fg: 'white', icon: <SiMongodb /> },
  express: { title: 'Express', bg: 'black', fg: 'white', icon: <SiExpress /> },
  reactQuery: { title: 'React Query', bg: 'black', fg: 'white', icon: <SiReactquery /> },
  shadcn: { title: 'ShadCN UI', bg: 'black', fg: 'white', icon: <SiShadcnui /> },
  tailwind: { title: 'Tailwind', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  docker: { title: 'Docker', bg: 'black', fg: 'white', icon: <SiDocker /> },
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  reactRouter: { title: 'React Router', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  lucideReact: { title: 'Lucide React', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  reactSpring: { title: 'React Spring', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  styledComponents: { title: 'Styled Components', bg: 'black', fg: 'white', icon: <SiStyledcomponents /> },
  axios: { title: 'Axios', bg: 'black', fg: 'white', icon: <SiAxios /> },
  socketio: { title: 'Socket.io', bg: 'black', fg: 'white', icon: <SiSocketdotio /> },
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  vue: { title: 'Vue.js', bg: 'black', fg: 'white', icon: <SiVuedotjs /> },
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <RiReactjsFill /> },
  sanity: { title: 'Sanity', bg: 'black', fg: 'white', icon: <SiSanity /> },
  gsap: { title: 'GSAP', bg: 'black', fg: 'white', icon: '' },
  framerMotion: { title: 'Framer Motion', bg: 'black', fg: 'white', icon: <TbBrandFramerMotion /> },
  heroicons: { title: 'Hero Icons', bg: 'black', fg: 'white', icon: <TbBrandFramerMotion /> },
  supabase: { title: 'Supabase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  redux: { title: 'Redux', bg: 'black', fg: 'white', icon: <SiRedux /> },
  css: { title: 'CSS', bg: 'black', fg: 'white', icon: <SiCss3 /> },
  git: { title: 'Git', bg: 'black', fg: 'white', icon: <SiRedux /> },
  npm: { title: 'NPM', bg: 'black', fg: 'white', icon: <SiNpm /> },
  graphql: { title: 'GraphQL', bg: 'black', fg: 'white', icon: <SiGraphql /> },
  spline: { title: 'Spline', bg: 'black', fg: 'white', icon: <SiThreedotjs /> },
  materialUI: { title: 'materialUI', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  aceternity: { title: 'Aceternity', bg: 'black', fg: 'white', icon: <AceTernityLogo /> },
  rust: { title: 'Rust', bg: 'black', fg: 'white', icon: <SiRust /> },
  kubernetes: { title: 'Kubernetes', bg: 'black', fg: 'white', icon: <SiKubernetes /> },
  deno: { title: 'Deno', bg: 'black', fg: 'white', icon: <SiDeno /> },
  svelte: { title: 'Svelte', bg: 'black', fg: 'white', icon: <SiSvelte /> },
  astro: { title: 'Astro', bg: 'black', fg: 'white', icon: <SiJest /> },
  bun: { title: 'Bun', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  jest: { title: 'Jest', bg: 'black', fg: 'white', icon: <SiAxios /> },
  mocha: { title: 'Mocha', bg: 'black', fg: 'white', icon: <SiRust /> },
  cypress: { title: 'Cypress', bg: 'black', fg: 'white', icon: <SiShadcnui /> },
  rabbitmq: { title: 'RabbitMQ', bg: 'black', fg: 'white', icon: <SiRabbitmq /> },
  terraform: { title: 'Terraform', bg: 'black', fg: 'white', icon: <SiTerraform /> },
  apiintegration: { title: 'API Integration', bg: 'black', fg: 'white', icon: <SiApifox /> },
  tensorflow: { title: 'Tensor Flow', bg: 'black', fg: 'white', icon: <SiTensorflow /> },
  websocket: { title: 'Web Socket', bg: 'black', fg: 'white', icon: <SiSocketdotio /> },
  fastapi: { title: 'FastAPI', bg: 'black', fg: 'white', icon: <SiFastapi /> },
  chartjs: { title: 'ChartJs', bg: 'black', fg: 'white', icon: <SiChartdotjs /> },
  pwa: { title: 'Progressive Web Application', bg: 'black', fg: 'white', icon: <SiAppstore /> },
  go: { title: 'Go', bg: 'black', fg: 'white', icon: <FaJava /> },
  java: { title: 'Java', bg: 'black', fg: 'white', icon: <FaJava /> },
  aws: { title: 'AWS', bg: 'black', fg: 'white', icon: <FaAws /> },
  nextdotjs: { title: 'Next.js (alt)', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
};

export const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant="default" size="sm">
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant="default" size="sm">
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

// Dynamic imports to prevent circular dependencies
const CareWave = dynamic(() => import('./carewave').then(mod => mod.CareWave));
const Ssuubi = dynamic(() => import('./ssuubi').then(mod => mod.Ssuubi));
const MediQ = dynamic(() => import('./mediq').then(mod => mod.MediQ));
const CareView = dynamic(() => import('./careview').then(mod => mod.CareView));
const Zano = dynamic(() => import('./zano').then(mod => mod.Zano));
const ClinicalCalculators = dynamic(() => import('./clinical-calculators').then(mod => mod.ClinicalCalculators));
const MatatuTracker = dynamic(() => import('./matatu').then(mod => mod.MatatuTracker));
const Dwaliro = dynamic(() => import('./dwaliro').then(mod => mod.Dwaliro));
const FreeResume = dynamic(() => import('./free-resume').then(mod => mod.FreeResume));
const GigMap = dynamic(() => import('./gigmap').then(mod => mod.GigMap));
const LitShelf = dynamic(() => import('./litshelf').then(mod => mod.LitShelf));
const DrJingo = dynamic(() => import('./osler').then(mod => mod.DrJingo));
const UCCR = dynamic(() => import('./uccr').then(mod => mod.UCCR));
const BloodMatch = dynamic(() => import('./bloodmatch').then(mod => mod.BloodMatch));
const TouchedHearts = dynamic(() => import('./touched-hearts').then(mod => mod.TouchedHearts));

const projects: Project[] = [
  CareWave,
  Ssuubi,
  MediQ,
  CareView,
  Zano,
  ClinicalCalculators,
  MatatuTracker,
  Dwaliro,
  FreeResume,
  GigMap,
  LitShelf,
  DrJingo,
  UCCR,
  BloodMatch,
  TouchedHearts,
];

export default projects;