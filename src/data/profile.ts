import type { MyProfileType } from "@/types";

export const MyProfile: MyProfileType = {
  name: "Amarilio de Oliveira",
  firstName: "Amarilio",
  lastName: "de Oliveira",
  brandName: "AdO",
  gender: "Male",
  nationality: "Brazilian",
  birthDate: "1994-07",
  roles: ["Frontend Engineer", "Fullstack Engineer", "Software Engineer"],
  headline:
    "Frontend Specialist and Software Engineer with 4+ years of experience building scalable web applications.",
  contact: {
    email: "amarilioalencar@gmail.com",
    phone: "+55 85 99285-2448",
    url: "https://amarilio.tech",
    location: {
      city: "Fortaleza",
      state: "Ceará",
      country: "Brazil",
      countryCode: "BR",
      region: "South America",
      availability: "Available for Remote",
    },
  },
  socials: {
    github: "https://github.com/amariliodeoliveira",
    linkedin: "https://linkedin.com/in/amariliodeoliveira",
  },
  about: {
    title: "Turning Coffee Into Code!",
    shortBio:
      "Greetings! 👋 I'm a Software Engineer with a frontend heart and fullstack hands, using AI as part of my development process to build product interfaces, APIs, and reliable web experiences with a suspicious amount of coffee ☕.",
    fullBio: `I've been curious about technology for as long as I can remember. In my early teens, I wrote my first Hello World, and what started as curiosity about how things worked behind the scenes eventually became my career.

Today, I'm a Software Engineer with 4+ years of professional experience and a strong frontend focus. I work primarily with React, Next.js, and TypeScript, while also contributing across the stack with Ruby on Rails, Node.js, and NestJS. My experience ranges from user-facing interfaces and complex product flows to REST APIs, integrations, automated testing, and the engineering practices that support reliable software delivery.

I'm also interested in how software development is evolving with AI. I use AI-assisted workflows and Spec-Driven Development to support implementation, code review, documentation, and software quality, treating AI as part of the engineering process rather than a replacement for engineering judgment.

Before software became my profession, I trained in Gastronomy, a very different field that still influences the way I work today. It taught me creativity, attention to detail, adaptability, teamwork, and how much execution matters when turning an idea into something people actually experience.

Whether I'm refining an interface, understanding an unfamiliar codebase, or designing a better development workflow, I enjoy solving problems, learning how things work, and turning complexity into something useful.`,
  },
  skills: {
    core: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Node.js",
    ],
    uiUx: [
      "Radix UI",
      "daisyUI",
      "Figma",
      "Responsive Design",
      "UI Consistency",
      "WCAG Accessibility",
    ],
    stateManagement: ["Context API", "Redux", "Zustand"],
    backend: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "RESTful APIs"],
    infrastructure: [
      "AWS (SDK/S3)",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Semantic Versioning",
    ],
    testing: ["Jest", "Unit Testing", "Integration Testing"],
    tools: ["Git", "ESLint", "Prettier", "Husky", "Lighthouse", "Agile/Scrum"],
    others: ["Gastronomy", "DJing & Music Production"],
  },
  education: [
    {
      degree: "Bachelor's Degree in Information Systems",
      institution: "UniFanor Wyden",
      location: "Remote",
      startDate: "2021",
      endDate: "2026",
      status: "Expected Graduation: December 2026",
    },
    {
      degree: "Fullstack Development Certification",
      institution: "Digital College",
      location: "Fortaleza, Brazil",
      startDate: "2022-09",
      endDate: "2023-10",
      status: "Completed",
    },
    {
      degree: "Degree in Gastronomy",
      institution: "UniFanor Wyden",
      location: "Fortaleza, Brazil",
      status: "Post-graduated professional",
    },
  ],
  languages: [
    { name: "Portuguese", level: "Native", code: "pt-BR" },
    { name: "English", level: "C1 (Advanced)", code: "en-US" },
    { name: "Spanish", level: "B2 (Upper Intermediate)", code: "es-ES" },
  ],
  seo: {
    defaultTitle: "Amarilio de Oliveira | Software Engineer",
    defaultDescription:
      "Frontend Specialist & Software Engineer based in Fortaleza, Brazil.",
    author: "Amarilio de Oliveira",
    keywords: [
      "React Developer",
      "Next.js Specialist",
      "TypeScript Engineer",
      "Fullstack Developer Fortaleza",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      image: "/og-image.jpg",
    },
  },
} as const;
