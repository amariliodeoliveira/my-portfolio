import Link from "next/link";

import SkeletonText from "@/components/ui/SkeletonText";
import { cvNavigationLink } from "@/config/navigation";
import { MyJobs } from "@/data/jobs";
import { getJobEndTimestamp } from "@/utils/jobs";

import AboutHeroTimelineItem from "./AboutHeroTimelineItem";

const sortedJobs = MyJobs.toSorted(
  (a, b) => getJobEndTimestamp(b) - getJobEndTimestamp(a),
);

type AboutHeroTimelineProps = {
  loading?: boolean;
};

export default function AboutHeroTimeline({
  loading = false,
}: AboutHeroTimelineProps) {
  return (
    <section aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="text-primary mb-5 text-2xl font-black uppercase"
      >
        <SkeletonText loading={loading}>My Career</SkeletonText>
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {sortedJobs.map((job, index) => (
          <AboutHeroTimelineItem
            key={`${job.company}-${job.startDate}`}
            job={job}
            index={index}
            total={sortedJobs.length}
            loading={loading}
          />
        ))}
      </ul>
      <div className="flex justify-center pb-8">
        {loading ? (
          <span className="btn skeleton text-transparent">
            {cvNavigationLink.label}
          </span>
        ) : (
          <Link
            href={cvNavigationLink.href}
            target={cvNavigationLink.openInNewTab ? "_blank" : undefined}
            rel={
              cvNavigationLink.openInNewTab ? "noopener noreferrer" : undefined
            }
            aria-label={cvNavigationLink.ariaLabel}
            className="btn btn-primary"
          >
            {cvNavigationLink.label}
          </Link>
        )}
      </div>
    </section>
  );
}
