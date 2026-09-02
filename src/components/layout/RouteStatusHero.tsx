import { type ReactNode } from "react";

import RoutePage from "@/components/layout/RoutePage";
import StatusIcon from "@/components/ui/StatusIcon";

type RouteStatusHeroProps = {
  headingId: string;
  title: string;
  description: ReactNode;
  icon: string;
  animatedIcon?: string;
  iconClassName: string;
  titleClassName: string;
  actions: ReactNode;
};

export default function RouteStatusHero({
  headingId,
  title,
  description,
  icon,
  animatedIcon,
  iconClassName,
  titleClassName,
  actions,
}: RouteStatusHeroProps) {
  return (
    <RoutePage
      labelledBy={headingId}
      width="md"
      className="flex items-center pt-0!"
      contentClassName="items-center"
    >
      <div className="w-full max-w-xl text-left">
        <div className="mb-6 flex items-start gap-3">
          <h1
            id={headingId}
            className={`from-accent inline-block bg-linear-to-r bg-clip-text text-5xl leading-tight font-bold text-transparent ${titleClassName}`}
          >
            {title}
          </h1>
          <StatusIcon
            icon={icon}
            animatedIcon={animatedIcon}
            className={`mt-1 size-8 shrink-0 ${iconClassName}`}
          />
        </div>

        <p className="mb-8 font-light">{description}</p>

        {actions}
      </div>
    </RoutePage>
  );
}
