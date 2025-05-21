import Link from "next/link";

interface AboutHeroTimelineLinkProps {
  label: string;
  href?: URL;
}

export default function AboutHeroTimelineLink({ label, href }: AboutHeroTimelineLinkProps) {
  return (
    <h3 className="font-black text-secondary">{href ? <Link href={href.toString()}>{label}</Link> : <>{label}</>}</h3>
  );
}
