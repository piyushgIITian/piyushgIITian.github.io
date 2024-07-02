import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sigmared,
  stockr,
  piramal,
  flam,
  sevenwords,
  rainbow,
  chatbot
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "SigmaRed Technologies Inc.",
    icon: sigmared,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Engineered the Sigmared Cyrapid security product, allowing users to create and monitor cyber risk and compliance assessments. Implemented features for uploading policy documents and workbooks, selecting frameworks like ISO27001 and NIS2, and generating AI-driven reports reviewed by Cyrapid agents and human assessors.",
      "Developed a full-stack application using Next.js for a California-based client. This project included GPT integration via Vercel's AI library with Azure OpenAI, and involved designing a database to store GPT history and user activities using Prisma ORM with Azure PostgreSQL. Leveraged various React libraries to enhance user experience, and conducted rigorous testing to optimize both UI and UX. Adhered to professional design and testing standards, and ensured robust security measures including OAuth and secured APIs.",
      "Integrated ChatGPT with ElevenLabs APIs to incorporate streaming audio into GPT output, ensuring precise alignment of voice and text. Utilized Web Audio APIs and WebSockets to achieve seamless synchronization.",
      "Developed a Power BI dashboard for a Florida-based client with automatic 15-day data refresh from Athena using JDBC connector. Implemented best design practices for a multi-page dashboard and incorporated customized filters based on client specifications.",
      "Created a security and monitoring product for a Canadian client, utilizing ReactJS for the front end and Python FastAPI for the backend. Integrated ECharts to visualize security scores and compliance assessment metrics. Ensured secure coding practices and reliable versioning through the use of a private CDN.",
      "Developed a comprehensive full-stack Sigmarapid Automation: AI Compliance and Risk Management platform, utilizing AngularJS and AWS microservices such as Lambda, API Gateway, and Route 53."
    ],
  },
  {
    title: "Backend Developer Internship",
    company_name: "RipeTech Business Pvt Ltd",
    icon: stockr,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Sep 2023",
    points: [
      "Orchestrated the seamless development of Spring Boot APIs, aligning them with evolving feature requirements. Pioneered the inte gration of Loggly, fortifying our logging capabilities and enabling cloud-based log analytics. Additionally, spearheaded the optimiza tion of SQLqueries to alleviate AWS RDSstrain, identifying opportunities to curtail AWS expenses and mitigate recurrent instances of  system overload during peak usage periods.",
      "Instrumental in bolstering system resilience and cost-efficiency through the integration of a Redis cache into our Spring Boot appli cation. Leveraged Amazon EC2 and Redis cluster architecture to ensure robust cache functionality, effectively eliminating system  crashes and alleviating the strain on the database, resulting in enhanced overall system stability."
    ],
  },
  {
    title: "Software Developer Internship",
    company_name: "Piramal Capital and Housing Finance Ltd.",
    icon: piramal,
    iconBg: "#383E56",
    date: "May 2023 - Jul 2023",
    points: [
      "Developed a full-stack web application for Piramal's AWS Parameter Store, utilizing SpringBoot for the backend and Appsmith for the frontend. This system facilitated efficient interaction with AWS Parameter Store, enabling admin users (managers) to manage teams, services, members, and owners with role-based access control.",
      "Created a user-friendly dashboard displaying team-specific service parameters, offering features such as sorting, searching, creating, and comparing parameters. Additionally, implemented the \"rbac-web\" project using AngularJS, enhancing access control with a \"Permissions\" tab for managing permissions. Detailed documentation and instructions were provided for future reference."
    ],
  },
  {
    title: "Software Developer Internship",
    company_name: "Flying Flamingos India Pvt Ltd (Flam)",
    icon: flam,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "During my two-part internship in 2022 and 2023, I engaged in cutting-edge work at the intersection of cloud image recognition, augmented reality, and deep learning. In the first part, I developed a cloud image recognition architecture, akin to Vuforia in Unity 3D, enabling live camera image mapping to videos in a database for immersive AR experiences. I also pioneered a pattern generation algorithm for highly recognizable image targets, optimizing feature points.",
      "In the second part, I extended my expertise by designing a robust Unity avatar system with iframe web app integration and created a customizable 3D avatar ecosystem using Next.js and Three.js. Additionally, I led the implementation of AI motion capture using Media Pipe Pose, converting 2D camera input into realistic 3D motions. Throughout both parts, I leveraged AWS services for storage, AI tasks, and scalable computing while closely collaborating with the team to ensure seamless integration and an immersive user experience."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Piyush proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "7 words AI",
    description:
      "A global, web based learning platform—powered by AI—that enables individuals and organizations to find their purpose by discovering what makes them uniquely remarkable in 7 words or less.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sevenwords,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Rainbow",
    description:
      `
A highly confidential project featuring multiple dashboards that display plots, charts, and tables, designed to provide comprehensive insights into various factors and facilitate data-driven decision-making.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: rainbow,
    source_code_link: "https://github.com/",
  },
  {
    name: "Audio Chatbot",
    description:
      "A user-friendly chat application that leverages ElevenLabs and OpenAI APIs to provide seamless, conversational interactions with advanced AI capabilities.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "elevenlabs",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
