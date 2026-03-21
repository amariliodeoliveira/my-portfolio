import type { Metadata } from "next";
import { MyProfile } from "@/data";
import { generateOgImage } from "@/lib/og";

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

export const baseMetadata: Metadata = {
  title: MyProfile.seo.defaultTitle,
  description: MyProfile.seo.defaultDescription,

  authors: [{ name: MyProfile.seo.author }],

  keywords: [...MyProfile.seo.keywords],

  openGraph: createOpenGraph(),
};
