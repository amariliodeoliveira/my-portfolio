import { Icon } from "@iconify/react";

import RouteStatusHero from "@/components/layout/RouteStatusHero";
import BackToHomeLink from "@/components/ui/BackToHomeLink";
import { PIXI_FIREWORKS_REPOSITORY_URL } from "@/config/pixiFireworks";

export default function PixiFireworksUnavailable() {
  return (
    <RouteStatusHero
      headingId="pixi-fireworks-unavailable-heading"
      title="Demo unavailable"
      description={
        <>
          The PixiJS fireworks demo is temporarily offline. It should be back
          shortly. You can still inspect the source code for context.
        </>
      }
      icon="line-md:alert-circle"
      animatedIcon="line-md:alert-circle-loop"
      iconClassName="text-warning"
      titleClassName="to-warning"
      actions={
        <div
          role="group"
          aria-label="Demo recovery actions"
          className="flex flex-wrap gap-3"
        >
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
          <BackToHomeLink />
        </div>
      }
    />
  );
}
