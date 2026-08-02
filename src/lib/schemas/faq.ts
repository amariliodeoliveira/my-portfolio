import { FAQPage, WithContext } from "schema-dts";

import { MyProfile } from "@/data/profile";

import { SCHEMA_CONTEXT } from "./shared";

export const getFAQSchema = (): WithContext<FAQPage> => {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I offer frontend and fullstack development services, specializing in React, Next.js, and TypeScript.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can contact me via email at ${MyProfile.contact.email} or through my social media links.`,
        },
      },
    ],
  };
};
