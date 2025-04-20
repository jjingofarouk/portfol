// src/data/projects/projects/tubesnap.ts
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots';

export const tubesnap: Project = {
  id: 'tubesnap',
  category: 'Media Downloader',
  title: 'TubeSnap',
  src: `${BASE_PATH}/tubesnap/home.png`,
  screenshots: ['home.png', 'download.png', 'features.png'],
  live: 'https://tubesnap-vko7.onrender.com',
  github: 'https://github.com/jjingofarouk/TubeSnap',
  skills: {
    frontend: [
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.bootstrap,
      PROJECT_SKILLS.fontAwesome,
    ],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.flask,
      PROJECT_SKILLS.ytDlp,
    ],
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        TubeSnap = Your Cosmic YouTube Downloader
      </TypographyP>
      <TypographyP className="font-mono">
        TubeSnap is a Flask-powered YouTube downloader that snaps videos and audio off the platform with stellar speed and precision. Has a sleek, YouTube-red interface that offers high-quality downloads up to 1080p and audio extraction in MP3 or WAV. Blends my medical-tech finesse with user-centric design. I got inspired to create his tool to more easily download physiology videos.
      </TypographyP>
      <ProjectsLinks live="https://tubesnap-vko7.onrender.com" repo="https://github.com/jjingofarouk/TubeSnap" />
      <TypographyH3 className="my-4 mt-8">Interstellar Interface</TypographyH3>
      <p className="font-mono mb-2">
        Land on a vibrant, red-accented UI (#FF0000) with a pulsating download button. Enter a YouTube URL, pick your format, and watch TubeSnap work its magic—fast, secure, and ad-free.
      </p>
      <SlideShow images={[`${BASE_PATH}/tubesnap/home.png`]} />
      <TypographyH3 className="my-4 mt-8">Download Command Center</TypographyH3>
      <p className="font-mono mb-2">
        Choose video resolutions (1080p, 720p, 480p, 360p) or extract audio in MP3/WAV. Powered by yt-dlp, downloads are as smooth as a feather! Has real-time feedback via a spinning loader.
      </p>
      <SlideShow images={[`${BASE_PATH}/tubesnap/download.png`]} />
      <TypographyH3 className="my-4 mt-8">Feature Constellation</TypographyH3>
      <p className="font-mono mb-2">
        From high-speed downloads to a responsive feature grid showcasing speed, quality, and security, TubeSnap’s design ensures a seamless experience across devices. has modern hover animations for cosmic flair.
      </p>
      <SlideShow images={[`${BASE_PATH}/tubesnap/features.png`]} />
      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <p className="font-mono mb-2">
        Engineered for media enthusiasts. TubeSnap delivers a lightweight, secure, and intuitive platform that helped me improve my expertise in crafting impactful tech solutions at the start of my software career.
      </p>
      <ul className="font-mono list-disc list-inside mb-2">
        <li>Video downloads in MP4 up to 1080p</li>
        <li>Audio extraction in MP3 or WAV</li>
        <li>Responsive UI with Bootstrap and Font Awesome</li>
        <li>Fast downloads via yt-dlp</li>
        <li>Safe, ad-free experience with error handling</li>
      </ul>
      <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
      <p className="font-mono mb-2">
        Built with Flask and Python 3.12, TubeSnap leverages yt-dlp for robust downloads. The frontend uses HTML, CSS, Bootstrap, and Font Awesome for a polished, mobile-first UI. Asynchronous fetch ensures smooth file delivery, while the Inter font adds clinical elegance.
      </p>
      <SlideShow images={[`${BASE_PATH}/tubesnap/home.png`]} />
      <p className="font-mono mb-2 mt-5 text-center">
        TubeSnap is your warp-speed portal to YouTube content. Snap videos and audio with ease!
      </p>
      <TypographyH3 className="my-4 mt-8">Note on Usage</TypographyH3>
      <p className="font-mono mb-2">
        TubeSnap respects YouTube’s terms of service. Use it for personal, non-commercial purposes. Ensure valid URLs and sufficient server capacity for high-quality downloads.
      </p>
    </div>
  ),
};