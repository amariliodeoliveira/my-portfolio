import RoutePage from "@/components/layout/RoutePage";

export default function Loading() {
  return (
    <RoutePage className="flex items-center" contentClassName="items-center">
      <div
        role="status"
        aria-live="polite"
        aria-busy="true"
        className="text-center"
      >
        <span className="loading loading-spinner text-primary loading-lg mb-4" />
        <p className="font-bold">Checking demo availability</p>
        <p className="text-base-content/60 text-sm">
          Preparing the PixiJS fireworks experience.
        </p>
      </div>
    </RoutePage>
  );
}
