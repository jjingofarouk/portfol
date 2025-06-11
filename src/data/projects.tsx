// src/data/projects.tsx
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

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

const CareWave = dynamic(() => import('./carewave').then(mod => mod.CareWave), { ssr: false });
const Ssuubi = dynamic(() => import('./ssuubi').then(mod => mod.Ssuubi), { ssr: false });
const MediQ = dynamic(() => import('./mediq').then(mod => mod.MediQ), { ssr: false });
const CareView = dynamic(() => import('./careview').then(mod => mod.CareView), { ssr: false });
const Zano = dynamic(() => import('./zano').then(mod => mod.Zano), { ssr: false });
const ClinicalCalculators = dynamic(() => import('./clinical-calculators').then(mod => mod.ClinicalCalculators), { ssr: false });
const MatatuTracker = dynamic(() => import('./matatu').then(mod => mod.MatatuTracker), { ssr: false });
const Dwaliro = dynamic(() => import('./dwaliro').then(mod => mod.Dwaliro), { ssr: false });
const FreeResume = dynamic(() => import('./free-resume').then(mod => mod.FreeResume), { ssr: false });
const GigMap = dynamic(() => import('./gigmap').then(mod => mod.GigMap), { ssr: false });
const LitShelf = dynamic(() => import('./litshelf').then(mod => mod.LitShelf), { ssr: false });
const DrJingo = dynamic(() => import('./osler').then(mod => mod.DrJingo), { ssr: false });
const UCCR = dynamic(() => import('./uccr').then(mod => mod.UCCR), { ssr: false });
const BloodMatch = dynamic(() => import('./bloodmatch').then(mod => mod.BloodMatch), { ssr: false });
const TouchedHearts = dynamic(() => import('./touched-hearts').then(mod => mod.TouchedHearts), { ssr: false });

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