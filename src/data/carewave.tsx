import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const CareWave = {
  id: "carewave",
  category: "Hospital Management Tech",
  title: "CareWave",
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
      PROJECT_SKILLS.tailwind,
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
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        CareWave = Your All-in-One Hospital Management Solution
      </TypographyP>
      <TypographyP className="font-mono">
        CareWave is an enterprise-grade hospital management system designed to streamline clinical, administrative, and operational workflows. With a modular architecture and modern tech stack, it empowers healthcare teams with real-time data, secure communication, and advanced analytics, reflecting my expertise in medical-tech innovation.
      </TypographyP>
      <ProjectsLinks live="https://carewave-doctor.vercel.app" repo="https://github.com/jjingofarouk/CareWave_Doctors" />
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
  ),
};
