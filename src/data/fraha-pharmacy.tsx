import { ReactNode } from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiSqlite, SiTailwindcss, SiMui, SiChakraui, SiSocketdotio, SiFramer } from 'react-icons/si';
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
    icon: ReactNode;
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
    react: { title: 'React', bg: 'black', fg: 'white', icon: <SiReact /> },
    node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <SiNodedotjs /> },
    express: { title: 'Express', bg: 'black', fg: 'white', icon: <SiExpress /> },
    sqlite: { title: 'SQLite', bg: 'black', fg: 'white', icon: <SiSqlite /> },
    tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
    mui: { title: 'Material UI', bg: 'black', fg: 'white', icon: <SiMui /> },
    chakra: { title: 'Chakra UI', bg: 'black', fg: 'white', icon: <SiChakraui /> },
    socketio: { title: 'Socket.io', bg: 'black', fg: 'white', icon: <SiSocketdotio /> },
    framer: { title: 'Framer Motion', bg: 'black', fg: 'white', icon: <SiFramer /> },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
    return (
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
                        GitHub
                        <ArrowUpRight className="ml-3 w-5 h-5" />
                    </Button>
                </Link>
            )}
        </div>
    );
};

export const FrahaPharmacy: Project = {
    id: 'fraha-pharmacy',
    category: 'Pharmacy Management / POS',
    title: 'Fraha Pharmacy POS',
    src: `${BASE_PATH}/fraha-pharmacy/home.png`,
    screenshots: ['home.png', 'sales.png', 'inventory.png', 'reports.png'],
    live: 'https://fraha-pharmacy.onrender.com', // Placeholder if no live link provided
    github: 'https://github.com/jjingofarouk/fraha-pharmacy',
    skills: {
        frontend: [
            PROJECT_SKILLS.react,
            PROJECT_SKILLS.mui,
            PROJECT_SKILLS.chakra,
            PROJECT_SKILLS.framer,
        ],
        backend: [
            PROJECT_SKILLS.node,
            PROJECT_SKILLS.express,
            PROJECT_SKILLS.sqlite,
            PROJECT_SKILLS.socketio,
        ],
    },
    content: (
        <div>
            <TypographyP className="font-mono text-2xl text-center">
                Fraha Pharmacy: Comprehensive Fullstack POS System
            </TypographyP>
            <TypographyP className="font-mono">
                Fraha Pharmacy is a robust, enterprise-grade Point of Sale and Management system specifically designed for modern pharmacies. It streamlines operations by integrating inventory management, real-time sales tracking, and automated financial reporting into a seamless, high-performance interface.
            </TypographyP>
            <ProjectsLinks live="https://fraha-pharmacy.onrender.com" repo="https://github.com/jjingofarouk/fraha-pharmacy" />

            <TypographyH3 className="my-4 mt-8">Real-time Inventory & Sales</TypographyH3>
            <p className="font-mono mb-2">
                The system features a dual-synced architecture using Socket.io, ensuring that stock levels and sales data are updated instantly across all connected terminals. Automated low-stock alerts and expiration date tracking help maintain optimal inventory levels.
            </p>

            <TypographyH3 className="my-4 mt-8">Advanced Reporting Dashboard</TypographyH3>
            <p className="font-mono mb-2">
                A comprehensive analytics engine provides deep insights into sales performance, profit margins, and peak transaction times. Data is visualized using interactive charts and can be exported for external accounting.
            </p>

            <TypographyH3 className="my-4 mt-8">Thermal Printing & Offline Resilience</TypographyH3>
            <p className="font-mono mb-2">
                Support for ESC/POS thermal printers allows for professional receipt generation. The system is designed to handle network interruptions gracefully, ensuring the pharmacy remains operational even in challenging local network conditions.
            </p>

            <TypographyH3 className="my-4 mt-8">Technical Architecture</TypographyH3>
            <p className="font-mono mb-2">
                Built on a modern stack comprising React for the frontend and a Node.js/Express backend. Data integrity is managed by SQLite, providing a lightweight yet powerful database solution suitable for both local and cloud deployments.
            </p>

            <ul className="font-mono list-disc list-inside mb-2 mt-4">
                <li>Automated inventory and batch tracking</li>
                <li>ESC/POS Thermal printer integration</li>
                <li>Real-time synchronization via Socket.io</li>
                <li>Comprehensive financial and tax reporting</li>
                <li>Secure role-based access control (RBAC)</li>
                <li>Express rate-limiting and JWT authentication</li>
            </ul>
        </div>
    ),
};
