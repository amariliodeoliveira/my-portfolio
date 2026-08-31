import Footer from "@/components/layout/Footer";
import PixiFireworksDemo from "@/components/pixi-fireworks/PixiFireworksDemo";
import PixiFireworksUnavailable from "@/components/pixi-fireworks/PixiFireworksUnavailable";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";
import { pageMetadata } from "@/config/aeo";
import { PIXI_FIREWORKS_URL } from "@/config/pixiFireworks";
import { MyProfile } from "@/data";
import { createPageMetadata } from "@/lib/metadata";
import { getWebPageSchema, serializeJsonLd } from "@/lib/schemas";
import { isUrlReachable } from "@/utils/isUrlReachable";

export const metadata = createPageMetadata(pageMetadata.pixiFireworks);

// Checked on every request (no caching) rather than revalidated on a timer:
// a visitor who hits a broken iframe won't sit around waiting for ISR to
// pick up that the demo is back — each visit should reflect the current
// state.
export const dynamic = "force-dynamic";

export default async function Home() {
  const isAvailable = await isUrlReachable(PIXI_FIREWORKS_URL);
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
      <main>
        {isAvailable ? <PixiFireworksDemo /> : <PixiFireworksUnavailable />}
        <NavigatorModal />
      </main>
      <Footer variant="inline" />
    </>
  );
}
