import { WebPage, WithContext } from "schema-dts";

import { MyProfile } from "@/data/profile";

import { getAuthorPublisher, SCHEMA_CONTEXT } from "./shared";

export const getWebPageSchema = (
  url: string,
  title: string,
  description: string,
): WithContext<WebPage> => {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: MyProfile.seo.defaultTitle,
      url: MyProfile.contact.url,
    },
    ...getAuthorPublisher(),
    inLanguage: "en-US",
  };
};
