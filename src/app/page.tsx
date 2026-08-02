import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";
import { MyProfile } from "@/data";
import {
  getPersonSchema,
  getWebsiteSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getFAQSchema,
} from "@/lib/schemas";

export default function Home() {
  // Static, fixed-order list — index keys are safe here since it's never
  // reordered or filtered.
  const schemas = [
    getPersonSchema(),
    getWebsiteSchema(),
    getOrganizationSchema(),
    getWebPageSchema(
      MyProfile.contact.url,
      MyProfile.seo.defaultTitle,
      MyProfile.seo.defaultDescription,
    ),
    getFAQSchema(),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main>
        <Hero />
        <NavigatorModal />
      </main>
      <Footer variant="overlay" />
    </>
  );
}
