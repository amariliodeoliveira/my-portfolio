import Hero from "@/components/layout/Hero";

import Footer from "@/components/layout/Footer";
import NavigatorModal from "@/components/ui/NavigatorModal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <NavigatorModal />
      </main>
      <Footer />
    </>
  );
}
