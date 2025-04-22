// src/data/projects/projects/clinicalCalculators.tsx
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Project } from '../types';
import { PROJECT_SKILLS } from '../skills';
import { ProjectsLinks } from '../components/ProjectsLinks';
import SlideShow from '@/components/slide-show';

const BASE_PATH = '/assets/projects-screenshots/clinical-calculators';

export const clinicalCalculators: Project = {
  id: 'clinical-calculators',
  category: 'Healthcare',
  title: 'Wonya!',
  src: `${BASE_PATH}/home.png`,
  screenshots: [
    'home.png',
    'search.png',
    'favorites.png',
    'cardiovascular.png',
    'neurology.png',
    'gastroenterology.png',
    'nephrology.png',
    'obstetrics.png',
    'pulmonary.png',
    'orthopedics.png',
    'icu.png',
    'general.png',
  ],
  live: 'https://clinical-calculators.vercel.app/', // Update with actual live URL if available
  github: 'https://github.com/jjingofarouk/clinical-calculators',
  skills: {
    frontend: [
      PROJECT_SKILLS.js, // Assuming TypeScript usage; update if not used
      PROJECT_SKILLS.reactNative,
      PROJECT_SKILLS.expo,
      PROJECT_SKILLS.reactNavigation,
      PROJECT_SKILLS.tailwind, // If used for styling; update if not
      PROJECT_SKILLS.reanimated,
      PROJECT_SKILLS.gestureHandler,
      PROJECT_SKILLS.reactNativePaper,
      PROJECT_SKILLS.mui,
      PROJECT_SKILLS.asyncStorage,
      PROJECT_SKILLS.chartKit,
      PROJECT_SKILLS.vectorIcons,
      PROJECT_SKILLS.lucide,
    ],
    backend: [], 
  },
  content: (
    <div>
      <TypographyP className="font-mono text-2xl text-center">
        Clinical Calculators: Empowering Healthcare with Precision
      </TypographyP>
      <TypographyP className="font-mono">
        Clinical Calculators is a robust React Native mobile application designed to streamline medical decision-making for healthcare professionals. With over 90 specialized calculators spanning multiple medical specialties, this app delivers accurate, real-time clinical insights in a user-friendly and performant interface. Built with a focus on scalability and usability, it empowers clinicians to make informed decisions on the go.
      </TypographyP>
      <ProjectsLinks
        live="https://clinical-calculators.vercel.app/" // Update with actual live URL
        repo="https://github.com/jjingofarouk/clinical-calculators"
      />
      <p className="font-mono mb-2 mt-8">
        The app’s sleek home screen welcomes users with a dynamic dashboard, offering quick access to specialty categories, a powerful search feature, and personalized favorites, all crafted to enhance clinical efficiency.
      </p>
      <SlideShow images={[`${BASE_PATH}/home.png`]} />
      
      <TypographyH3 className="my-4 mt-8">Technical Stack & Development</TypographyH3>
      <p className="font-mono mb-2">
        Developed using <strong>React Native</strong> and <strong>Expo</strong>, the app ensures cross-platform compatibility for iOS and Android with a single codebase. I leveraged <strong>React Navigation</strong> to implement a hybrid navigation system, combining a drawer for seamless category access with stack navigation for individual calculators, optimizing the user experience for deep navigation hierarchies. The UI is powered by <strong>React Native Paper</strong> and <strong>MUI</strong> components, enhanced with <strong>Tailwind CSS</strong> for responsive, modern styling.
      </p>
      <p className="font-mono mb-2">
        To deliver smooth animations and interactive elements, I integrated <strong>React Native Reanimated</strong> and <strong>Gesture Handler</strong>, ensuring fluid transitions and touch interactions. Data persistence for recent and favorite calculators is handled with <strong>AsyncStorage</strong>, providing a seamless offline experience. Visualizations, such as score breakdowns in certain calculators, are rendered using <strong>React Native Chart Kit</strong> with SVG support via <strong>react-native-svg</strong>.
      </p>
      <p className="font-mono mb-2">
        The app’s iconography is enriched with <strong>Expo Vector Icons</strong> and <strong>Lucide React Native</strong>, ensuring visually consistent and contextually relevant icons for each medical specialty. Additional features like haptic feedback (<strong>Expo Haptics</strong>) and gradient backgrounds (<strong>Expo Linear Gradient</strong>) elevate the user experience, making interactions tactile and engaging.
      </p>
      
      <TypographyH3 className="my-4 mt-8">Search & Favorites</TypographyH3>
      <p className="font-mono mb-2">
        The search functionality, built with a custom filterable FlatList, allows clinicians to quickly locate calculators by name or specialty, handling the extensive catalog of over 90 tools with ease. The favorites system, powered by AsyncStorage, lets users bookmark frequently used calculators for instant access, tailored to their workflow.
      </p>
      <SlideShow images={[`${BASE_PATH}/search.png`, `${BASE_PATH}/favorites.png`]} />
      
      <TypographyH3 className="my-4 mt-8">Specialty Calculators</TypographyH3>
      <p className="font-mono mb-2">
        The app covers a comprehensive range of medical specialties, each with meticulously designed calculators. Below are highlights of key specialties:
      </p>
      
      <TypographyH3 className="my-4">Cardiovascular Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Includes tools like ASCVD Risk, CHADSVASC, and HASBLED scores, built with precise input validation and dynamic result visualization using Chart Kit for risk stratification.
      </p>
      <SlideShow images={[`${BASE_PATH}/cardiovascular.png`]} />
      
      <TypographyH3 className="my-4">Neurology Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Features Glasgow Coma Scale, NIH Stroke Scale, and more, with interactive sliders and pickers from <strong>@react-native-community/slider</strong> and <strong>@react-native-picker/picker</strong> for accurate scoring.
      </p>
      <SlideShow images={[`${BASE_PATH}/neurology.png`]} />
      
      <TypographyH3 className="my-4">Gastroenterology Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Offers calculators like Child-Pugh Score and FIB-4, with real-time input processing and conditional logic to guide clinicians through complex scoring systems.
      </p>
      <SlideShow images={[`${BASE_PATH}/gastroenterology.png`]} />
      
      <TypographyH3 className="my-4">Nephrology Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Includes eGFR and Creatinine Clearance calculators, leveraging precise mathematical computations and user-friendly input fields for renal function assessment.
      </p>
      <SlideShow images={[`${BASE_PATH}/nephrology.png`]} />
      
      <TypographyH3 className="my-4">Obstetrics Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Features Due Date and Apgar Score calculators, with date pickers from <strong>@react-native-community/datetimepicker</strong> for accurate gestational calculations.
      </p>
      <SlideShow images={[`${BASE_PATH}/obstetrics.png`]} />
      
      <TypographyH3 className="my-4">Pulmonary Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Includes BODE Index and CURB-65, with dynamic UI updates and clear result summaries to support respiratory assessments.
      </p>
      <SlideShow images={[`${BASE_PATH}/pulmonary.png`]} />
      
      <TypographyH3 className="my-4">Orthopedics Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Offers tools like Fracture Risk Assessment, designed with intuitive interfaces to simplify musculoskeletal evaluations.
      </p>
      <SlideShow images={[`${BASE_PATH}/orthopedics.png`]} />
      
      <TypographyH3 className="my-4">ICU Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Features critical care tools like APACHE and SOFA scores, optimized for rapid input and high-stakes decision-making in intensive care settings.
      </p>
      <SlideShow images={[`${BASE_PATH}/icu.png`]} />
      
      <TypographyH3 className="my-4">General Calculators</TypographyH3>
      <p className="font-mono mb-2">
        Includes versatile tools like BMR and Caloric Needs calculators, with clean, accessible designs for broad clinical use.
      </p>
      <SlideShow images={[`${BASE_PATH}/general.png`]} />
      
      <p className="font-mono mb-2 my-8">
        With over 90 calculators, Clinical Calculators stands out for its performance, accessibility, and comprehensive coverage of medical specialties. The app’s offline capabilities, smooth animations, and intuitive navigation make it an indispensable tool for healthcare professionals. This project showcases my expertise in building complex, user-centric mobile applications with a robust React Native stack, and I’m proud to have delivered a solution that supports critical clinical workflows.
      </p>
    </div>
  ),
};