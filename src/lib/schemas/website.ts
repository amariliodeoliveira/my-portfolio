import { WebSite, WithContext } from "schema-dts";
import { MyProfile } from "@/data/profile";

export const getWebsiteSchema = (): WithContext<WebSite> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: MyProfile.seo.defaultTitle,
    description: MyProfile.seo.defaultDescription,
    url: MyProfile.contact.url,
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
