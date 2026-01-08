import Link from "next/link";

import { Icon } from "@iconify/react/dist/iconify.js";

interface AboutHeroTimelineLinkProps {
  label: string;
  href?: string;
  index: number;
}

export default function AboutHeroTimelineLink({
  label,
  href,
  index,
}: AboutHeroTimelineLinkProps) {
  const isEven = index % 2 === 0;

  return (
    <h3 className="text-secondary font-black">
      {href ? (
        <Link href={href} target="_blank" rel="opener noreferrer">
          <span
            className={`link link-hover flex flex-1 items-center gap-1 underline-offset-2 ${isEven ? "md:justify-end" : ""}`}
          >
            {label}
            <Icon icon="line-md:external-link" className="size-3" />
          </span>
        </Link>
      ) : (
        <>{label}</>
      )}
    </h3>
  );
}
