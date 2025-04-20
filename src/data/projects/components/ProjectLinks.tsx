// src/data/projects/components/ProjectsLinks.tsx
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface ProjectsLinksProps {
  live: string;
  repo?: string;
}

export const ProjectsLinks: FC<ProjectsLinksProps> = ({ live, repo }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
      <Button variant="default" size="sm">
        Visit Website
        <ArrowUpRight className="ml-3 w-5 h-5" />
      </Button>
    </Link>
    {repo && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
        <Button variant="default" size="sm">
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);