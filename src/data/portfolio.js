export const personalInfo = {
  name: "Arnav Kumar",
  title: "Full Stack & Mobile Developer",
  location: "Ranchi, Jharkhand",
  phone: "+91-8340565157",
  email: "arnav170905@gmail.com",
  linkedin: "https://www.linkedin.com/in/arnav-kumar-9691a61b4/",
  github: "https://github.com/Arnav1709",
  resume: "https://drive.google.com/file/d/16XkrOpjX2GAt2DHEYVq__IUQvCnq7hu9/view?usp=sharing",
  tagline: "Building beautiful, performant applications with modern tech",
  about: `I'm a passionate software developer currently pursuing B.Tech in Computer Science at BIT Mesra. 
  I specialize in building cross-platform mobile applications with Flutter and full-stack web applications 
  with React and Node.js. I love solving complex problems and creating seamless user experiences.`,
};

export const education = [
  {
    institution: "Birla Institute Of Technology, Mesra",
    degree: "B.Tech Computer Science Engineering",
    duration: "2023 – 2027",
    grade: "CGPA - 8.82",
    icon: "🎓",
  },
  {
    institution: "DAV Public School, Bariatu",
    degree: "Higher Secondary (12th)",
    duration: "2021 – 2023",
    grade: "92.6%",
    icon: "📚",
  },
  {
    institution: "DAV Public School, Bariatu",
    degree: "Secondary (10th)",
    duration: "2019 – 2021",
    grade: "97.8%",
    icon: "📖",
  },
];

export const experience = [
  {
    company: "Flowbee AI",
    role: "App Developer",
    duration: "May 2025 – Present",
    description: "Content intelligence and personal branding application",
    highlights: [
      "Built queue-based background processing for compute-heavy workflows",
      "Reduced app startup time by 70% (15s to 4s) by moving network calls off the UI thread",
      "Designed AI-driven theme and element classification pipeline using LangChain (Claude, OpenAI)",
      "Enabled OTA updates using Shorebird, push notifications via OneSignal",
      "Applied Clean Architecture with MVC and BLoC for predictable state management",
      "Integrated Mixpanel, Sentry, and AWS CloudWatch for analytics and monitoring",
      "Integrated LiveKit voice agent into the Flutter application",
    ],
    tech: [
      "Flutter",
      "Dart",
      "LangChain",
      "AWS",
      "Shorebird",
      "OneSignal",
      "Hive",
      "BLoC",
    ],
  },
];

export const projects = [
  {
    name: "ReWear",
    tagline: "Sustainable Fashion Marketplace",
    description:
      "Full-stack clothing exchange marketplace (React + Express + MongoDB) with typed filters, search, and availability gating.",
    highlights: [
      "Built typed item filters (category/type), search, and availability gating so only approved, in-stock items surface to users",
      "Implemented secure JWT auth with role-aware routing (private vs admin-only) and axios interceptors for token injection & 401 recovery",
      "Delivered item submission UX with rich metadata, client-side validation, and multipart uploads to Cloudinary; new listings auto-marked pending",
      "Built user dashboard aggregating listings, swap requests, and history via concurrent API calls with points-aware redemption flows",
      "Engineered swap lifecycle with validation against self-swaps, availability, and points balance; acceptance auto-updates availability and transfers points",
      "Delivered admin panel with pending-item moderation, user/points management, role toggling, and platform stats secured by admin middleware",
      "Added dark-mode persistence with localStorage, animated landing carousel, and auth-aware navigation",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    color: "emerald",
    icon: "♻️",
    date: "July 2025",
    links: {
      github: "https://github.com/Arnav1709/ReWear",
      live: "https://re-wear-olive.vercel.app/",
    },
  },
  {
    name: "Release CLI",
    tagline: "One-Command Cloud Deployments",
    description:
      "CLI-based deployment tool to deploy Express, Django, Go, and Spring Boot apps to AWS ECS with minimal configuration.",
    highlights: [
      "Built a CLI-based deployment tool to deploy Express, Django, Go, and Spring Boot apps to AWS ECS",
      "Detected frameworks via file analysis and used Gemini AI to generate production-ready Dockerfiles with safe fallback templates",
      "Automated end-to-end AWS infrastructure using AWS SDK, writing idempotent resource creation logic",
      "Reduced deployment steps from 30+ to 3, cutting containerization time by 90% and minimizing errors",
    ],
    tech: ["Node.js", "AWS SDK v3", "Docker", "ECS", "Gemini AI"],
    color: "cyan",
    icon: "🚀",
    date: "June 2025",
    links: {
      npm: "https://www.npmjs.com/package/automatic-deploy",
      github: "https://github.com/Arnav1709/automated-deploy",
    },
  },
  {
    name: "Trackify",
    tagline: "Smart Attendance Manager",
    description:
      "Flutter attendance manager with Firebase authentication, feature gating, and intelligent query assistance.",
    highlights: [
      "Built a Flutter attendance manager with Firebase authentication, feature gating, and structured state handling",
      "Designed user- and subject-wise Firestore schemas with history tracking, bulk updates, and cache-first access",
      "Integrated a Gemini-powered query assistant and Play Billing for premium subscriptions and restore flows",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Gemini AI", "Play Billing"],
    color: "violet",
    icon: "📊",
    date: "January 2025",
    links: {
      github: "https://github.com/Arnav1709/trackify",
    },
  },
  {
    name: "Peacify",
    tagline: "Mental Wellness Companion",
    description:
      "Mental health app featuring AI-powered assessments, chatbot support, and music therapy modules.",
    highlights: [
      "Built a Flutter mental-health app with Firebase email/Google authentication and BLoC state management",
      "Implemented lifestyle-based stress and depression assessments backed by a hosted ML inference service",
      "Developed an AI chatbot and music-therapy module for guided in-app support",
    ],
    tech: ["Flutter", "Firebase", "Python", "Render", "ML"],
    color: "rose",
    icon: "🧘",
    date: "December 2024",
    links: {
      github: "https://github.com/Arnav1709/IEEE_megaProject",
    },
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Dart", level: 90 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "C", level: 75 },
  ],
  frameworks: [
    { name: "Flutter", level: 95 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
  ],
  databases: [
    { name: "Firebase", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "SQL", level: 80 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Linux", level: 80 },
    { name: "Postman", level: 85 },
  ],
};

export const achievements = [
  {
    title: "IEEE MegaProject Finalist",
    description: "Top 5 among 45+ teams",
    icon: "🏆",
  },
  {
    title: "IEEE Coding Contest",
    description: "4th Rank out of 300+ participants",
    icon: "💻",
  },
  {
    title: "Codeforces Round 944",
    description: "Global Rank 2911 among 30K+ participants",
    icon: "🎯",
  },
];

export const responsibilities = [
  {
    role: "Joint Treasurer",
    organization: "IEEE, BIT Mesra",
    duration: "Feb 2024 – Present",
    highlights: [
      "Planned and led a hands-on C++ workshop attended by 400+ students",
      "Managed IEEE recruitment by preparing assessments and selecting top 60 from 400+ applicants",
    ],
  },
];
