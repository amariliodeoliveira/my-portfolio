import { withAeo } from "aeo.js/next";
import { MyProfile } from "./src/data";

export default withAeo({
  /* config options here */

  aeo: {
    title: MyProfile.seo.defaultTitle,
    url: MyProfile.contact.url,
    description: MyProfile.seo.defaultDescription,
    generators: {
      robotsTxt: true,
      llmsTxt: true,
      schema: true,
    },
    widget: {
      enabled: true,
      position: "bottom-right",
    },
  },
});
