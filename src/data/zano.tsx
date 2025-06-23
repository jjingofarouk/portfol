import { ReactNode } from 'react';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
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
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  next: { title: 'Next.js', bg: 'black', fg: 'white', icon: <SiNextdotjs /> },
  aceternity: { title: 'Aceternity UI', bg: 'black', fg: 'white', icon: null },
  tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  sanity: { title: 'Sanity CMS', bg: 'black', fg: 'white', icon: null },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    <Link className="font-mono underline flex gap-2" rel="noopener" target="_blank" href={live}>
      <Button variant="default" size="sm">
        Visit Website
        <ArrowUpRight className="ml-3 w-5 h-5" />
      </Button>
    </Link>
    {repo && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_blank" href={repo}>
        <Button variant="default" size="sm">
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);

export const Zano: Project = {
  id: 'zano',
  category: 'E-commerce',
  title: 'Zano!',
  src: `${BASE_PATH}/zano/home_zano.jpg`,
  screenshots: ['home_zano.jpg'],
  live: 'https://zanoug.vercel.app/',
  github: 'https://github.com/jjingofarouk/Ecommerce-React',
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.aceternity,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [PROJECT_SKILLS.sanity],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Zano! = Step Into Style
      </TypographyP>
      <TypographyP className="font-mono">
        Zano! is an online shoe store with a modern, user-friendly design and smooth animations, making shopping for the latest kicks a breeze.
      </TypographyP>
      <ProjectsLinks live="https://zanoug.vercel.app/" repo="https://github.com/jjingofarouk/Ecommerce-React" />

      <p className="font-mono mb-2 mt-8">
        Discover trending styles, exclusive deals, and curated shoes on the landing page.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/home_zano.jpg`]} />

      <TypographyH3 className="my-4 mt-8">Shop</TypographyH3>
      <p className="font-mono mb-2">
        Browse sneakers, boots, sandals, and more. Filter by size, style, or brand to find your perfect pair.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/shop.jpg`, `${BASE_PATH}/zano/product.jpg`]} />

      <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>
      <p className="font-mono mb-2">
        Sanity CMS powers Zano! to deliver real-time updates for inventory, styles, and deals.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/shoe1.png`, `${BASE_PATH}/zano/shoe2.png`]} />

      <TypographyH3 className="my-4 mt-8">Cart & Checkout</TypographyH3>
      <p className="font-mono mb-2">
        Add shoes to your cart and enjoy a fast and secure checkout process.
      </p>
      <SlideShow images={[`${BASE_PATH}/zano/cart.png`]} />

      <p className="font-mono mb-2 my-8">
        Zano! combines performance and style for a top-tier shopping experience. Find your next favorite pair today.
      </p>
    </div>
  ),
};