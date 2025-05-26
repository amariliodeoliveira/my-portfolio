import Hero from "@/components/layout/Hero";
import NavigatorModal from "@/components/ui/NavigatorModal";
import Footer from "@/components/layout/Footer";

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
