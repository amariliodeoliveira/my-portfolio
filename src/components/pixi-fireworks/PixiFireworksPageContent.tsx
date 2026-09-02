"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import PixiFireworksDemo from "@/components/pixi-fireworks/PixiFireworksDemo";
import PixiFireworksUnavailable from "@/components/pixi-fireworks/PixiFireworksUnavailable";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";

export default function PixiFireworksPageContent() {
  const [isUnavailable, setIsUnavailable] = useState(false);

  return (
    <>
      <main>
        {isUnavailable ? (
          <PixiFireworksUnavailable />
        ) : (
          <PixiFireworksDemo onUnavailable={() => setIsUnavailable(true)} />
        )}
        <NavigatorModal />
      </main>
      <Footer variant={isUnavailable ? "overlay" : "inline"} />
    </>
  );
}
