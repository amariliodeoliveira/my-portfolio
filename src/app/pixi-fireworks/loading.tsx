export default function Loading() {
  return (
    <section className="hero bg-base-200 min-h-screen" aria-busy="true">
      <div className="hero-content text-center">
        <div role="status" aria-live="polite">
          <span className="loading loading-spinner text-primary loading-lg mb-4" />
          <p className="font-bold">Checking demo availability</p>
          <p className="text-base-content/60 text-sm">
            Preparing the PixiJS fireworks experience.
          </p>
        </div>
      </div>
    </section>
  );
}
