// src/data/carewave.tsx
import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode | null;
};

type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live: string;
};

const PROJECT_SKILLS = {
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <SiReact /> },
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  nextjs: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  prisma: { title: 'Prisma', bg: 'black', fg: 'white', icon: <FaDatabase /> },
  postgresql: { title: 'PostgreSQL', bg: 'black', fg: 'white', icon: <SiPostgresql /> },
  mui: { title: 'MUI', bg: 'black', fg: 'white', icon: null },
  chartjs: { title: 'Chart.js', bg: 'black', fg: 'white', icon: null },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center gap-3 my-3 mb-6">
    <Link className="font-mono underline flex gap-2" rel="noopener" target="_blank" href={live}>
      <Button variant="default" size="sm">
        Visit Website
        <ArrowUpRight className="ml-2 w-3 h-3" />
      </Button>
    </Link>
    {repo && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_blank" href={repo}>
        <Button variant="default" size="sm">
          Github
          <ArrowUpRight className="ml-2 w-3 h-3" />
        </Button>
      </Link>
    )}
  </div>
);

export const CareWave: Project = {
  id: 'carewave',
  category: 'Hospital Management System',
  title: 'CareWave',
  src: `${BASE_PATH}/carewave/home.png`,
  screenshots: ['home.png', 'telemedicine.png', 'dashboard.png', 'billing.png', 'clinical.png', 'inventory.png'],
  live: 'https://carewave.vercel.app/',
  github: 'https://github.com/jjingofarouk/CareWave',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.nextjs,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.mui,
      PROJECT_SKILLS.chartjs,
    ],
    backend: [
      PROJECT_SKILLS.prisma,
      PROJECT_SKILLS.postgresql,
      PROJECT_SKILLS.firebase,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        CareWave = Advanced Hospital Management
      </TypographyP>
      <TypographyP className="font-mono">
        CareWave is a robust hospital management system built with Next.js, Prisma, and PostgreSQL, offering telemedicine, patient management, clinical operations, and administrative tools.
      </TypographyP>
      <ProjectsLinks live="https://carewave.vercel.app/" repo="https://github.com/jjingofarouk/CareWave" />

      <TypographyH3 className="my-4 mt-6">Telemedicine</TypographyH3>
      <p className="font-mono mb-2">
        Facilitate secure video consultations for remote patient care.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/telemedicine.png`]} />

      <TypographyH3 className="my-4 mt-6">Admin Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Manage appointments, billing, inventory, clinical settings, and patient records with real-time insights.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/dashboard.png`]} />

      <TypographyH3 className="my-4 mt-6">Billing & Accounting</TypographyH3>
      <p className="font-mono mb-2">
        Handle financial transactions, insurance claims, and accounting with integrated tools.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/billing.png`]} />

      <TypographyH3 className="my-4 mt-6">Clinical Operations</TypographyH3>
      <p className="font-mono mb-2">
        Streamline clinical workflows, lab results, radiology, and operation theatre scheduling.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/clinical.png`]} />

      <TypographyH3 className="my-4 mt-6">Inventory & Procurement</TypographyH3>
      <p className="font-mono mb-2">
        Track medical supplies, pharmacy stock, and procurement processes efficiently.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave/inventory.png`]} />

      <TypographyH3 className="my-4 mt-6">Modules</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-3">
        <li>Appointments: Schedule and track patient visits.</li>
        <li>Billing: Manage payments and insurance claims.</li>
        <li>Clinical: Handle patient care and diagnostics.</li>
        <li>Clinical Settings: Customize clinical workflows.</li>
        <li>CSSD: Ensure sterilization processes.</li>
        <li>Dispensary: Manage medication distribution.</li>
        <li>Doctor: Coordinate physician schedules and records.</li>
        <li>Dynamic Report: Generate custom analytics.</li>
        <li>Emergency: Prioritize urgent care cases.</li>
        <li>Fixed Assets: Track hospital equipment.</li>
        <li>Helpdesk: Support staff and patients.</li>
        <li>Incentive: Manage staff rewards.</li>
        <li>Inventory: Monitor supplies and restocking.</li>
        <li>Laboratory: Process lab tests and results.</li>
        <li>Maternity: Support maternal care services.</li>
        <li>Medical Records: Store and access patient histories.</li>
        <li>Marketing Referral: Manage patient referrals.</li>
        <li>NHIF: Handle insurance integrations.</li>
        <li>Nursing: Coordinate nursing care tasks.</li>
        <li>Operation Theatre: Schedule surgeries.</li>
        <li>Patients: Centralize patient data.</li>
        <li>Pharmacy: Manage prescriptions and stock.</li>
        <li>Procurement: Oversee purchasing processes.</li>
        <li>Queue Management: Optimize patient flow.</li>
        <li>Radiology: Manage imaging services.</li>
        <li>Reports: Access detailed operational reports.</li>
        <li>Settings: Configure system preferences.</li>
        <li>Social Service: Support community outreach.</li>
        <li>Substore: Manage decentralized inventory.</li>
        <li>System Admin: Oversee system operations.</li>
        <li>Utilities: Maintain system tools.</li>
        <li>Vaccination: Track immunization programs.</li>
        <li>Verification: Ensure data accuracy.</li>
      </ul>

      <TypographyH3 className="my-4 mt-6">Key Features</TypographyH3>
      <ul className="font-mono list-disc list-inside mb-3">
        <li>Telemedicine for remote consultations</li>
        <li>Role-based access for patients, doctors, nurses, lab techs, staff, and admins</li>
        <li>Data visualization with Chart.js and MUI Data Grid</li>
        <li>Secure database management with Prisma and PostgreSQL</li>
        <li>Real-time updates with Firebase</li>
        <li>Responsive UI with Tailwind CSS and MUI</li>
      </ul>
    </div>
  ),
};