// src/data/projects/types.ts
export interface Skill {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  live: string;
  github: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode;
}