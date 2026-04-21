import { withAeo } from "aeo.js/next";
import { MyProfile } from "./src/data";

export default withAeo({
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],

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
