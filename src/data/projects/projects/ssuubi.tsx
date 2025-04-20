// src/data/projects/projects/ssuubi.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const ssuubi: Project = {
  id: 'ssuubi',
  category: 'Mental Health Tech',
  title: 'Ssuubi Chatbot',
  src: `${BASE_PATH}/ssuubi/home.png`,
  screenshots: ['home.png', 'chat.png', 'mood.png', 'crisis.png'],
  live: 'https://ssuubi-mental-health-bot.onrender.com',
  github: 'https://github.com/jjingofarouk/ssuubi-mental-health-bot',
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
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Ssuubi = Your Empathetic Mental Health Companion
      </TypographyP>
      <TypographyP className="font-mono">
        Ssuubi is a Flask-powered mental health chatbot that delivers compassionate, intent-driven responses with a sleek, dark-mode UI inspired by clinical precision and cosmic calm. Built to support users through anxiety, depression, or crisis, it leverages AI to detect emotions and provide tailored guidance, reflecting my expertise in medical-tech innovation.
      </TypographyP>
      <ProjectsLinks live="https://ssuubi-mental-health-bot.onrender.com" repo="https://github.com/jjingofarouk/ssuubi-mental-health-bot" />
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
  ),
};