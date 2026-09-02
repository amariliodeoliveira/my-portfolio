import PixiFireworksPageContent from "@/components/pixi-fireworks/PixiFireworksPageContent";
import { pageMetadata } from "@/config/aeo";
import { MyProfile } from "@/data";
import { createPageMetadata } from "@/lib/metadata";
import { getWebPageSchema, serializeJsonLd } from "@/lib/schemas";

export const metadata = createPageMetadata(pageMetadata.pixiFireworks);

export default async function Home() {
  const url = `${MyProfile.contact.url}${pageMetadata.pixiFireworks.pathname}`;
  const schema = getWebPageSchema(
    url,
    pageMetadata.pixiFireworks.title,
    pageMetadata.pixiFireworks.description,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
      <PixiFireworksPageContent />
    </>
  );
}
