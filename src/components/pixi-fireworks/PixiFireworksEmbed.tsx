"use client";

import { useCallback, useEffect, useState } from "react";

import { PIXI_FIREWORKS_URL } from "@/config/pixiFireworks";

const EMBED_TIMEOUT_MS = 10_000;

type PixiFireworksEmbedProps = {
  onUnavailable?: () => void;
};

export default function PixiFireworksEmbed({
  onUnavailable,
}: PixiFireworksEmbedProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  const handleIframeLoad = useCallback(() => {
    setStatus("loaded");
  }, []);

  const handleIframeError = useCallback(() => {
    setStatus("error");
    onUnavailable?.();
  }, [onUnavailable]);

  const isLoading = status === "loading";

  useEffect(() => {
    if (!isLoading) return;

    const timeout = globalThis.setTimeout(() => {
      setStatus("error");
      onUnavailable?.();
    }, EMBED_TIMEOUT_MS);

    return () => globalThis.clearTimeout(timeout);
  }, [isLoading, onUnavailable]);

  return (
    <div
      aria-busy={isLoading}
      className="bg-base-200 relative h-104 sm:h-120 lg:h-136"
    >
      {isLoading && (
        <>
          <div aria-hidden="true" className="absolute inset-0 z-10 p-4 sm:p-6">
            <div className="skeleton size-full rounded-lg" />
          </div>
          <p role="status" aria-live="polite" className="sr-only">
            Loading PixiJS demo
          </p>
        </>
      )}

      {status === "error" ? (
        <p
          role="alert"
          className="flex size-full items-center justify-center p-6 text-center"
        >
          Unable to load the embedded PixiJS demo. You can inspect the project
          source instead.
        </p>
      ) : (
        <iframe
          src={PIXI_FIREWORKS_URL}
          title="PixiJS fireworks interactive demo"
          loading="eager"
          tabIndex={isLoading ? -1 : undefined}
          onLoad={handleIframeLoad}
          onErrorCapture={handleIframeError}
          className={`size-full border-none transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
