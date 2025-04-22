import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const carewaveDoctor: Project = {
  id: 'carewave-doctor',
  category: 'telemedicine platform',
  title: 'CareWaveDoctor',
  src: `${BASE_PATH}/carewave/carewave.png`,
  screenshots: ['landing.png'],
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.materialui,
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
  live: 'https://carewave-doctor.vercel.app/',
  github: 'https://github.com/jjingofarouk/CareWave_Doctors',
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        CareWaveDoctor: Empowering Physicians in Telemedicine
      </TypographyP>
      <TypographyP className="font-mono">
        CareWaveDoctor is a comprehensive telemedicine platform that enables doctors to conduct virtual consultations, manage patient records, and schedule appointments seamlessly. Designed with a user-friendly interface, it ensures efficient and effective patient care delivery in a digital environment.
      </TypographyP>
      <ProjectsLinks live="https://carewave-doctor.vercel.app/" repo="https://github.com/jjingofarouk/CareWave_Doctors" />
      <TypographyH3 className="my-4 mt-8">Dashboard</TypographyH3>
      <p className="font-mono mb-2">
        A centralized dashboard providing an overview of upcoming appointments, patient messages, and quick access to essential features.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-doctor/dashboard.png`, `${BASE_PATH}/carewave-doctor/appointments.png`]} />
      <TypographyH3 className="my-4 mt-8">Patient Management</TypographyH3>
      <p className="font-mono mb-2">
        Access and manage detailed patient profiles, including medical history, ongoing treatments, and previous consultation notes.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-doctor/patient-list.png`, `${BASE_PATH}/carewave-doctor/patient-profile.png`]} />
      <TypographyH3 className="my-4 mt-8">Telemedicine Sessions</TypographyH3>
      <p className="font-mono mb-2">
        Conduct secure video consultations with patients, featuring real-time chat and file sharing capabilities.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-doctor/video-call.png`, `${BASE_PATH}/carewave-doctor/chat.png`]} />
      <TypographyH3 className="my-4 mt-8">Appointment Scheduling</TypographyH3>
      <p className="font-mono mb-2">
        Manage your availability and allow patients to book appointments based on your schedule, with automated reminders and notifications.
      </p>
      <SlideShow images={[`${BASE_PATH}/carewave-doctor/schedule.png`, `${BASE_PATH}/carewave-doctor/appointment-details.png`]} />
    </div>
  ),
};