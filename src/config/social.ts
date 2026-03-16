import type { Link } from "./types";

export const socialLinks: readonly Link[] = [
  {
    href: "https://www.linkedin.com/in/amariliodeoliveira/",
    label: "LinkedIn",
    icon: "line-md:linkedin",
    kbd: "l",
  },
  {
    href: "https://github.com/amariliodeoliveira/",
    label: "GitHub",
    icon: "line-md:github-loop",
    kbd: "g",
  },
] as const;
