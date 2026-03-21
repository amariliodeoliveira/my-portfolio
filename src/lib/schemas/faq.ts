import { FAQPage, WithContext } from "schema-dts";

export const getFAQSchema = (): WithContext<FAQPage> => {
  return {
    "@context": "https://schema.org",
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
          text: "You can contact me via email at amarilioalencar@gmail.com or through my social media links.",
        },
      },
    ],
  };
};
