import AboutFooter from "@/components/layout/AboutFooter";
import NavigatorModal from "@/components/ui/NavigatorModal";

export default function Home() {
  return (
    <>
      <main>
        <iframe
          src="https://fireworks.amarilio.tech/"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Fireworks"
        />
        <NavigatorModal />
      </main>
      <AboutFooter />
    </>
  );
}
