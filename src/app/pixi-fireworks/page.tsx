import Footer from "@/components/layout/Footer";
import PixiFireworksDemo from "@/components/pixi-fireworks/PixiFireworksDemo";
import PixiFireworksUnavailable from "@/components/pixi-fireworks/PixiFireworksUnavailable";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";
import { PIXI_FIREWORKS_URL } from "@/config/pixiFireworks";
import { isUrlReachable } from "@/utils/isUrlReachable";

// Checked on every request (no caching) rather than revalidated on a timer:
// a visitor who hits a broken iframe won't sit around waiting for ISR to
// pick up that the demo is back — each visit should reflect the current
// state.
export const dynamic = "force-dynamic";

export default async function Home() {
  const isAvailable = await isUrlReachable(PIXI_FIREWORKS_URL);

  return (
    <>
      <main>
        {isAvailable ? <PixiFireworksDemo /> : <PixiFireworksUnavailable />}
        <NavigatorModal />
      </main>
      <Footer variant="inline" />
    </>
  );
}
