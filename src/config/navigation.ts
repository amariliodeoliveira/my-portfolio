import type { Link } from "./types";

export const cvNavigationLink = {
  href: "/files/amarilio-de-oliveira-cv.pdf",
  label: "Download CV",
  icon: "line-md:document-list",
  kbd: "d",
  ctaVariant: "primary",
  openInNewTab: true,
  ariaLabel: "Open CV PDF in a new tab",
} as const satisfies Link;

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

    sublinks: [
      {
        href: "/pixi-fireworks",
        label: "PixiJS - Fireworks Presentation",
        icon: "line-md:computer",
        kbd: "s",
      },
    ],
  },
  cvNavigationLink,
] as const;
