// src/data/projects/projects/carewave-patients.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const carewavePatients: Project = {
  id: 'carewave-patients',
  category: 'telemedicine platform',
  title: 'CareWavePatients',
  src: `${BASE_PATH}/carewave/carewave.png`,
  screenshots: ['landing.png'],
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.chakra,
      PROJECT_SKILLS.reactQuery,
      PROJECT_SKILLS.firebase,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.prisma,
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.postgres,
      PROJECT_SKILLS.socketio,
    ],
  },
  live: 'https://carewave-patients.vercel.app/',
  github: 'https://github.com/jjingofarouk/CareWave_Patients',
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        CareWavePatients = Your Health, Your Way
      </TypographyP>
      <TypographyP className="font-mono">
        CareWavePatients is a telemedicine app built for patients to connect with doctors anytime, anywhere. Book appointments, join video consultations, manage prescriptions, and track your health—all from your phone. Take control of your care with ease and convenience.
      </TypographyP>
      <ProjectsLinks live="https://carewave-patients.vercel.app/" repo="https://github.com/jjingofarouk/CareWave_Patients" />
      <TypographyH3 className="my-4 mt-8">Book Appointments</TypographyH3>
      <p className="font-mono mb-2">
        Schedule virtual visits with your doctor at a time that works for you, with a simple and intuitive booking system.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/book-appointment.png`]} />
      <TypographyH3 className="my-4 mt-8">Video Consultations</TypographyH3>
      <p className="font-mono mb-2">
        Connect face-to-face with your doctor through secure, real-time video calls powered by Socket.IO.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/video-consultation.png`]} />
      <TypographyH3 className="my-4 mt-8">Health Records</TypographyH3>
      <p className="font-mono mb-2">
        View your medical history, test results, and doctor notes in one secure place, accessible anytime.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/health-records.png`]} />
      <TypographyH3 className="my-4 mt-8">Prescriptions</TypographyH3>
      <p className="font-mono mb-2">
        Receive and manage digital prescriptions from your doctor, with options to send them to your pharmacy.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/prescriptions.png`]} />
      <TypographyH3 className="my-4 mt-8">Health Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        Monitor your upcoming appointments, recent visits, and health updates from a personalized dashboard.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/dashboard.png`]} />
      <TypographyH3 className="my-4 mt-8">Notifications</TypographyH3>
      <p className="font-mono mb-2">
        Stay on top of your care with real-time reminders for appointments and medication, powered by Firebase.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-patients/notifications.png`]} />
    </div>
  ),
};