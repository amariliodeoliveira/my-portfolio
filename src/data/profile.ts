import { MyProfileType } from "@/types";

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
    "Frontend Specialist and Software Engineer with 3+ years of experience building scalable web applications.",
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
      "Greetings! 👋 I'm a passionate Software Engineer with a strong foundation in Frontend Development, a background in Information Systems, and a keen eye for UI/UX — also a trained gastronome with a fine taste for coffee ☕.",
    fullBio: `I've been passionate about technology for as long as I can remember, but it was in my early teens that I first wrote a Hello World— a simple yet defining moment that sparked my deep curiosity about how things work behind the scenes. Since then, I've been on a continuous journey of learning, exploring, and building.

With over three years of professional experience in software development, and more than five years of academic dedication, I've worked with a diverse range of technologies, always striving to refine my skills and embrace new challenges. Problem-solving, clean code, and efficiency are at the core of my approach, and I'm always eager to explore new and innovative solutions.

Beyond coding, I have a strong connection with another world — Gastronomy. As a trained and post-graduated professional in the field, I've developed not only a refined palate but also invaluable soft skills such as attention to detail, adaptability, and teamwork. Whether in the kitchen or in development, I thrive on creativity, precision, and continuous improvement.

Technology and gastronomy may seem like separate worlds, but for me, they share a common thread: the ability to create, transform, and deliver exceptional experiences.`,
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
