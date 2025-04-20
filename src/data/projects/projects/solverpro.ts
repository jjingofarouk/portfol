import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const solverpro: Project = {
  id: 'solverpro',
  category: 'Educational Tech',
  title: 'SolverPro Graphing Calculator',
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
        SolverPro = Your Mathematical Cosmos
      </TypographyP>
      <TypographyP className="font-mono">
        SolverPro is a sleek, web-based graphing calculator powered by the Desmos API, designed to make plotting and exploring mathematical expressions a breeze. Whether you’re graphing parabolas, zooming into functions, or resetting to a clean slate, SolverPro delivers a responsive, user-friendly experience with a nod to my passion for educational tech. Perfect for students, educators, or math enthusiasts, it’s your pocket-sized math lab.
      </TypographyP>
      <ProjectsLinks live="https://solverpro.vercel.app" repo="https://github.com/jjingofarouk/SolverPro" />
      <TypographyH3 className="my-4 mt-8">Interactive Graphing</TypographyH3>
      <p className="font-mono mb-2">
        Plot any mathematical expression, from simple lines to complex functions, and interact with the graph in real-time. The default parabola (`y = x^2`) greets you on load, ready for exploration.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/graph.png`]} />
      <TypographyH3 className="my-4 mt-8">Control Center</TypographyH3>
      <p className="font-mono mb-2">
        Zoom in, zoom out, or reset the calculator with intuitive buttons. The controls are clean, responsive, and designed for seamless use on any device, from desktops to mobiles.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/controls.png`]} />
      <TypographyH3 className="my-4 mt-8">Responsive Design</TypographyH3>
      <p className="font-mono mb-2">
        Built with a mobile-first mindset, SolverPro adapts to any screen size, ensuring a smooth experience whether you’re on a phone, tablet, or laptop.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        SolverPro combines simplicity with power, making math accessible and engaging, with room to customize and extend for advanced use cases.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Interactive graphing with Desmos API</li>
        <li>Zoom in/out and reset functionality</li>
        <li>Default expression (`y = x^2`) for instant use</li>
        <li>Responsive, mobile-first design</li>
        <li>Customizable for additional expressions or features</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Crafted with HTML, CSS, and JavaScript, SolverPro leverages the Desmos API for robust graphing capabilities. The lightweight codebase ensures fast load times, while CSS styles deliver a clean, modern UI with subtle shadows and hover effects. The project is easily extensible, perfect for adding new controls or expressions.
      </p>
      <SlideShow images={[`${BASE_PATH}/solverpro/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        SolverPro is your go-to tool for visualizing math in style. Plot, explore, and conquer equations today!
      </p>
      <TypographyH3 className="my-4 mt-8">Note on Desmos API</TypographyH3>
      <p className="font-mono mb-2">
        SolverPro relies on the Desmos API (v1.10). Ensure a stable internet connection for API access. Future updates could integrate additional APIs or offline capabilities for enhanced functionality.
      </p>
    </div>
  ),
};