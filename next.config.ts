import { withAeo } from "aeo.js/next";
import { env } from "./src/env";

export default withAeo({
  /* config options here */

  aeo: {
    title: env.siteTitle,
    url: env.siteUrl,
    description: env.siteDescription,
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
