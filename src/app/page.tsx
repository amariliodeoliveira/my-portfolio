import { Suspense } from "react";

import Hero from "@/components/layout/Hero";
import NavigatorModal from "@/components/ui/NavigatorModal";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={null}>
          <NavigatorModal />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
