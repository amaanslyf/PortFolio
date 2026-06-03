export const projectsData = [
  {
    id: 7,
    title: "JanSahyog : Smart Civic Issue Management Platform",
    shortDescription: "A full-stack civic governance system enabling citizens to report geo-tagged issues and track resolution in real time.",
    fullDescription: "Built a full-stack civic governance system with a React admin portal, React Native (Expo SDK 51) mobile app, Firebase (Auth, Firestore, Storage, Cloud Functions), and Material UI to enable citizens to report geo-tagged issues with photos and track resolution in real time. It provides officials with analytics dashboards, interactive maps, automated issue routing, and push notifications to streamline municipal workflows and improve transparency in governance.",
    image: "/images/jansahyog-ui.png",
    technologies: ["React", "React Native", "Expo SDK 51", "Firebase", "Material UI", "Cloud Functions", "Firestore"],
    category: "web",
    status: "in-progress",
    featured: true,
    links: {
      live: null,
      github: "https://github.com/amaanslyf/JanSahyog",
    },
    metrics: {},
    date: "2026-04-26",
  },
  {
    id: 8,
    title: "SyncPad : Real-Time Collaborative Text Editor",
    shortDescription: "A high-performance collaborative text editor achieving sub-50ms sync latency and conflict-free editing.",
    fullDescription: "Developed a high-performance collaborative text editor using React, Node.js, and Yjs CRDTs, achieving <50ms sync latency and conflict-free editing. Engineered a custom WebSocket server with token-based authentication and a debounced MongoDB persistence strategy to optimize database performance and ensure zero-loss data integrity.",
    image: "/images/syncpad-ui.png",
    technologies: ["React", "Node.js", "Yjs", "CRDTs", "WebSockets", "MongoDB", "Express"],
    category: "web",
    status: "completed",
    featured: true,
    links: {
      live: "https://syncpad-collaborative-editor.vercel.app/",
      github: "https://github.com/amaanslyf/SyncPad---Collaborative-Text-Editor",
    },
    metrics: {},
    date: "2026-04-26",
  },
  {
    id: 1,
    title: "CodeVault: Beginner-Friendly Version Control System",
    shortDescription: "A full-stack, Git-like version control system with a web dashboard and CLI.",
    fullDescription: "Developed a full-stack, Git-like version control system with a web dashboard and CLI for simplified code management. Features include repository creation, file tracking, commit history, issue management, and secure cloud storage (AWS S3, MongoDB Atlas), built using React.js, Node.js/Express.js, and MongoDB.",
    image: "/images/codevault-ui.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3", "CLI", "Version Control"],
    category: "web",
    status: "completed",
    featured: true,
    links: {
      live: "https://code-vault-plum.vercel.app/",
      github: "https://github.com/amaanslyf/CodeVault",
    },
    metrics: {},
    date: "2025-07-30",
  },
  {
    id: 2,
    title: "HuddleUp: Real-Time MERN Video Conferencing Application",
    shortDescription: "A full-stack video conferencing platform with real-time video and chat.",
    fullDescription: "Developed a full-stack video conferencing platform using React, Node.js, and MongoDB, enabling real-time peer-to-peer video and chat with WebRTC, PeerJS, and Socket.IO. Implemented secure JWT authentication and deployed the decoupled application to Vercel and Render.",
    image: "/images/huddleup-ui.png",
    technologies: ["React.js", "Node.js", "MongoDB", "WebRTC", "PeerJS", "Socket.IO", "JWT"],
    category: "web",
    status: "completed",
    featured: true,
    links: {
      live: "https://huddle-up-lilac.vercel.app/",
      github: "https://github.com/amaanslyf/HuddleUp",
    },
    metrics: {},
    date: "2025-08-03",
  },
  {
    id: 3,
    title: "AdvocateIntel : Personal AI Legal Assistant",
    shortDescription: "Developed AI-powered legal assistant using CrewAI framework",
    fullDescription: "Developed AI-powered legal assistant using CrewAI framework with multi-agent system for case intake, IPC section identification, and legal document generation. Integrated Groq LLM for conversational AI and Tavily API for real-time legal research. Built Streamlit frontend with multilingual support (Marathi, Hindi, English)",
    image: "/images/advocateintel-ui.png",
    technologies: ["Streamlit", "Python", "CrewAI", "vectorDB", "langChain", "Tavily", "Groq LLM"],
    category: "web",
    status: "completed",
    featured: true,
    links: {
      live: "https://advocateintel.streamlit.app/",
      github: "https://github.com/amaanslyf/AvocateIntel",
    },
    metrics: {},
    date: "2025-12-06",
  },
  {
    id: 4,
    title: "AISLE : Artificial Intelligence System for Learning & Expression",
    shortDescription: "A full-stack MERN AI chat application",
    fullDescription: "Engineered a full-stack MERN AI chat application, deploying a stateless Node.js/Express RESTful API on Render and a responsive React/Vite frontend on Vercel. The system uses the OpenAI API for real-time conversational AI, with a custom MongoDB schema for persistent, multi-threaded chat history.",
    image: "/images/aisle-ui.png",
    technologies: ["React", "Node", "Express", "MongoDB", "OpenAI API", "RESTful API", "Vercel"],
    category: "web",
    status: "completed",
    featured: false,
    links: {
      live: "https://aisle-chi.vercel.app/",
      github: "https://github.com/amaanslyf/AISLE",
    },
    metrics: {},
    date: "2025-10-06",
  },
  {
    id: 5,
    title: "WanderLust | Full-Stack Web Application",
    shortDescription: "A full-stack vacation rental platform replicating Airbnb's core functionalities.",
    fullDescription: "The 'WanderLust' is a feature-rich full-stack web application built using the MERN stack, replicating the core functionalities of the popular vacation rental platform. It allows users to list, search and book properties, complete with user authentication, image uploads and a responsive UI for seamless user experience.",
    image: "/images/wanderlust-ui.png",
    technologies: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    category: "web",
    status: "completed",
    featured: false,
    links: {
      live: "https://wanderlust-6vlg.onrender.com/listings",
      github: "https://github.com/amaanslyf/Sigma-5.0-MERN/tree/main/MAJORPROJECT",
    },
    metrics: {},
    date: "2025-06-30",
  },
  {
    id: 6,
    title: "YourKabaadiwaala | Online Scrap Dealer Platform",
    shortDescription: "A cutting-edge solution to streamline operations for the scrap dealing industry.",
    fullDescription: "The 'Scrap Dealer' web application is a cutting-edge solution designed to revolutionize the scrap dealing industry by streamlining and modernizing operations for scrap dealers, recyclers, and their customers.",
    image: "/images/kabaadiwaala-ui.png",
    technologies: ["WIX Website Builder", "Business Logic", "User Experience Design"],
    category: "web",
    status: "completed",
    featured: false,
    links: {
      live: "https://example.com", // Add live link here if available
      github: null, // WIX project, no GitHub repo
    },
    metrics: {},
    date: "2024-01-01",
  },
];

