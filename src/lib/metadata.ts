import type { Metadata } from "next";

import { MyProfile } from "@/data";
import { generateOgImage } from "@/lib/og";

const aeoAlternates: NonNullable<Metadata["alternates"]>["types"] = {
  "text/plain": [
    { url: "/llms.txt", title: "LLM Summary" },
    { url: "/llms-full.txt", title: "Full Content for LLMs" },
  ],
  "application/json": [
    { url: "/docs.json", title: "Documentation Manifest" },
    { url: "/ai-index.json", title: "AI-Optimized Index" },
  ],
};
export function createOpenGraph(): Metadata["openGraph"] {
  const ogImageUrl = generateOgImage(MyProfile.seo.defaultTitle);

  return {
    title: MyProfile.seo.defaultTitle,
    description: MyProfile.seo.defaultDescription,
    url: MyProfile.contact.url,
    siteName: MyProfile.name,

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${MyProfile.seo.defaultTitle} - Dynamic Card`,
      },
    ],

    locale: "en_US",
    type: "website",
  };
}

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
};

export function createPageMetadata({
  title,
  description,
  pathname,
}: PageMetadataOptions): Metadata {
  const url = new URL(pathname, MyProfile.contact.url).toString();
  const image = generateOgImage(title);

  return {
    title,
    description,
    alternates: { canonical: url, types: aeoAlternates },
    openGraph: {
      ...createOpenGraph(),
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(MyProfile.contact.url),
  title: MyProfile.seo.defaultTitle,
  description: MyProfile.seo.defaultDescription,

  authors: [{ name: MyProfile.seo.author }],

  keywords: [...MyProfile.seo.keywords],

  alternates: {
    canonical: MyProfile.contact.url,
    types: aeoAlternates,
  },

  openGraph: createOpenGraph(),
  twitter: {
    card: "summary_large_image",
    title: MyProfile.seo.defaultTitle,
    description: MyProfile.seo.defaultDescription,
    images: [generateOgImage(MyProfile.seo.defaultTitle)],
  },
};
