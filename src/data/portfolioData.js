// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// Edit this file to update the portfolio without touching components
// ============================================================

export const personal = {
  name: "Thanya M R",
  firstName: "Thanya",
  tagline: "Computer Science Engineer · Full-Stack Developer · AI Enthusiast",
  bio: "I'm a Computer Science and Engineering undergraduate at ACS College of Engineering (VTU), graduating in 2027. I build full-stack web applications, ML-powered systems, and computer vision tools — bridging the gap between cutting-edge AI research and practical software solutions. I've interned at Toyota Kirloskar Motor, participated in an international tech bootcamp in Malaysia, and led teams in hackathons and social impact initiatives.",
  location: "Bengaluru, India",
  email: "thanyaramesh912004@gmail.com",
  phone: "+91 6363598158",
  linkedin: "https://www.linkedin.com/in/thanya-ramesh",
  github: "https://github.com/thanya-ramesh", // Update with actual GitHub URL
  resumeFile: "/resume/Thanya_MR_Resume.pdf", // Place resume in public/resume/
  heroImage: "/images/hero/thanya-hero.jpg",
  currentlyExploring: ["Agentic AI Workflows", "LangChain & RAG Systems", "Production ML Pipelines"],
};

export const education = [
  {
    institution: "ACS College of Engineering (VTU)",
    degree: "B.E. in Computer Science and Engineering",
    period: "Expected 2027",
    location: "Bengaluru, India",
    cgpa: "8.2 / 10.0",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Machine Learning",
    ],
  },
  {
    institution: "Deeksha College",
    degree: "Pre-University Course, Science",
    period: "April 2022",
    location: "Bengaluru, India",
    score: "92%",
    coursework: [],
  },
];

export const skills = {
  "Programming Languages": [
    "Python", "Java", "JavaScript", "TypeScript", "C++", "C"
  ],
  "Frontend Development": [
    "React.js", "HTML5", "CSS3", "JavaScript", "TypeScript"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT Authentication"
  ],
  "Databases": [
    "MongoDB", "MySQL", "SQLite"
  ],
  "AI & Machine Learning": [
    "Machine Learning", "Model Training & Evaluation", "Classification", "Feature Engineering"
  ],
  "Computer Vision": [
    "OpenCV", "MediaPipe"
  ],
  "Generative AI & NLP": [
    "LLM APIs", "Prompt Engineering", "RAG", "Embeddings", "LangChain", "Function Calling", "Agentic Workflows", "NLP"
  ],
  "Data Structures & Algorithms": [
    "Arrays", "Trees", "Graphs", "Sorting", "Searching", "Dynamic Programming", "Complexity Analysis"
  ],
  "Developer Tools": [
    "Git", "GitHub", "Docker", "Linux", "Postman", "VS Code"
  ],
};

export const experience = [
  {
    id: "toyota",
    company: "Toyota Kirloskar Motor",
    role: "Machine Learning and Full-Stack Engineering Intern",
    period: "March 2026 – May 2026",
    location: "Bengaluru, India",
    logo: "/images/logos/toyota.svg", // placeholder
    accent: "#EB0A1E",
    description: "Worked on a production tracking and monitoring system for the Press Shop, combining full-stack development with computer vision and ML to digitalize and improve production KPI visibility.",
    highlights: [
      "Developed a digital production tracking and monitoring system for the Press Shop to improve workflow visibility and production KPI monitoring.",
      "Built OpenCV-based computer vision pipelines to support industrial tracking and automate selected shop-floor checks.",
      "Trained and evaluated machine learning classification models for production-related use cases.",
      "Developed backend services and REST APIs using Node.js and MongoDB to integrate application data with the monitoring dashboard.",
    ],
    technologies: ["Node.js", "MongoDB", "OpenCV", "Machine Learning", "REST APIs", "Express.js", "Python"],
    images: [
      "/images/internships/toyota/toyota-1.jpg",
      "/images/internships/toyota/toyota-2.jpg",
      "/images/internships/toyota/toyota-3.jpg",
    ],
    type: "Internship",
  },
  {
    id: "trion",
    company: "Trion Weblore Technologies Pvt. Ltd.",
    role: "Full-Stack Developer",
    period: "July 2025 – December 2025",
    location: "Bengaluru, India",
    logo: null,
    accent: "#0a7fff",
    description: "Developed and shipped multiple responsive web applications, integrating LLM APIs, RAG pipelines, and ML model endpoints with React frontends and Node.js/FastAPI backends.",
    highlights: [
      "Built and shipped 3+ responsive web applications using React, Node.js and Express.js, integrating REST APIs and client-server functionality.",
      "Integrated LLM APIs into application features using prompt engineering to improve response quality.",
      "Implemented a RAG pipeline using LangChain and vector embeddings so features could answer queries from document databases.",
      "Built FastAPI and Node.js endpoints to serve ML/GenAI model outputs to React frontends, with MongoDB for storage.",
    ],
    technologies: ["React", "Node.js", "Express.js", "FastAPI", "LangChain", "RAG", "LLM APIs", "MongoDB", "Python"],
    images: [],
    type: "Internship",
  },
  {
    id: "usim",
    company: "Universiti Sains Islam Malaysia (USIM)",
    role: "Technology Bootcamp Participant",
    period: "September 2026",
    location: "Malaysia",
    logo: null,
    accent: "#14b8a6",
    description: "Selected to participate in an international technology bootcamp, gaining hands-on experience in Generative AI, LLMs, RAG, and NLP in a collaborative international environment.",
    highlights: [
      "Participated in an international technology bootcamp focused on technical learning and collaborative problem-solving.",
      "Gained practical knowledge of Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Natural Language Processing (NLP).",
      "Developed skills in prompt engineering, embeddings, document retrieval, and building AI-powered applications.",
      "Collaborated with peers from diverse backgrounds to solve real-world technical challenges.",
    ],
    technologies: ["Generative AI", "LLMs", "RAG", "NLP", "Prompt Engineering", "Embeddings"],
    images: [
      "/images/bootcamp/bootcamp-1.jpg",
      "/images/bootcamp/bootcamp-2.jpg",
      "/images/bootcamp/bootcamp-3.jpg",
      "/images/bootcamp/bootcamp-4.jpg",
      "/images/bootcamp/bootcamp-5.jpg",
      "/images/bootcamp/bootcamp-6.jpg",
      "/images/bootcamp/bootcamp-7.jpg",
    ],
    universityImage: "/images/bootcamp/usim-campus.jpg",
    type: "Bootcamp",
  },
];

