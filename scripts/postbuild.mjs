import { postBuild } from "aeo.js/next";

import { MyProfile } from "../src/data/profile.ts";

await postBuild({
  title: MyProfile.seo.defaultTitle,
  description: MyProfile.seo.defaultDescription,
  url: process.env.NEXT_PUBLIC_SITE_URL || MyProfile.contact.url,
});
