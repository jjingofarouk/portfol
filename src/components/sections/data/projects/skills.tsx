import { SiCss3, SiBootstrap, SiChakraui, SiDocker, SiExpress, SiFirebase,
  SiJavascript, SiPostgresql, SiPrisma, SiPython, SiReactquery, SiSanity,
  SiReactrouter, SiStyledcomponents, SiAxios, SiShadcnui, SiSocketdotio, SiSupabase,
  SiTailwindcss, SiThreedotjs, SiTypescript, SiVuedotjs, SiRedux, SiGit, SiNpm,
  SiGraphql, SiRust, SiKubernetes, SiDeno, SiSvelte, SiAstro, SiBun, SiJest,
  SiMocha, SiCypress, SiRabbitmq, SiTerraform, SiFastapi, SiNextdotjs, SiHtml5,
  SiFontawesome, SiFlask, SiMongodb, SiGoogletranslate, SiAngular, SiEmberdotjs,
  SiBackbonedotjs, SiJquery, SiSass, SiLess, SiWebpack, SiVite, SiGulp, SiGrunt,
  SiBabel, SiEslint, SiPrettier, SiVercel, SiNetlify, SiHeroku, SiDigitalocean,
  SiMicrosoftazure, SiGooglecloud, SiMysql, SiSqlite, SiRedis, SiMariadb,
  SiNeo4J, SiElastic, SiPrometheus, SiGrafana, SiJenkins,
  SiTravisci, SiCircleci, SiGitlab, SiGithubactions, SiAnsible, SiPuppet, SiChef,
  SiNginx, SiApache, SiLinux, SiWindows, SiMacos, SiGatsby, SiHugo,
  SiJekyll, SiNuxtdotjs, SiElectron, SiReact, SiSolidity, SiGo, SiPhp, SiRuby,
  SiTails, SiLaravel, SiSymfony, SiDjango, SiSpring, SiDotnet, SiSwift, SiKotlin,
  SiFlutter, SiReactivex, SiIonic, SiApachecordova, SiTensorflow, SiPytorch,
  SiKeras, SiOpencv, SiPandas, SiNumpy, SiScikitlearn, SiSnowflake, SiDatabricks,
  SiPowerbi, SiTableau, SiLooker, SiFigma, SiAdobexd, SiSketch, SiInvision, SiPostman, SiSwagger, SiIntellijidea, SiPycharm, SiWebstorm,
  SiAndroidstudio, SiXcode, SiUnity, SiUnrealengine, SiBlender, SiC,
  SiCsharp, SiPerl, SiLua, SiR, SiScala, SiElixir, SiHaskell, SiClojure, SiErlang,
  SiDart, SiCrystal, SiZig, SiNixos, SiHomebrew, SiYarn, SiPnpm, SiVitest, SiPlaywright,
  SiTestinglibrary, SiSelenium, SiAppium, SiStorybook, SiChromatic,
  SiBitbucket, SiSourcetree, SiTrello, SiJira, SiConfluence, SiAsana, SiNotion,
  SiSlack, SiDiscord, SiMicrosoftteams, SiZoom, SiWebex,
   SiConsul, SiVault, SiPacker, SiVagrant, SiArgo, SiHelm, SiIstio,
  SiLinkerd, SiKong, SiCloudflare, SiFastly, SiAkamai,
  SiNewrelic, SiDatadog, SiSentry, SiSplunk, SiLogstash
} from 'react-icons/si';

import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaJava, FaAws, FaRust } from 'react-icons/fa';
import { Skill } from './types';

