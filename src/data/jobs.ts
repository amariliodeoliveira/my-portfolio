import type { Job } from "@/types";

export const MyJobs: readonly Job[] = [
  {
    startDate: "2025-06-02",
    endDate: null,
    company: "Hospedin",
    link: "https://hospedin.com/",
    role: "Software Engineer",
    description:
      "Building and evolving product features for a hospitality management SaaS, working across frontend delivery, API integration, and maintainable React/TypeScript interfaces.",
  },
  {
    startDate: "2025-06-02",
    endDate: "2026-05-31",
    company: "SB Flex",
    link: "https://sbflex.app/",
    role: "Fullstack Engineer",
    description:
      "Delivered fullstack features with React, Next.js, TypeScript, Node.js, and NestJS, combining accessible UI components, REST API integration, backend endpoints, and Jest coverage in documentation-first workflows.",
  },
  {
    startDate: "2023-03-06",
    endDate: "2025-03-03",
    company: "StonePlus - Concrete Design",
    link: undefined,
    role: "Frontend Engineer",
    description:
      "Developed responsive React, Next.js, and TypeScript interfaces with reusable architecture, performance-focused SSR/SSG optimizations, REST integrations, Redux/useContext state management, and GitHub Actions delivery.",
  },
  {
    startDate: "2020-04-01",
    endDate: "2020-07-31",
    company: "A² Design Consulting",
    link: undefined,
    role: "WordPress Developer",
    description:
      "Built a responsive multilingual WordPress site for an architecture consultancy, delivering Portuguese, English, and French experiences with a clean client-editable structure.",
  },
] as const;
