import { Organization, WithContext } from "schema-dts";
import { MyProfile } from "@/data/profile";

export const getOrganizationSchema = (): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: MyProfile.brandName,
    url: MyProfile.contact.url,
    logo: `${MyProfile.contact.url}/img/profile-oficial.jpeg`,
    description: MyProfile.seo.defaultDescription,
    sameAs: Object.values(MyProfile.socials).filter(Boolean),
  };
};
