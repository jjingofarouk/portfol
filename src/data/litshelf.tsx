import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const LitShelf = {
  id: "litshelf",
  category: "Digital Library",
  title: "LitShelf",
  src: "/assets/projects-screenshots/litshelf/home.png",
  screenshots: ["home.png", "book-list.png", "book-details.png", "reading-view.png"],
  live: "https://litshelf.vercel.app",
  github: "https://github.com/jjingofarouk/litshelf",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.mongodb,
      PROJECT_SKILLS.prisma,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        LitShelf = Your Digital Bookshelf
      </TypographyP>
      <TypographyP className="font-mono">
        LitShelf is a Next.js-powered digital library app that brings your reading world to life. Browse, read, and manage books with a clean, book-inspired UI (#4a2c2a to #f5e8d3), offering a seamless experience for book lovers on any device.
      </TypographyP>
      <ProjectsLinks live="https://litshelf.vercel.app" repo="https://github.com/jjingofarouk/litshelf" />
      <TypographyH3 className="my-4 mt-8">Home Page</TypographyH3>
      <p className="font-mono mb-2">
        Dive into a cozy landing page showcasing featured books and personalized recommendations, styled with warm tones and smooth Framer Motion animations.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Book Catalog</TypographyH3>
      <p className="font-mono mb-2">
        Explore a responsive grid of books with filters for genre, author, or ratings, powered by Prisma and MongoDB for fast, dynamic queries.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/book-list.png`]} />
      <TypographyH3 className="my-4 mt-8">Book Details</TypographyH3>
      <p className="font-mono mb-2">
        View rich book profiles with summaries, reviews, and metadata, presented in a clean layout with Tailwind CSS and interactive elements.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/book-details.png`]} />
      <TypographyH3 className="my-4 mt-8">Reading View</TypographyH3>
      <p className="font-mono mb-2">
        Enjoy an immersive reading experience with customizable fonts and themes, optimized for focus and comfort across devices.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/reading-view.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        LitShelf combines functionality with a reader-first design, making it a haven for book enthusiasts.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Dynamic book catalog with advanced filtering</li>
        <li>Personalized reading recommendations</li>
        <li>Immersive reading interface with customization</li>
        <li>Secure user data management with MongoDB</li>
        <li>Responsive, accessible UI for all devices</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with Next.js 13, TypeScript, and Tailwind CSS, LitShelf uses Prisma for MongoDB interactions, Framer Motion for animations, and a Node.js backend for robust data handling.
      </p>
      <SlideShow images={[`${BASE_PATH}/litshelf/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        LitShelf is where stories live. Start your reading journey today!
      </p>
    </div>
  ),
};
