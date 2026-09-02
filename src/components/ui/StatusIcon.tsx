"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const STATUS_ICON_ANIMATION_MS = 1000;

type StatusIconProps = {
  icon: string;
  animatedIcon?: string;
  className: string;
};

export default function StatusIcon({
  icon,
  animatedIcon,
  className,
}: StatusIconProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!animatedIcon) {
      return;
    }

    const prefersReducedMotion = globalThis.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const startTimeoutId = globalThis.setTimeout(() => {
      setIsAnimating(true);
    }, 0);

    const stopTimeoutId = globalThis.setTimeout(() => {
      setIsAnimating(false);
    }, STATUS_ICON_ANIMATION_MS);

    return () => {
      globalThis.clearTimeout(startTimeoutId);
      globalThis.clearTimeout(stopTimeoutId);
    };
  }, [animatedIcon, icon]);

  return (
    <Icon
      icon={isAnimating && animatedIcon ? animatedIcon : icon}
      aria-hidden="true"
      className={className}
    />
  );
}