export const PROJECT_SKILLS: Record<string, Skill> = {
  // Frontend Frameworks and Libraries
  react: { title: 'React.js', bg: 'black', fg: 'white', icon: <RiReactjsFill /> },
  vue: { title: 'Vue.js', bg: 'black', fg: 'white', icon: <SiVuedotjs /> },
  angular: { title: 'Angular', bg: 'black', fg: 'white', icon: <SiAngular /> },
  svelte: { title: 'Svelte', bg: 'black', fg: 'white', icon: <SiSvelte /> },
  ember: { title: 'Ember.js', bg: 'black', fg: 'white', icon: <SiEmberdotjs /> },
  backbone: { title: 'Backbone.js', bg: 'black', fg: 'white', icon: <SiBackbonedotjs /> },
  jquery: { title: 'jQuery', bg: 'black', fg: 'white', icon: <SiJquery /> },
  next: { title: 'Next.js', bg: 'black', fg: 'white', icon: <RiNextjsFill /> },
  nuxt: { title: 'Nuxt.js', bg: 'black', fg: 'white', icon: <SiNuxtdotjs /> },
  gatsby: { title: 'Gatsby', bg: 'black', fg: 'white', icon: <SiGatsby /> },
  hugo: { title: 'Hugo', bg: 'black', fg: 'white', icon: <SiHugo /> },
  jekyll: { title: 'Jekyll', bg: 'black', fg: 'white', icon: <SiJekyll /> },

  // Styling and UI Libraries
  css: { title: 'CSS', bg: 'black', fg: 'white', icon: <SiCss3 /> },
  sass: { title: 'Sass', bg: 'black', fg: 'white', icon: <SiSass /> },
  less: { title: 'Less', bg: 'black', fg: 'white', icon: <SiLess /> },
  tailwind: { title: 'Tailwind CSS', bg: 'black', fg: 'white', icon: <SiTailwindcss /> },
  bootstrap: { title: 'Bootstrap', bg: 'black', fg: 'white', icon: <SiBootstrap /> },
  styledcomponents: { title: 'Styled Components', bg: 'black', fg: 'white', icon: <SiStyledcomponents /> },
  chakra: { title: 'Chakra UI', bg: 'black', fg: 'white', icon: <SiChakraui /> },
  shadcn: { title: 'ShadCN UI', bg: 'black', fg: 'white', icon: <SiShadcnui /> },
  mui: { title: 'Material-UI', bg: 'black', fg: 'white', icon: <SiReact /> }, 
  aceternity: { title: 'Aceternity', bg: 'black', fg: 'white', icon: <SiReact /> }, // Custom logo, using React

  // Programming Languages
  js: { title: 'JavaScript', bg: 'black', fg: 'white', icon: <SiJavascript /> },
  ts: { title: 'TypeScript', bg: 'black', fg: 'white', icon: <SiTypescript /> },
  python: { title: 'Python', bg: 'black', fg: 'white', icon: <SiPython /> },
  java: { title: 'Java', bg: 'black', fg: 'white', icon: <FaJava /> },
  go: { title: 'Go', bg: 'black', fg: 'white', icon: <SiGo /> },
  php: { title: 'PHP', bg: 'black', fg: 'white', icon: <SiPhp /> },
  ruby: { title: 'Ruby', bg: 'black', fg: 'white', icon: <SiRuby /> },
  c: { title: 'C', bg: 'black', fg: 'white', icon: <SiC /> },
  csharp: { title: 'C#', bg: 'black', fg: 'white', icon: <SiCsharp /> },
  rust: { title: 'Rust', bg: 'black', fg: 'white', icon: <FaRust /> },
  swift: { title: 'Swift', bg: 'black', fg: 'white', icon: <SiSwift /> },
  kotlin: { title: 'Kotlin', bg: 'black', fg: 'white', icon: <SiKotlin /> },
  dart: { title: 'Dart', bg: 'black', fg: 'white', icon: <SiDart /> },
  scala: { title: 'Scala', bg: 'black', fg: 'white', icon: <SiScala /> },
  elixir: { title: 'Elixir', bg: 'black', fg: 'white', icon: <SiElixir /> },
  haskell: { title: 'Haskell', bg: 'black', fg: 'white', icon: <SiHaskell /> },
  clojure: { title: 'Clojure', bg: 'black', fg: 'white', icon: <SiClojure /> },
  erlang: { title: 'Erlang', bg: 'black', fg: 'white', icon: <SiErlang /> },
  perl: { title: 'Perl', bg: 'black', fg: 'white', icon: <SiPerl /> },
  lua: { title: 'Lua', bg: 'black', fg: 'white', icon: <SiLua /> },
  r: { title: 'R', bg: 'black', fg: 'white', icon: <SiR /> },
  solidity: { title: 'Solidity', bg: 'black', fg: 'white', icon: <SiSolidity /> },
  crystal: { title: 'Crystal', bg: 'black', fg: 'white', icon: <SiCrystal /> },
  zig: { title: 'Zig', bg: 'black', fg: 'white', icon: <SiZig /> },

  // Backend Frameworks
  node: { title: 'Node.js', bg: 'black', fg: 'white', icon: <RiNodejsFill /> },
  express: { title: 'Express', bg: 'black', fg: 'white', icon: <SiExpress /> },
  flask: { title: 'Flask', bg: 'black', fg: 'white', icon: <SiFlask /> },
  django: { title: 'Django', bg: 'black', fg: 'white', icon: <SiDjango /> },
  fastapi: { title: 'FastAPI', bg: 'black', fg: 'white', icon: <SiFastapi /> },
  rails: { title: 'Ruby on Rails', bg: 'black', fg: 'white', icon: <SiTails /> },
  laravel: { title: 'Laravel', bg: 'black', fg: 'white', icon: <SiLaravel /> },
  symfony: { title: 'Symfony', bg: 'black', fg: 'white', icon: <SiSymfony /> },
  spring: { title: 'Spring', bg: 'black', fg: 'white', icon: <SiSpring /> },
  dotnet: { title: '.NET', bg: 'black', fg: 'white', icon: <SiDotnet /> },

  // Databases
  mongodb: { title: 'MongoDB', bg: 'black', fg: 'white', icon: <SiMongodb /> },
  postgres: { title: 'PostgreSQL', bg: 'black', fg: 'white', icon: <SiPostgresql /> },
  mysql: { title: 'MySQL', bg: 'black', fg: 'white', icon: <SiMysql /> },
  sqlite: { title: 'SQLite', bg: 'black', fg: 'white', icon: <SiSqlite /> },
  redis: { title: 'Redis', bg: 'black', fg: 'white', icon: <SiRedis /> },
  mariadb: { title: 'MariaDB', bg: 'black', fg: 'white', icon: <SiMariadb /> },
  neo4j: { title: 'Neo4j', bg: 'black', fg: 'white', icon: <SiNeo4J /> },
  dynamodb: { title: 'DynamoDB', bg: 'black', fg: 'white', icon: <SiJenkins /> },
  couchdb: { title: 'CouchDB', bg: 'black', fg: 'white', icon: <SiLinux /> },

  // Cloud Platforms and Services
  aws: { title: 'AWS', bg: 'black', fg: 'white', icon: <FaAws /> },
  azure: { title: 'Azure', bg: 'black', fg: 'white', icon: <SiMicrosoftazure /> },
  gcp: { title: 'Google Cloud', bg: 'black', fg: 'white', icon: <SiGooglecloud /> },
  firebase: { title: 'Firebase', bg: 'black', fg: 'white', icon: <SiFirebase /> },
  supabase: { title: 'Supabase', bg: 'black', fg: 'white', icon: <SiSupabase /> },
  vercel: { title: 'Vercel', bg: 'black', fg: 'white', icon: <SiVercel /> },
  netlify: { title: 'Netlify', bg: 'black', fg: 'white', icon: <SiNetlify /> },
  heroku: { title: 'Heroku', bg: 'black', fg: 'white', icon: <SiHeroku /> },
  digitalocean: { title: 'DigitalOcean', bg: 'black', fg: 'white', icon: <SiDigitalocean /> },

  // DevOps and Infrastructure
  docker: { title: 'Docker', bg: 'black', fg: 'white', icon: <SiDocker /> },
  kubernetes: { title: 'Kubernetes', bg: 'black', fg: 'white', icon: <SiKubernetes /> },
  terraform: { title: 'Terraform', bg: 'black', fg: 'white', icon: <SiTerraform /> },
  ansible: { title: 'Ansible', bg: 'black', fg: 'white', icon: <SiAnsible /> },
  puppet: { title: 'Puppet', bg: 'black', fg: 'white', icon: <SiPuppet /> },
  chef: { title: 'Chef', bg: 'black', fg: 'white', icon: <SiChef /> },
  jenkins: { title: 'Jenkins', bg: 'black', fg: 'white', icon: <SiJenkins /> },
  travisci: { title: 'Travis CI', bg: 'black', fg: 'white', icon: <SiTravisci /> },
  circleci: { title: 'CircleCI', bg: 'black', fg: 'white', icon: <SiCircleci /> },
  githubactions: { title: 'GitHub Actions', bg: 'black', fg: 'white', icon: <SiGithubactions /> },
  gitlab: { title: 'GitLab CI', bg: 'black', fg: 'white', icon: <SiGitlab /> },
  nginx: { title: 'NGINX', bg: 'black', fg: 'white', icon: <SiNginx /> },
  apache: { title: 'Apache', bg: 'black', fg: 'white', icon: <SiApache /> },
  haproxy: { title: 'HAProxy', bg: 'black', fg: 'white', icon: <SiLinux /> },
  consul: { title: 'Consul', bg: 'black', fg: 'white', icon: <SiConsul /> },
  vault: { title: 'Vault', bg: 'black', fg: 'white', icon: <SiVault /> },
  packer: { title: 'Packer', bg: 'black', fg: 'white', icon: <SiPacker /> },
  vagrant: { title: 'Vagrant', bg: 'black', fg: 'white', icon: <SiVagrant /> },
  argo: { title: 'Argo', bg: 'black', fg: 'white', icon: <SiArgo /> },
  helm: { title: 'Helm', bg: 'black', fg: 'white', icon: <SiHelm /> },
  istio: { title: 'Istio', bg: 'black', fg: 'white', icon: <SiIstio /> },
  linkerd: { title: 'Linkerd', bg: 'black', fg: 'white', icon: <SiLinkerd /> },
  kong: { title: 'Kong', bg: 'black', fg: 'white', icon: <SiKong /> },

  // Testing Frameworks and Tools
  jest: { title: 'Jest', bg: 'black', fg: 'white', icon: <SiJest /> },
  mocha: { title: 'Mocha', bg: 'black', fg: 'white', icon: <SiMocha /> },
  cypress: { title: 'Cypress', bg: 'black', fg: 'white', icon: <SiCypress /> },
  vitest: { title: 'Vitest', bg: 'black', fg: 'white', icon: <SiVitest /> },
  playwright: { title: 'Playwright', bg: 'black', fg: 'white', icon: <SiPlaywright /> },
  testinglibrary: { title: 'Testing Library', bg: 'black', fg: 'white', icon: <SiTestinglibrary /> },
  selenium: { title: 'Selenium', bg: 'black', fg: 'white', icon: <SiSelenium /> },
  appium: { title: 'Appium', bg: 'black', fg: 'white', icon: <SiAppium /> },

  // Build and Package Tools
  webpack: { title: 'Webpack', bg: 'black', fg: 'white', icon: <SiWebpack /> },
  vite: { title: 'Vite', bg: 'black', fg: 'white', icon: <SiVite /> },
  gulp: { title: 'Gulp', bg: 'black', fg: 'white', icon: <SiGulp /> },
  grunt: { title: 'Grunt', bg: 'black', fg: 'white', icon: <SiGrunt /> },
  babel: { title: 'Babel', bg: 'black', fg: 'white', icon: <SiBabel /> },
  eslint: { title: 'ESLint', bg: 'black', fg: 'white', icon: <SiEslint /> },
  prettier: { title: 'Prettier', bg: 'black', fg: 'white', icon: <SiPrettier /> },
  yarn: { title: 'Yarn', bg: 'black', fg: 'white', icon: <SiYarn /> },
  pnpm: { title: 'pnpm', bg: 'black', fg: 'white', icon: <SiPnpm /> },
  npm: { title: 'NPM', bg: 'black', fg: 'white', icon: <SiNpm /> },

  // Version Control and Collaboration
  git: { title: 'Git', bg: 'black', fg: 'white', icon: <SiGit /> },
  bitbucket: { title: 'Bitbucket', bg: 'black', fg: 'white', icon: <SiBitbucket /> },
  sourcetree: { title: 'SourceTree', bg: 'black', fg: 'white', icon: <SiSourcetree /> },

  // Mobile and Cross-Platform Development
  flutter: { title: 'Flutter', bg: 'black', fg: 'white', icon: <SiFlutter /> },
  reactnative: { title: 'React Native', bg: 'black', fg: 'white', icon: <SiReactivex /> },
  ionic: { title: 'Ionic', bg: 'black', fg: 'white', icon: <SiIonic /> },
  cordova: { title: 'Cordova', bg: 'black', fg: 'white', icon: <SiApachecordova /> },
  electron: { title: 'Electron', bg: 'black', fg: 'white', icon: <SiElectron /> },

  // Machine Learning and Data Science
  tensorflow: { title: 'TensorFlow', bg: 'black', fg: 'white', icon: <SiTensorflow /> },
  pytorch: { title: 'PyTorch', bg: 'black', fg: 'white', icon: <SiPytorch /> },
  keras: { title: 'Keras', bg: 'black', fg: 'white', icon: <SiKeras /> },
  opencv: { title: 'OpenCV', bg: 'black', fg: 'white', icon: <SiOpencv /> },
  pandas: { title: 'Pandas', bg: 'black', fg: 'white', icon: <SiPandas /> },
  numpy: { title: 'NumPy', bg: 'black', fg: 'white', icon: <SiNumpy /> },
  scikitlearn: { title: 'Scikit-learn', bg: 'black', fg: 'white', icon: <SiScikitlearn /> },
  transformers: { title: 'Hugging Face Transformers', bg: 'black', fg: 'white', icon: <SiTensorflow /> }, 
  sentencetransformers: { title: 'Sentence Transformers', bg: 'black', fg: 'white', icon: <SiTensorflow /> }, 

  snowflake: { title: 'Snowflake', bg: 'black', fg: 'white', icon: <SiSnowflake /> },
  databricks: { title: 'Databricks', bg: 'black', fg: 'white', icon: <SiDatabricks /> },

  // Business Intelligence and Visualization
  powerbi: { title: 'Power BI', bg: 'black', fg: 'white', icon: <SiPowerbi /> },
  tableau: { title: 'Tableau', bg: 'black', fg: 'white', icon: <SiTableau /> },
  looker: { title: 'Looker', bg: 'black', fg: 'white', icon: <SiLooker /> },

  // API and Networking
  axios: { title: 'Axios', bg: 'black', fg: 'white', icon: <SiAxios /> },
  graphql: { title: 'GraphQL', bg: 'black', fg: 'white', icon: <SiGraphql /> },
  postman: { title: 'Postman', bg: 'black', fg: 'white', icon: <SiPostman /> },
  swagger: { title: 'Swagger', bg: 'black', fg: 'white', icon: <SiSwagger /> },
  socketio: { title: 'Socket.io', bg: 'black', fg: 'white', icon: <SiSocketdotio /> },
  rabbitmq: { title: 'RabbitMQ', bg: 'black', fg: 'white', icon: <SiRabbitmq /> },

  // Content Management Systems
  sanity: { title: 'Sanity', bg: 'black', fg: 'white', icon: <SiSanity /> },
  wordpress: { title: 'WordPress', bg: 'black', fg: 'white', icon: <SiReact /> }, 
  drupal: { title: 'Drupal', bg: 'black', fg: 'white', icon: <SiReact /> }, 
  joomla: { title: 'Joomla', bg: 'black', fg: 'white', icon: <SiReact /> }, 

  // 3D and Animation
  threejs: { title: 'Three.js', bg: 'black', fg: 'white', icon: <SiThreedotjs /> },
  spline: { title: 'Spline', bg: 'black', fg: 'white', icon: <SiThreedotjs /> }, 
  blender: { title: 'Blender', bg: 'black', fg: 'white', icon: <SiBlender /> },

  // Game Development
  unity: { title: 'Unity', bg: 'black', fg: 'white', icon: <SiUnity /> },
  unrealengine: { title: 'Unreal Engine', bg: 'black', fg: 'white', icon: <SiUnrealengine /> },

  // IDEs and Editors
  intellij: { title: 'IntelliJ IDEA', bg: 'black', fg: 'white', icon: <SiIntellijidea /> },
  pycharm: { title: 'PyCharm', bg: 'black', fg: 'white', icon: <SiPycharm /> },
  webstorm: { title: 'WebStorm', bg: 'black', fg: 'white', icon: <SiWebstorm /> },
  androidstudio: { title: 'Android Studio', bg: 'black', fg: 'white', icon: <SiAndroidstudio /> },
  xcode: { title: 'Xcode', bg: 'black', fg: 'white', icon: <SiXcode /> },

  // UI/UX Design Tools
  figma: { title: 'Figma', bg: 'black', fg: 'white', icon: <SiFigma /> },
  adobexd: { title: 'Adobe XD', bg: 'black', fg: 'white', icon: <SiAdobexd /> },
  sketch: { title: 'Sketch', bg: 'black', fg: 'white', icon: <SiSketch /> },
  invision: { title: 'InVision', bg: 'black', fg: 'white', icon: <SiInvision /> },

  // Project Management and Communication
  jira: { title: 'Jira', bg: 'black', fg: 'white', icon: <SiJira /> },
  trello: { title: 'Trello', bg: 'black', fg: 'white', icon: <SiTrello /> },
  confluence: { title: 'Confluence', bg: 'black', fg: 'white', icon: <SiConfluence /> },
  asana: { title: 'Asana', bg: 'black', fg: 'white', icon: <SiAsana /> },
  notion: { title: 'Notion', bg: 'black', fg: 'white', icon: <SiNotion /> },
  slack: { title: 'Slack', bg: 'black', fg: 'white', icon: <SiSlack /> },
  discord: { title: 'Discord', bg: 'black', fg: 'white', icon: <SiDiscord /> },
  msteams: { title: 'Microsoft Teams', bg: 'black', fg: 'white', icon: <SiMicrosoftteams /> },
  zoom: { title: 'Zoom', bg: 'black', fg: 'white', icon: <SiZoom /> },
  webex: { title: 'Webex', bg: 'black', fg: 'white', icon: <SiWebex /> },

  // Monitoring and Observability
  prometheus: { title: 'Prometheus', bg: 'black', fg: 'white', icon: <SiPrometheus /> },
  grafana: { title: 'Grafana', bg: 'black', fg: 'white', icon: <SiGrafana /> },
  elastic: { title: 'Elasticsearch', bg: 'black', fg: 'white', icon: <SiElastic /> },
  logstash: { title: 'Logstash', bg: 'black', fg: 'white', icon: <SiLogstash /> },
  newrelic: { title: 'New Relic', bg: 'black', fg: 'white', icon: <SiNewrelic /> },
  datadog: { title: 'Datadog', bg: 'black', fg: 'white', icon: <SiDatadog /> },
  sentry: { title: 'Sentry', bg: 'black', fg: 'white', icon: <SiSentry /> },
  splunk: { title: 'Splunk', bg: 'black', fg: 'white', icon: <SiSplunk /> },

  // CDN and Performance
  cloudflare: { title: 'Cloudflare', bg: 'black', fg: 'white', icon: <SiCloudflare /> },
  fastly: { title: 'Fastly', bg: 'black', fg: 'white', icon: <SiFastly /> },
  akamai: { title: 'Akamai', bg: 'black', fg: 'white', icon: <SiAkamai /> },

  // Component Libraries and Tools
  storybook: { title: 'Storybook', bg: 'black', fg: 'white', icon: <SiStorybook /> },
  chromatic: { title: 'Chromatic', bg: 'black', fg: 'white', icon: <SiChromatic /> },

  // Operating Systems and Package Managers
  linux: { title: 'Linux', bg: 'black', fg: 'white', icon: <SiLinux /> },
  windows: { title: 'Windows', bg: 'black', fg: 'white', icon: <SiWindows /> },
  macos: { title: 'macOS', bg: 'black', fg: 'white', icon: <SiMacos /> },
  nixos: { title: 'NixOS', bg: 'black', fg: 'white', icon: <SiNixos /> },
  homebrew: { title: 'Homebrew', bg: 'black', fg: 'white', icon: <SiHomebrew /> },

  // Miscellaneous
  redux: { title: 'Redux', bg: 'black', fg: 'white', icon: <SiRedux /> },
  reactquery: { title: 'React Query', bg: 'black', fg: 'white', icon: <SiReactquery /> },
  reactrouter: { title: 'React Router', bg: 'black', fg: 'white', icon: <SiReactrouter /> },
  prisma: { title: 'Prisma', bg: 'black', fg: 'white', icon: <SiPrisma /> },
  deno: { title: 'Deno', bg: 'black', fg: 'white', icon: <SiDeno /> },
  bun: { title: 'Bun', bg: 'black', fg: 'white', icon: <SiBun /> },
  ytdlp: { title: 'yt-dlp', bg: 'black', fg: 'white', icon: <SiReact /> }, 
  googletrans: { title: 'Google Translate', bg: 'black', fg: 'white', icon: <SiGoogletranslate /> },
  html: { title: 'HTML', bg: 'black', fg: 'white', icon: <SiHtml5 /> }
};