// Data for Project Filtering on the Projects Page
export const projectCategories = [
  {
    id: "all",
    label: "All Projects",
    count: projectsData.length,
  },
  {
    id: "web",
    label: "Web Development",
    count: projectsData.filter((p) => p.category === "web").length,
  },
  {
    id: "featured",
    label: "Featured",
    count: projectsData.filter((p) => p.featured).length,
  },
];

// Data for the About Page
export const technicalSkills = {
  programmingLanguages: ["Java", "C++", "Python"],
  webDevelopment: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "React.js",
    "Redux",
    "RESTful APIs",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Authentication and Authorization",
  ],
  dataScience: {
    visualization: [],
    mlDl: [],
    nlp: [],
    statistics: [],
  },
  mlops: [],
};

export const experience = [
  {
    title: "Intern",
    company: "CodeNucleus",
    period: "June 2023 - July 2023",
    description: "Learned Python along with data science fundamentals and practical applications.",
  },
];

export const education = [
  {
    degree: "B-Tech in CSE (AI)",
    institution: "Vishwakarma Institute of Technology, Pune",
    cgpa: "8.83",
    period: "2024 - 2027",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sou.Venutai Chavan Polytechnic, Pune",
    cgpa: "89.94%",
    period: "2022 - 2024",
  },
];

export const achievements = [
  {
    title: "Published Research Paper - Scrap Dealer Web Application",
    description: "Published in the International Journal of Advanced Research in Science, Communication and Technology (IJARSCT).",
    type: "research",
  },
  {
    title: "Published Research Paper - AI-Eye on Campus",
    description: "Published in the International Journal of Innovative Research in Science, Engineering and Technology (IJIRSCET) on detecting smoking via CCTV.",
    type: "research",
  },
  {
    title: "Registered Patent - Real-Time Crowd Insights",
    description: "A system for real-time crowd insights and prediction of crowd in local transport.",
    type: "patent",
  },
  {
    title: "Technical Competition Participant",
    description: "Participated in TECH TITANS 2024, TECHNOTHON 2024, and the Prabal national-level hackathon (GDG).",
    type: "competition",
  },
];