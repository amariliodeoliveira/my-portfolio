export interface Link {
  href: string;
  label: string;
  icon: string;
  kbd: string;
  sublinks?: Link[];
}

export const navigationLinks: Link[] = [
  { href: "/", label: "Home", icon: "line-md:home-md", kbd: "h" },
  { href: "/about-me", label: "About Me", icon: "line-md:account", kbd: "a" },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: "line-md:computer",
    kbd: "s",
    sublinks: [
      {
        href: "/pixi-fireworks",
        label: "PixiJS - Fireworks Presentation",
        icon: "line-md:computer",
        kbd: "s",
      },
    ],
  },
];

export const socialMediaLinks: Link[] = [
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
];
