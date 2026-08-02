import AboutHero from "@/components/about-me/AboutHero";
import Footer from "@/components/layout/Footer";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";

export default function Home() {
  return (
    <>
      <main>
        <AboutHero />
        <NavigatorModal />
      </main>
      <Footer variant="inline" />
    </>
  );
}
