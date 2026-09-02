import PixiFireworksDemo from "@/components/pixi-fireworks/PixiFireworksDemo";

export default function Loading() {
  return (
    <>
      <PixiFireworksDemo loading />
      <p role="status" aria-live="polite" className="sr-only">
        Loading PixiJS portfolio project
      </p>
    </>
  );
}
