import AboutHero from "@/components/about-me/AboutHero";
import Footer from "@/components/layout/Footer";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";
import { pageMetadata } from "@/config/aeo";
import { MyProfile } from "@/data";
import { createPageMetadata } from "@/lib/metadata";
import {
  getPersonSchema,
  getWebPageSchema,
  serializeJsonLd,
} from "@/lib/schemas";

export const metadata = createPageMetadata(pageMetadata.about);

export default function AboutPage() {
  const url = `${MyProfile.contact.url}${pageMetadata.about.pathname}`;
  const schemas = [
    getPersonSchema(),
    getWebPageSchema(
      url,
      pageMetadata.about.title,
      pageMetadata.about.description,
    ),
  ];
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <main>
        <AboutHero />
        <NavigatorModal />
      </main>
      <Footer variant="inline" />
    </>
  );
}
