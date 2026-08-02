import { Person, WithContext } from "schema-dts";

import { MyProfile, MyJobs } from "@/data";
import { getCurrentJob } from "@/utils/jobs";

import { getSameAs, SCHEMA_CONTEXT } from "./shared";

export const getPersonSchema = (): WithContext<Person> => {
  const currentJob = getCurrentJob(MyJobs);

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Person",
    name: MyProfile.name,
    givenName: MyProfile.firstName,
    familyName: MyProfile.lastName,
    gender: MyProfile.gender,
    jobTitle: [...MyProfile.roles] as string[],
    url: MyProfile.contact.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: MyProfile.contact.location.city,
      addressRegion: MyProfile.contact.location.state,
      addressCountry: MyProfile.contact.location.countryCode,
    },
    worksFor: currentJob
      ? {
          "@type": "Organization",
          name: currentJob.company,
          url: currentJob.link,
        }
      : undefined,
    sameAs: getSameAs(),
    alumniOf: MyProfile.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: `${edu.degree} at ${edu.institution}`,
    })),
    knowsAbout: [
      ...MyProfile.skills.core,
      ...MyProfile.skills.backend,
      ...MyProfile.skills.uiUx,
    ],
  };
};
