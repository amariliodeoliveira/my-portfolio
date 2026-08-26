import { Icon } from "@iconify/react";
import Link from "next/link";

import { PIXI_FIREWORKS_REPOSITORY_URL } from "@/config/pixiFireworks";

export default function PixiFireworksUnavailable() {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl text-left">
          <div className="flex items-center gap-2">
            <h1 className="from-accent to-warning mb-6 inline-block bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
              Demo unavailable
            </h1>
            <Icon
              icon="line-md:alert-circle-loop"
              className="text-warning size-6"
            />
          </div>

          <p className="mb-8 font-light">
            The PixiJS fireworks demo is temporarily offline. It should be back
            shortly. You can still inspect the source code for context.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={PIXI_FIREWORKS_REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon icon="line-md:github-loop" className="size-5" />
              <span>View repository</span>
            </a>
            <Link href="/" className="btn justify-between">
              <span>Go back to home</span>
              <Icon icon="line-md:arrow-small-right" className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
