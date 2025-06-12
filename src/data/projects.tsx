// src/data/projects.tsx
import { ReactNode } from 'react';
import { CareWave } from './carewave';
import { Ssuubi } from './ssuubi';
import { MediQ } from './mediq';
import { CareView } from './careview';
import { Zano } from './zano';
import { ClinicalCalculators } from './clinical-calculators';
import { MatatuTracker } from './matatu';
import { Dwaliro } from './dwaliro';
import { FreeResume } from './free-resume';
import { GigMap } from './gigmap';
import { LitShelf } from './litshelf';
import { DrJingo } from './osler';
import { UCCR } from './uccr';
import { BloodMatch } from './bloodmatch';
import { TouchedHearts } from './touched-hearts';
import { ZunoBotics } from './zunobotics'; // Import the ZunoBotics project

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
  ZunoBotics,
];

export default projects;