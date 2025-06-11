import { PROJECT_SKILLS } from "./projects";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import SlideShow from "@/components/slide-show";
import { ProjectsLinks } from "./projects";

const BASE_PATH = "/assets/projects-screenshots";

export const FreeResume = {
  id: "free-resume",
  category: "Web Development & Productivity",
  title: "FreeResume",
  src: "/assets/projects-screenshots/free-resume/home.png",
  screenshots: [
    "home.png",
    "resume-builder.png",
    "resume-preview.png",
    "resume-import.png",
    "resume-parser.png",
    "features.png",
    "testimonials.png",
    "faq.png",
    "about.png",
    "contact.png",
    "not-found.png"
  ],
  live: "http://free-resume-indol.vercel.app",
  github: "https://github.com/jjingofarouk/free-resume",
  skills: {
    frontend: [
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
      PROJECT_SKILLS.heroicons,
      PROJECT_SKILLS.redux,
      PROJECT_SKILLS.reactPDF
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.vercelAnalytics
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        FreeResume: Helping Ugandans Land Their Dream Jobs
      </TypographyP>
      <TypographyP className="font-mono">
        FreeResume is more than a resume builder—it’s a tool to empower Ugandan job seekers to shine. This Next.js 13.4.4 Progressive Web App (PWA) makes crafting professional, ATS-friendly resumes simple and free. With TypeScript 5.0.4 for rock-solid code, Tailwind CSS 3.3.2 for a vibrant purple-blue gradient UI (#6b46c1 to #3b82f6), and Framer Motion 10.12.16 for smooth animations, I built this app to be intuitive, mobile-first, and accessible. Redux Toolkit 1.9.5 handles state, while @react-pdf/renderer 3.1.10 generates polished PDFs. It’s a project born from a passion to level the playing field for job seekers in Uganda.
      </TypographyP>
      <ProjectsLinks live="http://free-resume-indol.vercel.app" repo="https://github.com/jjingofarouk/free-resume" />
      <TypographyH3 className="my-4 mt-8">Welcoming Home Page</TypographyH3>
      <p className="font-mono mb-2">
        The homepage invites users with a clean, gradient design (#6b46c1 to #3b82f6) and a live resume preview that comes to life with AutoTypingResume. Powered by Next.js 13.4.4 and React 18.2.0, it uses Framer Motion for buttery-smooth transitions and @heroicons/react 2.0.18 icons (like DocumentPlusIcon) to guide users, making it a breeze to start building a resume on any device.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Effortless Resume Builder</TypographyH3>
      <p className="font-mono mb-2">
        The Resume Builder is where the magic happens. Users can input their details and see a real-time preview, thanks to @react-pdf/renderer. Tailwind CSS styles a responsive layout, Framer Motion adds subtle animations, and Redux Toolkit keeps everything in sync. TypeScript ensures every field is rock-solid, so users can focus on crafting their story.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/resume-builder.png`, `${BASE_PATH}/free-resume/resume-preview.png`]} />
      <TypographyH3 className="my-4 mt-8">Smart Resume Import & ATS Checker</TypographyH3>
      <p className="font-mono mb-2">
        Got an existing resume? The Import and Parser pages let users upload it and check ATS compatibility. Built with react-contenteditable 3.3.7 for easy edits and Tailwind CSS for a polished look, these pages use gradient buttons (#6b46c1) and @heroicons/react icons (like UploadIcon) to keep things user-friendly and accessible.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/resume-import.png`, `${BASE_PATH}/free-resume/resume-parser.png`]} />
      <TypographyH3 className="my-4 mt-8">Feature Spotlight</TypographyH3>
      <p className="font-mono mb-2">
        The Features page showcases what makes FreeResume special: real-time previews, ATS optimization, and easy PDF downloads. Tailwind CSS and @heroicons/react icons (like CheckCircleIcon) create a vibrant grid, with Framer Motion animations that make exploring the app’s capabilities feel dynamic and engaging.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/features.png`]} />
      <TypographyH3 className="my-4 mt-8">Voices from Uganda</TypographyH3>
      <p className="font-mono mb-2">
        The Testimonials page shares stories from Ugandan users—students, engineers, and educators—who’ve landed interviews with FreeResume. A Tailwind CSS carousel, animated by Framer Motion, uses gradient accents (#3b82f6) and @heroicons/react icons (like HeartIcon) to build trust and connection.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/testimonials.png`]} />
      <TypographyH3 className="my-4 mt-8">Helpful FAQ</TypographyH3>
      <p className="font-mono mb-2">
        The FAQ page answers user questions in a clear, accordion-style format. Styled with Tailwind CSS and @heroicons/react icons (like QuestionMarkCircleIcon), it uses gradient highlights (#6b46c1) to keep the design cohesive and easy to navigate, with TypeScript ensuring reliable data rendering.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/faq.png`]} />
      <TypographyH3 className="my-4 mt-8">Our Mission</TypographyH3>
      <p className="font-mono mb-2">
        The About page tells the story of FreeResume’s mission to empower Ugandan job seekers. With Tailwind CSS styling, Framer Motion animations, and @heroicons/react icons (like UsersIcon), it blends gradient headers (#6b46c1 to #3b82f6) with a warm, approachable tone to inspire users.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/about.png`]} />
      <TypographyH3 className="my-4 mt-8">Get in Touch</TypographyH3>
      <p className="font-mono mb-2">
        The Contact page offers a simple form for user inquiries, built with React 18.2.0 and real-time validation. Tailwind CSS, gradient buttons (#3b82f6), and @heroicons/react icons (like EnvelopeIcon) create a welcoming vibe, with accessible social links (LinkedIn, GitHub) for WCAG compliance.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/contact.png`]} />
      <TypographyH3 className="my-4 mt-8">Graceful Error Handling</TypographyH3>
      <p className="font-mono mb-2">
        A custom 404 page keeps things friendly with a gradient button (#6b46c1 to #3b82f6) and a “Back to Home” link. Built with Next.js routing and Tailwind CSS, it ensures users never feel lost, no matter where they land.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/not-found.png`]} />
      <TypographyH3 className="my-4 mt-8">What Makes It Special</TypographyH3>
      <p className="font-mono mb-2">
        FreeResume is designed to make job applications easier and more effective, especially for Ugandans.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Real-time resume building with ATS-friendly templates</li>
        <li>Next.js 13.4.4 PWA for fast, offline-capable performance</li>
        <li>PDF generation with @react-pdf/renderer 3.1.10</li>
        <li>Seamless state management using Redux Toolkit 1.9.5</li>
        <li>Engaging animations with Framer Motion 10.12.16</li>
        <li>Accessible UI with @heroicons/react 2.0.18 icons</li>
        <li>Purple-blue gradient design (#6b46c1 to #3b82f6) with Inter font</li>
        <li>Usage insights via Vercel Analytics 1.0.1</li>
        <li>Reliable testing with Jest 29.5.0</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Tech Behind the Scenes</TypographyH3>
      <p className="font-mono mb-2">
        With three years of full-stack experience, I built FreeResume to be robust and user-friendly. Next.js 13.4.4 powers fast rendering, TypeScript 5.0.4 keeps the code tight, and Tailwind CSS 3.3.2 brings the UI to life with a bold gradient palette. Redux Toolkit manages complex state, Framer Motion adds delightful animations, and @react-pdf/renderer creates professional PDFs. Jest and @testing-library/react 14.0.0 ensure reliability, while Vercel Analytics tracks performance. Prettier with prettier-plugin-tailwindcss 0.2.1 keeps the codebase clean, and Vercel’s CI/CD pipeline makes updates a breeze.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <TypographyH3 className="my-4 mt-8">How It Came Together</TypographyH3>
      <p className="font-mono mb-2">
        FreeResume was built with passion and precision, using Next.js 13.4.4 for speed and scalability. TypeScript 5.0.4 ensured error-free coding, while Tailwind CSS 3.3.2 crafted a vibrant, accessible UI. Redux Toolkit streamlined state management, and Framer Motion brought the app to life with animations. @react-pdf/renderer handled PDF exports, with pdfjs-dist 3.7.107 for parsing. Jest testing and Vercel Analytics kept quality and insights high. Deployed on Vercel with GitHub CI/CD, it’s ready to help job seekers shine.
      </p>
      <SlideShow images={[`${BASE_PATH}/free-resume/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        FreeResume is my way of giving back to Uganda’s job seekers, helping them land opportunities with confidence. Check out the live app, dive into the code, and let’s make job applications easier together!
      </p>
    </div>
  )
};
