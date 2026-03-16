import type { Metadata } from "next";
import { env } from "@/env";
import { generateOgImage } from "@/lib/og";

export function createOpenGraph(): Metadata["openGraph"] {
  const ogImageUrl = generateOgImage(env.siteTitle);

  return {
    title: env.siteTitle,
    description: env.siteDescription,
    url: env.siteUrl,
    siteName: env.siteTitle,

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${env.siteTitle} - Dynamic Card`,
      },
    ],

    locale: "en_US",
    type: "website",
  };
}

export const baseMetadata: Metadata = {
  title: env.siteTitle,
  description: env.siteDescription,

  authors: [{ name: env.siteAuthor }],

  keywords: [
    "Software",
    "Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Tailwind CSS",
  ],

  openGraph: createOpenGraph(),
};
