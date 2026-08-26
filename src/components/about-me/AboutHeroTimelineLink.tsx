import { Icon } from "@iconify/react";
import Link from "next/link";

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
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <span
            className={`link link-hover flex items-center gap-1 underline-offset-2 ${isEven ? "md:justify-end" : ""}`}
          >
            {label}
            <Icon
              icon="line-md:external-link"
              aria-hidden="true"
              className="size-3"
            />
          </span>
        </Link>
      ) : (
        <>{label}</>
      )}
    </h3>
  );
}
