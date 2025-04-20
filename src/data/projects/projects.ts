// src/data/projects/projects.ts
import { Project } from './types';
import { carewaveDoctor } from './projects/carewave-doctor';
import { ssuubi } from './projects/ssuubi';
import { carewavePatients } from './projects/carewave-patients';
import { mediq } from './projects/mediq';
import { zano } from './projects/zano';
import { portfolio } from './projects/portfolio';
import { mininews } from './projects/mininews';
import { matatu } from './projects/matatu';
import { dwaliro } from './projects/dwaliro';
import { tubesnap } from './projects/tubesnap';

const projects: Project[] = [
  carewaveDoctor,
  ssuubi,
  carewavePatients,
  mediq,
  zano,
  portfolio,
  mininews,
  matatu,
  dwaliro,
  tubesnap,
];

export default projects;