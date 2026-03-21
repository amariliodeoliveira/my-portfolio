import { WebPage, WithContext } from "schema-dts";
import { MyProfile } from "@/data/profile";

export const getWebPageSchema = (
  url: string,
  title: string,
  description: string,
): WithContext<WebPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: MyProfile.seo.defaultTitle,
      url: MyProfile.contact.url,
    },
    author: {
      "@type": "Person",
      name: MyProfile.name,
    },
    publisher: {
      "@type": "Person",
      name: MyProfile.name,
    },
    inLanguage: "en-US",
  };
};
