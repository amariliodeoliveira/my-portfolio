import AboutHero from "@/components/about-me/AboutHero";

export default function Loading() {
  return (
    <>
      <AboutHero loading />
      <p role="status" className="sr-only">
        Loading about page
      </p>
    </>
  );
}
