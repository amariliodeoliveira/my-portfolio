import { WebSite, WithContext } from "schema-dts";

import { MyProfile } from "@/data/profile";

import { getAuthorPublisher, SCHEMA_CONTEXT } from "./shared";

export const getWebsiteSchema = (): WithContext<WebSite> => {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    name: MyProfile.seo.defaultTitle,
    description: MyProfile.seo.defaultDescription,
    url: MyProfile.contact.url,
    ...getAuthorPublisher(),
    inLanguage: "en-US",
  };
};
