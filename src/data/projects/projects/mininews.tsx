// src/data/projects/projects/mininews.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const mininews: Project = {
  id: 'mininews',
  category: 'News Aggregation',
  title: 'MiniNews',
  src: `${BASE_PATH}/mininews/home.png`,
  screenshots: ['home.png', 'filters.png', 'article.png', 'saved.png'],
  live: 'https://www.mangunews.vercel.app',
  github: 'https://github.com/jjingofarouk/MiniNews',
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.reactRouter,
      PROJECT_SKILLS.styledComponents,
      PROJECT_SKILLS.axios,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        MiniNews = Your Cosmic News Portal
      </TypographyP>
      <TypographyP className="font-mono">
        MiniNews is a React-powered news aggregator that beams global headlines to your screen with a sleek, black-and-white UI inspired by Grok and ChatGPT. Filter by category, country, or source, search for breaking stories, and save articles for later—all with a nod to clinical precision from my medical roots.
      </TypographyP>
      <ProjectsLinks live="https://www.mangunews.vercel.app" repo="https://github.com/jjingofarouk/MiniNews" />
      <TypographyH3 className="my-4 mt-8">Stellar Headlines Grid</TypographyH3>
      <p className="font-mono mb-2">
        Land on a responsive grid of headlines, each card pulsing with images, titles, and snippets. It’s like flipping through a digital newspaper, but make it futuristic.
      </p>
      <SlideShow images={[`${BASE_PATH}/mininews/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Hyperdrive Filters</TypographyH3>
      <p className="font-mono mb-2">
        Zoom through news with filters for categories (business, tech), countries, languages, and sources. Powered by a slick UI, it’s as intuitive as a stethoscope.
      </p>
      <SlideShow images={[`${BASE_PATH}/mininews/filters.png`]} />
      <TypographyH3 className="my-4 mt-8">Article Deep Dive</TypographyH3>
      <p className="font-mono mb-2">
        Click a headline to explore full articles (well, as full as NewsAPI’s free tier allows). Clean typography and subtle animations keep you locked in.
      </p>
      <SlideShow images={[`${BASE_PATH}/mininews/article.png`]} />
      <TypographyH3 className="my-4 mt-8">Saved Articles Vault</TypographyH3>
      <p className="font-mono mb-2">
        Bookmark your favorite stories with a tap. The “Saved” section is your personal news archive, ready for a quick revisit.
      </p>
      <SlideShow images={[`${BASE_PATH}/mininews/saved.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Built for news junkies, MiniNews delivers a fast, responsive experience with a medical-tech twist, reflecting my dual expertise.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Dynamic headline grid with pagination</li>
        <li>Advanced filtering by category, country, and source</li>
        <li>Real-time search with keyword matching</li>
        <li>Local storage for saving articles</li>
        <li>Minimalistic UI with smooth transitions</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Crafted with React 18, styled-components for pixel-perfect styling, and Axios for NewsAPI calls. React Router powers seamless navigation, while the Inter font adds a clinical yet modern vibe. The Context API keeps state management as smooth as a surgical procedure.
      </p>
      <SlideShow images={[`${BASE_PATH}/mininews/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        MiniNews is your warp-speed gateway to global stories. Dive in and explore the news universe!
      </p>
      <TypographyH3 className="my-4 mt-8">Note on NewsAPI</TypographyH3>
      <p className="font-mono mb-2">
        MiniNews uses NewsAPI’s free tier, which caps requests at 100/day and limits article content. If headlines don’t load, the API’s limit may be hit. Swap in a paid key or RSS feeds for uninterrupted access.
      </p>
    </div>
  ),
};