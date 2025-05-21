import AboutFooter from "@/components/layout/AboutFooter";
import AboutHero from "@/components/layout/AboutHero";
import NavigatorModal from "@/components/ui/NavigatorModal";

export default function Home() {
  return (
    <>
      <main>
        <AboutHero />
        <NavigatorModal />
      </main>
      <AboutFooter />
    </>
  );
}
