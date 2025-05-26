import AboutHero from "@/components/layout/AboutHero";
import NavigatorModal from "@/components/ui/NavigatorModal";
import AboutFooter from "@/components/layout/AboutFooter";

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
