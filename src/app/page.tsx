import Hero from "@/components/layout/Hero";
import NavigatorModal from "@/components/ui/NavigatorModal";
import Footer from "@/components/layout/Footer";
import { getPersonSchema, getWebsiteSchema } from "@/lib/schemas";

export default function Home() {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

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
      <main>
        <Hero />
        <NavigatorModal />
      </main>
      <Footer />
    </>
  );
}
