import Footer from "@/components/layout/Footer";
import NotFoundHero from "@/components/not-found/NotFoundHero";
import NavigatorModal from "@/components/ui/navigator-modal/NavigatorModal";

export default function NotFound() {
  return (
    <>
      <main>
        <NotFoundHero />
        <NavigatorModal />
      </main>
      <Footer variant="overlay" />
    </>
  );
}