export const projects = [
  {
    id: "fitvision",
    title: "AI-Powered Fitness Assistant",
    subtitle: "Real-Time Pose Estimation & Workout Tracker",
    category: ["AI/ML", "Computer Vision"],
    year: "2026",
    description: "A real-time AI fitness assistant that uses pose estimation to count workout repetitions, track form, and provide voice-guided exercise feedback — turning any camera into a personal trainer.",
    problem: "Most people lack access to real-time form feedback during workouts, leading to incorrect technique and potential injury.",
    solution: "Built a computer vision pipeline using MediaPipe Pose to detect body landmarks, classify exercises, count repetitions, and alert users to form deviations via voice and visual overlays.",
    features: [
      "Real-time pose estimation with MediaPipe",
      "Automatic repetition counting per exercise",
      "Form feedback and posture deviation alerts",
      "Voice guidance using pyttsx3",
      "Session tracking and workout summary",
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "pyttsx3"],
    image: "/images/projects/fitvision.jpg",
    github: null,
    demo: null,
    accent: "#0a7fff",
  },
  {
    id: "android-malware",
    title: "Android Malware Detector",
    subtitle: "APK Classification with ML & Static Analysis",
    category: ["AI/ML", "Full Stack", "Security"],
    year: "2025",
    description: "A web application that classifies Android APK files as benign or malicious using machine learning and static feature extraction, with a clean React interface for results.",
    problem: "Android malware is increasingly sophisticated and traditional signature-based detection is insufficient for zero-day threats.",
    solution: "Leveraged static feature extraction from APK files and trained a machine learning classifier to detect suspicious patterns, served via a FastAPI backend with a React UI.",
    features: [
      "APK file upload and static feature extraction",
      "ML-based classification (benign / malicious)",
      "Detailed classification results in React UI",
      "Dockerized deployment",
      "REST API endpoints via FastAPI",
    ],
    technologies: ["FastAPI", "React", "TypeScript", "Machine Learning", "Docker", "Python"],
    image: "/images/projects/malware-detector.jpg",
    github: null,
    demo: null,
    accent: "#8b5cf6",
  },
  {
    id: "smart-driving",
    title: "Smart Driving Assistance System",
    subtitle: "Computer Vision for Road Safety",
    category: ["AI/ML", "Computer Vision", "IoT"],
    year: "2026",
    description: "A computer vision system for driver safety that detects lane departure, drowsiness, and obstacles in real-time, sending proactive alerts to reduce road accidents.",
    problem: "Driver fatigue and inattention are leading causes of road accidents, and most vehicles lack affordable real-time safety assistance.",
    solution: "Developed computer vision components using OpenCV and deep learning for lane detection, eye-state drowsiness monitoring, and object recognition with driver alert integration.",
    features: [
      "Real-time lane detection and departure warning",
      "Drowsiness detection via eye-state analysis",
      "Object recognition for pedestrians and vehicles",
      "Driver alert system for detected conditions",
      "IoT-compatible safety notification pipeline",
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "IoT"],
    image: "/images/projects/smart-driving.jpg",
    github: null,
    demo: null,
    accent: "#14b8a6",
  },
  {
    id: "pmsp",
    title: "PMSP Digitalization System",
    subtitle: "Production Management Support Plan — Toyota Internship",
    category: ["Full Stack", "Web Development"],
    year: "2026",
    description: "A full-stack production tracking and monitoring system developed during the Toyota Kirloskar Motor internship to digitalize the Press Shop's manual workflows and improve KPI visibility.",
    problem: "Press Shop operations relied on paper-based records, making real-time monitoring, KPI tracking, and cross-shift reporting inefficient.",
    solution: "Built a web-based digital dashboard with a Node.js/MongoDB backend and integrated computer vision pipelines to automate shop-floor data collection and surface live production KPIs.",
    features: [
      "Real-time production KPI monitoring dashboard",
      "Digital replacement for paper-based PMSP tracking",
      "OpenCV-based computer vision for shop-floor checks",
      "Node.js REST API backend with MongoDB storage",
      "ML classification models for production use cases",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "OpenCV", "Machine Learning", "REST APIs"],
    image: "/images/internships/toyota/toyota-1.jpg",
    github: null,
    demo: null,
    accent: "#EB0A1E",
  },
];

