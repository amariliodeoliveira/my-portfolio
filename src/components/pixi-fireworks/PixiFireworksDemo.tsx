"use client";

import { Icon } from "@iconify/react";
import { useCallback, useState } from "react";

import {
  PIXI_FIREWORKS_REPOSITORY_URL,
  PIXI_FIREWORKS_URL,
} from "@/config/pixiFireworks";

const technicalHighlights = [
  {
    title: "PixiJS rendering layer",
    description:
      "Uses PixiJS to render the fireworks on a WebGL-powered HTML5 canvas, keeping the visual layer fast and interactive.",
  },
  {
    title: "XML-driven show timeline",
    description:
      "Parses fireworks.xml as the source of truth for effect type, color, duration, position, and velocity.",
  },
  {
    title: "Frame-rate independent animation",
    description:
      "Schedules Rocket and Fountain effects over time while keeping animation behavior consistent across devices.",
  },
  {
    title: "Modular TypeScript structure",
    description:
      "Separates configuration, services, types, utilities, and firework implementations so the canvas logic stays maintainable.",
  },
] as const;

export default function PixiFireworksDemo() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIframeLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      aria-labelledby="pixi-fireworks-heading"
      className="bg-base-200 min-h-screen pt-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12">
        <header className="max-w-3xl">
          <p className="text-primary mb-2 text-sm font-bold tracking-wide uppercase">
            Interactive Demo
          </p>
          <h1
            id="pixi-fireworks-heading"
            className="from-accent via-primary to-secondary mb-4 bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent"
          >
            PixiJS Fireworks Presentation
          </h1>
          <p className="text-base-content/80 leading-relaxed">
            An XML-driven fireworks display rendered on an HTML5 canvas with
            PixiJS. The project uses WebGL rendering for the visual layer,
            parses scheduled Rocket and Fountain effects from structured XML,
            loops the show from the beginning, and keeps the animation
            independent from the browser frame rate.
          </p>
          <p className="text-base-content/60 mt-3 text-sm">
            Built as a technical exercise focused on PixiJS, TypeScript,
            modularity, XML error handling, and smooth particle animation.
          </p>
          <nav
            aria-label="PixiJS fireworks resources"
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href={PIXI_FIREWORKS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Open live demo</span>
              <Icon
                icon="line-md:external-link"
                aria-hidden="true"
                className="size-5"
              />
            </a>
            <a
              href={PIXI_FIREWORKS_REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Icon
                icon="line-md:github-loop"
                aria-hidden="true"
                className="size-5"
              />
              <span>View repository</span>
            </a>
          </nav>
        </header>

        <section aria-labelledby="pixi-fireworks-demo-heading">
          <h2 id="pixi-fireworks-demo-heading" className="sr-only">
            Embedded PixiJS fireworks demo
          </h2>

          <div className="mockup-window border-base-content/10 bg-base-300 relative border">
            <p
              title="PixiJS · XML scheduling · WebGL particles"
              className="text-base-content/50 pointer-events-none absolute inset-x-0 top-6.5 -translate-y-1/2 truncate px-20 text-center text-[0.6875rem] sm:text-xs"
            >
              PixiJS · XML scheduling · WebGL particles
            </p>
            <div className="bg-base-200 relative h-104 sm:h-120 lg:h-136">
              {!isLoaded && (
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="loading loading-spinner text-primary loading-lg" />
                  <div>
                    <p className="font-bold">Loading PixiJS demo</p>
                    <p className="text-base-content/60 text-sm">
                      Preparing the embedded WebGL experience.
                    </p>
                  </div>
                </div>
              )}

              <iframe
                src={PIXI_FIREWORKS_URL}
                title="PixiJS fireworks interactive demo"
                loading="eager"
                onLoad={handleIframeLoad}
                className={`size-full border-none transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="pixi-fireworks-details-heading">
          <div className="mb-4 max-w-2xl">
            <h2
              id="pixi-fireworks-details-heading"
              className="text-primary text-2xl font-black uppercase"
            >
              What the project covers
            </h2>
            <p className="text-base-content/70 mt-2 text-sm leading-relaxed">
              The demo is intentionally small, but the implementation focuses on
              the engineering details behind a canvas experience: parsing
              external data, scheduling effects, rendering particles, and
              keeping the code organized enough to extend.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {technicalHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="card bg-base-300/40 border-base-content/10 border"
              >
                <div className="card-body gap-2 p-5">
                  <h3 className="card-title text-base">{highlight.title}</h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
