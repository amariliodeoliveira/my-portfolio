"use client";

import { Icon } from "@iconify/react";

import RoutePage from "@/components/layout/RoutePage";
import SkeletonText from "@/components/ui/SkeletonText";
import {
  PIXI_FIREWORKS_REPOSITORY_URL,
  PIXI_FIREWORKS_URL,
} from "@/config/pixiFireworks";

import PixiFireworksEmbed from "./PixiFireworksEmbed";

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

type PixiFireworksDemoProps = {
  loading?: boolean;
  onUnavailable?: () => void;
};

export default function PixiFireworksDemo({
  loading = false,
  onUnavailable,
}: PixiFireworksDemoProps) {
  return (
    <RoutePage
      labelledBy="pixi-fireworks-heading"
      ariaHidden={loading || undefined}
      contentClassName="items-center gap-8"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-primary mb-2 text-sm font-bold tracking-wide uppercase">
          <SkeletonText loading={loading}>Interactive Demo</SkeletonText>
        </p>
        <h1
          id="pixi-fireworks-heading"
          className="from-accent via-primary to-secondary mb-4 bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent"
        >
          <SkeletonText loading={loading}>
            PixiJS Fireworks Presentation
          </SkeletonText>
        </h1>
        <p className="text-base-content/80 leading-relaxed">
          <SkeletonText loading={loading}>
            An XML-driven fireworks display rendered on an HTML5 canvas with
            PixiJS. The project uses WebGL rendering for the visual layer,
            parses scheduled Rocket and Fountain effects from structured XML,
            loops the show from the beginning, and keeps the animation
            independent from the browser frame rate.
          </SkeletonText>
        </p>
        <p className="text-base-content/60 mt-3 text-sm">
          <SkeletonText loading={loading}>
            Built as a technical exercise focused on PixiJS, TypeScript,
            modularity, XML error handling, and smooth particle animation.
          </SkeletonText>
        </p>
        <nav
          aria-label="PixiJS fireworks resources"
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {loading ? (
            <>
              <span className="btn skeleton text-transparent">
                <span>Open live demo</span>
                <span className="size-5" />
              </span>
              <span className="btn skeleton text-transparent">
                <span className="size-5" />
                <span>View repository</span>
              </span>
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </header>

      <section aria-labelledby="pixi-fireworks-demo-heading" className="w-full">
        <h2 id="pixi-fireworks-demo-heading" className="sr-only">
          Embedded PixiJS fireworks demo
        </h2>

        <div className="mockup-window border-base-content/10 bg-base-300 relative border">
          <p
            title="PixiJS · XML scheduling · WebGL particles"
            className="text-base-content/50 pointer-events-none absolute inset-x-0 top-6.5 -translate-y-1/2 truncate px-20 text-center text-[0.6875rem] sm:text-xs"
          >
            <SkeletonText loading={loading}>
              PixiJS · XML scheduling · WebGL particles
            </SkeletonText>
          </p>
          {loading ? (
            <div className="bg-base-200 h-104 p-4 sm:h-120 sm:p-6 lg:h-136">
              <div className="skeleton size-full rounded-lg" />
            </div>
          ) : (
            <PixiFireworksEmbed onUnavailable={onUnavailable} />
          )}
        </div>
      </section>

      <section
        aria-labelledby="pixi-fireworks-details-heading"
        className="w-full"
      >
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <h2
            id="pixi-fireworks-details-heading"
            className="text-primary text-2xl font-black uppercase"
          >
            <SkeletonText loading={loading}>
              What the project covers
            </SkeletonText>
          </h2>
          <p className="text-base-content/70 mt-2 text-sm leading-relaxed">
            <SkeletonText loading={loading}>
              The demo is intentionally small, but the implementation focuses on
              the engineering details behind a canvas experience: parsing
              external data, scheduling effects, rendering particles, and
              keeping the code organized enough to extend.
            </SkeletonText>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {technicalHighlights.map((highlight) => (
            <article
              key={highlight.title}
              className="card bg-base-300/40 border-base-content/10 border"
            >
              <div className="card-body gap-2 p-5">
                <h3 className="card-title text-base">
                  <SkeletonText loading={loading}>
                    {highlight.title}
                  </SkeletonText>
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  <SkeletonText loading={loading}>
                    {highlight.description}
                  </SkeletonText>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </RoutePage>
  );
}