export const achievements = [
  {
    title: "Top 20 Finalist — CODE NEURAL Hackathon",
    description: "Placed in the Top 20 among 200+ participating teams at the CODE NEURAL State-Level Hackathon.",
    icon: "Trophy",
    accent: "#f59e0b",
  },
  {
    title: "150+ LeetCode Problems Solved",
    description: "Solved 150+ problems covering data structures, algorithms, and problem-solving techniques.",
    icon: "Code2",
    accent: "#0a7fff",
  },
  {
    title: "AICTE Social Impact Initiative — Team Leader",
    description: "Coordinated a team to develop a community-focused technology solution for the AICTE Social Impact Initiative.",
    icon: "Users",
    accent: "#14b8a6",
  },
  {
    title: "College Basketball Team Captain",
    description: "Led the college basketball team, demonstrating leadership, coordination, and team management.",
    icon: "Star",
    accent: "#8b5cf6",
  },
];

export const certifications = [
  {
    title: "Generative AI",
    issuer: "Google / DeepLearning.AI",
    year: "2024",
    icon: "Cpu",
  },
  {
    title: "AI Skills Passport",
    issuer: "Microsoft",
    year: "2024",
    icon: "Shield",
  },
  {
    title: "Face Detection using Python and OpenCV",
    issuer: "Online Certification",
    year: "2024",
    icon: "Eye",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Online Certification",
    year: "2023",
    icon: "GitBranch",
  },
];

export const socialActivities = [
  {
    title: "AICTE Social Impact Initiative",
    role: "Team Leader",
    description: "Led a team to develop a community-focused technology solution. Coordinated research, ideation, development, and presentation to drive real-world social impact through technology.",
    image: "/images/social-activities/social-1.jpg",
  },
  {
    title: "Inspiring Young Minds",
    role: "Participant & Contributor",
    description: "Engaged in educational outreach and mentoring activities to inspire the next generation of technologists. Shared knowledge, experiences, and guidance with younger students.",
    image: "/images/social-activities/social-2.jpg",
  },
];

export const teamCollaboration = [
  { image: "/images/team-collaboration/team-1.jpg", caption: "Team collaboration and peer learning" },
  { image: "/images/team-collaboration/team-2.jpg", caption: "Professional networking and workshops" },
  { image: "/images/team-collaboration/team-3.jpg", caption: "Building connections across disciplines" },
  { image: "/images/team-collaboration/team-4.jpg", caption: "Collaborative problem-solving sessions" },
];

export const hackathons = [
  {
    title: "CODE NEURAL State-Level Hackathon",
    description: "Competed among 200+ teams, reaching the Top 20. Developed a technically strong solution under time pressure.",
    result: "Top 20 Finalist",
    image: "/images/hackathons/hackathon-1.jpg",
  },
  {
    title: "Innovation Challenge",
    description: "Collaborated with a cross-functional team to ideate, prototype, and present a technology-driven solution.",
    result: "Participant",
    image: "/images/hackathons/hackathon-2.jpg",
  },
  {
    title: "Technical Competition",
    description: "Engaged in rapid problem-solving and technical development with peers in a competitive environment.",
    result: "Participant",
    image: "/images/hackathons/hackathon-3.jpg",
  },
  {
    title: "Team Hackathon",
    description: "Built a prototype addressing a real-world problem, demonstrating teamwork and fast-paced delivery.",
    result: "Participant",
    image: "/images/hackathons/hackathon-4.jpg",
  },
];

export const sports = [
  {
    title: "College Basketball Club",
    role: "Team Captain",
    description: "Led the college basketball team as captain, building team cohesion, coordinating training schedules, and representing the college in inter-college competitions.",
    image: "/images/sports/sports-1.jpg",
  },
  {
    title: "Basketball Competitions",
    role: "Player",
    description: "Competed in inter-college basketball tournaments, developing teamwork, discipline, and competitive sporting skills.",
    image: "/images/sports/sports-2.jpg",
  },
  {
    title: "Sports Events",
    role: "Participant",
    description: "Active participant in college sports events, balancing athletics with academics and technical pursuits.",
    image: "/images/sports/sports-3.jpg",
  },
  {
    title: "Club Management",
    role: "Club Organizer",
    description: "Contributed to sports club management activities, including event coordination, member engagement, and logistics.",
    image: "/images/sports/sports-4.jpg",
  },
];
