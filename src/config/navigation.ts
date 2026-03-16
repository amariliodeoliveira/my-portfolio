import type { Link } from "./types";

export const navigationLinks: readonly Link[] = [
  {
    href: "/",
    label: "Home",
    icon: "line-md:home-md",
    kbd: "h",
    showInNavbar: false,
  },
  {
    href: "/about-me",
    label: "About Me",
    icon: "line-md:account",
    kbd: "a",
  },
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
      },
    ],
  },
] as const;
