import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const solverpro: Project = {
  id: 'solverpro',
  category: 'Enterprise Educational Tech',
  title: 'SolverPro Enterprise Graphing Platform',
  src: `${BASE_PATH}/solverpro/home.png`,
  screenshots: ['home.png', 'graph.png', 'controls.png'],
  live: 'https://jjingofarouk.github.io/SolverPro/',
  github: 'https://github.com/jjingofarouk/SolverPro',
  skills: {
    frontend: [
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.js,
    ],
    backend: [],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        SolverPro Enterprise = Advanced Mathematical Visualization
      </TypographyP>
      <TypographyP className="font-mono">
        SolverPro Enterprise is a professional-grade graphing platform powered by the Desmos API, designed for educational institutions and businesses. It combines sophisticated mathematical visualization with an intuitive UI to deliver a comprehensive solution for plotting, analyzing, and sharing complex equations. With its enterprise-ready design, function library management, and export capabilities, SolverPro transforms complex mathematical concepts into accessible visual representations for students, educators, researchers, and professionals.
      </TypographyP>
      <ProjectsLinks live="https://solverpro.vercel.app" repo="https://github.com/jjingofarouk/SolverPro" />
      <TypographyH3 className="my-4 mt-8">Professional Function Library</TypographyH3>
      <p className="font-mono mb-2">
        Manage multiple functions with color-coded organization in the interactive sidebar. Instantly access standard functions (y = x², sin(x), log(x)) or create custom expressions with real-time visualization. Click any function to highlight it in the graph.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/graph.png`]} />
      <TypographyH3 className="my-4 mt-8">Enterprise-Grade Controls</TypographyH3>
      <p className="font-mono mb-2">
        The advanced control panel features precision zooming, workspace management, and export capabilities. Interactive tooltips provide guidance, while the modern UI with subtle animations ensures a premium user experience suitable for professional environments.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/controls.png`]} />
      <TypographyH3 className="my-4 mt-8">Responsive Enterprise Design</TypographyH3>
      <p className="font-mono mb-2">
        Built with a sophisticated responsive architecture, SolverPro Enterprise adapts seamlessly across devices while maintaining its professional appearance. The carefully crafted interface uses modern UI principles with consistent spacing, shadows, and typography to create a premium look and feel.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Enterprise Features</TypographyH3>
      <p className="font-mono mb-2">
        SolverPro Enterprise goes beyond basic graphing to deliver a complete solution for mathematical visualization needs:
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Interactive function library with color-coded organization</li>
        <li>Workspace saving and export capabilities for documentation</li>
        <li>Professional UI with intuitive navigation and tooltips</li>
        <li>Responsive design optimized for all devices</li>
        <li>Advanced graph manipulation and visualization tools</li>
        <li>Enterprise-ready architecture for institutional deployment</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Excellence</TypographyH3>
      <p className="font-mono mb-2">
        SolverPro Enterprise leverages modern web technologies with an architecture designed for performance and scalability. The clean, modular codebase ensures easy maintenance and extension, while the optimized Desmos API integration provides powerful mathematical capabilities with minimal overhead. Custom animations and transitions create a polished user experience worthy of enterprise environments.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        SolverPro Enterprise: Where mathematical precision meets professional design.
      </p>
      <TypographyH3 className="my-4 mt-8">Integration & Deployment</TypographyH3>
      <p className="font-mono mb-2">
        SolverPro Enterprise is designed for seamless integration into existing educational platforms and corporate environments. With its API-driven architecture based on Desmos v1.10, it can be deployed as a standalone application or embedded within larger systems. Future enterprise roadmap includes enhanced collaboration features, authentication integration, and advanced data export options.
      </p>
    </div>
  ),
};