import type { AeoConfig } from "aeo.js";

import { MyJobs } from "../data/jobs.ts";
import { MyProfile } from "../data/profile.ts";
import {
  PIXI_FIREWORKS_REPOSITORY_URL,
  PIXI_FIREWORKS_URL,
} from "./pixiFireworks.ts";
import { resolveSiteUrl } from "./site.ts";

const aboutDescription =
  "Learn about Amarilio de Oliveira, his software engineering career, technical skills, education, and AI-assisted development workflow.";

const pixiFireworksDescription =
  "An XML-driven PixiJS fireworks presentation built with TypeScript, WebGL rendering, modular effects, and frame-rate independent animation.";

function list(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function getHomeContent(): string {
  const currentJob = MyJobs.find((job) => job.endDate === null);

  return `# ${MyProfile.name}

${MyProfile.headline}

## Professional profile

${MyProfile.about.shortBio}

${currentJob ? `${MyProfile.name} currently works as ${currentJob.role} at ${currentJob.company}. ${currentJob.description}` : ""}

## Core expertise

${list(MyProfile.skills.core)}

## Contact and professional profiles

- Website: ${MyProfile.contact.url}
- Location: ${MyProfile.contact.location.city}, ${MyProfile.contact.location.state}, ${MyProfile.contact.location.country}
- GitHub: ${MyProfile.socials.github}
- LinkedIn: ${MyProfile.socials.linkedin}`;
}

function getAboutContent(): string {
  const career = MyJobs.map((job) => {
    const period = `${job.startDate} to ${job.endDate ?? "present"}`;
    return `### ${job.role} at ${job.company} (${period})\n\n${job.description}`;
  }).join("\n\n");

  const education = MyProfile.education
    .map((item) => `- ${item.degree}, ${item.institution} — ${item.status}`)
    .join("\n");

  const languages = MyProfile.languages
    .map((language) => `- ${language.name}: ${language.level}`)
    .join("\n");

  return `# About ${MyProfile.name}

${MyProfile.about.fullBio}

## Career

${career}

## Technical skills

### Frontend and core technologies

${list(MyProfile.skills.core)}

### Backend

${list(MyProfile.skills.backend)}

### UI, UX, and accessibility

${list(MyProfile.skills.uiUx)}

### Infrastructure and delivery

${list(MyProfile.skills.infrastructure)}

## Education

${education}

## Languages

${languages}`;
}

function getPixiFireworksContent(): string {
  return `# PixiJS Fireworks Presentation

The PixiJS Fireworks Presentation is an interactive TypeScript project that renders an XML-driven fireworks show on an HTML5 canvas using PixiJS and WebGL.

## What the project demonstrates

- PixiJS and WebGL rendering for interactive particle effects.
- XML parsing for effect type, color, duration, position, and velocity.
- Rocket and Fountain effects scheduled independently from the browser frame rate.
- A modular TypeScript architecture separating configuration, services, types, utilities, and effects.
- Error handling for external XML data and a continuously looping show timeline.

## Project links

- Live demo: ${PIXI_FIREWORKS_URL}
- Source code: ${PIXI_FIREWORKS_REPOSITORY_URL}`;
}

export function createAeoConfig(siteUrl = MyProfile.contact.url): AeoConfig {
  const normalizedUrl = resolveSiteUrl(siteUrl);

  return {
    title: MyProfile.seo.defaultTitle,
    url: normalizedUrl,
    description: MyProfile.seo.defaultDescription,
    trailingSlash: "never",
    pages: [
      {
        pathname: "/",
        title: MyProfile.seo.defaultTitle,
        description: MyProfile.seo.defaultDescription,
        content: getHomeContent(),
        tags: ["portfolio", "software-engineering", "frontend"],
      },
      {
        pathname: "/about-me",
        title: `About ${MyProfile.name}`,
        description: aboutDescription,
        content: getAboutContent(),
        tags: ["career", "skills", "experience", "education"],
      },
      {
        pathname: "/pixi-fireworks",
        title: "PixiJS Fireworks Presentation",
        description: pixiFireworksDescription,
        content: getPixiFireworksContent(),
        tags: ["pixijs", "typescript", "webgl", "canvas"],
      },
    ],
    generators: {
      robotsTxt: true,
      llmsTxt: true,
      llmsFullTxt: true,
      rawMarkdown: true,
      manifest: true,
      sitemap: true,
      aiIndex: true,
      schema: true,
    },
    aiIndex: {
      maxChunkLength: 4000,
      maxKeywords: 12,
    },
    schema: {
      enabled: true,
      organization: {
        name: MyProfile.name,
        url: normalizedUrl,
        logo: `${normalizedUrl}/img/profile-oficial.jpeg`,
        sameAs: Object.values(MyProfile.socials).filter(Boolean),
      },
      defaultType: "WebPage",
    },
    og: {
      enabled: true,
      image: `${normalizedUrl}${MyProfile.seo.openGraph.image}`,
      type: "website",
    },
    widget: {
      // The Next.js adapter does not inject the widget. Keep it disabled until
      // the site intentionally renders the React widget in its layout.
      enabled: false,
      position: "bottom-right",
    },
  };
}

export const pageMetadata = {
  about: {
    title: `About ${MyProfile.name}`,
    description: aboutDescription,
    pathname: "/about-me",
  },
  pixiFireworks: {
    title: "PixiJS Fireworks Presentation",
    description: pixiFireworksDescription,
    pathname: "/pixi-fireworks",
  },
} as const;
