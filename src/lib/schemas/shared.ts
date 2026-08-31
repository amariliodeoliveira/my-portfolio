import { MyProfile } from "@/data/profile";

export const SCHEMA_CONTEXT = "https://schema.org" as const;

/**
 * website.ts and webpage.ts both attribute the site to the same person as
 * both author and publisher — kept in one place so they can't drift apart.
 */
export function getAuthorPublisher() {
  const person = { "@type": "Person" as const, name: MyProfile.name };
  return { author: person, publisher: person };
}

export function getSameAs(): string[] {
  return Object.values(MyProfile.socials).filter(Boolean);
}

export function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replaceAll("<", String.raw`\u003c`);
}
