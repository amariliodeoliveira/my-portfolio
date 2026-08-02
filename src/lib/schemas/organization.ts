import { Organization, WithContext } from "schema-dts";

import { MyProfile } from "@/data/profile";

import { getSameAs, SCHEMA_CONTEXT } from "./shared";

export const getOrganizationSchema = (): WithContext<Organization> => {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Organization",
    name: MyProfile.brandName,
    url: MyProfile.contact.url,
    logo: `${MyProfile.contact.url}/img/profile-oficial.jpeg`,
    description: MyProfile.seo.defaultDescription,
    sameAs: getSameAs(),
  };
};
