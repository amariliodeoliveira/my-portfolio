import Hero from "@/components/layout/Hero";
import NavigatorModal from "@/components/ui/NavigatorModal";
import Footer from "@/components/layout/Footer";
import { MyProfile } from "@/data";
import {
  getPersonSchema,
  getWebsiteSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getFAQSchema,
} from "@/lib/schemas";

export default function Home() {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();
  const organizationSchema = getOrganizationSchema();
  const webPageSchema = getWebPageSchema(
    MyProfile.contact.url,
    MyProfile.seo.defaultTitle,
    MyProfile.seo.defaultDescription,
  );
  const faqSchema = getFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main>
        <Hero />
        <NavigatorModal />
      </main>
      <Footer />
    </>
  );
}
