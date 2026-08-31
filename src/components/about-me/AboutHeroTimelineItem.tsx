import { Icon } from "@iconify/react";

import type { Job } from "@/types";
import { formatDate } from "@/utils/dateFormat";

import AboutHeroTimelineLink from "./AboutHeroTimelineLink";
import SkeletonText from "./SkeletonText";

type AboutHeroTimelineItemProps = {
  index: number;
  job: Job;
  loading: boolean;
  total: number;
};

export default function AboutHeroTimelineItem({
  index,
  job,
  loading,
  total,
}: AboutHeroTimelineItemProps) {
  const alignEnd = index % 2 === 0;
  const start = formatDate(job.startDate);
  const end = formatDate(job.endDate);

  return (
    <li>
      {index !== 0 && (
        <hr
          aria-hidden="true"
          className={loading ? "skeleton" : "bg-secondary"}
        />
      )}
      {loading ? (
        <span className="skeleton timeline-middle size-5 rounded-full" />
      ) : (
        <Icon
          icon="line-md:confirm-circle-filled"
          aria-hidden="true"
          className="timeline-middle text-secondary size-5"
        />
      )}
      <article
        className={
          alignEnd
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <p className="text-sm font-light italic">
          <SkeletonText loading={loading}>
            <time dateTime={job.startDate}>{start}</time>
            <span aria-hidden="true"> – </span>
            {job.endDate ? (
              <time dateTime={job.endDate}>{end}</time>
            ) : (
              <span>Moment</span>
            )}
          </SkeletonText>
        </p>
        <div className="my-2 leading-tight">
          {loading ? (
            <h3 className="text-secondary font-black">
              <SkeletonText loading>{job.company}</SkeletonText>
            </h3>
          ) : (
            <AboutHeroTimelineLink
              alignEnd={alignEnd}
              label={job.company}
              href={job.link}
            />
          )}
          <p className="font-medium italic">
            <SkeletonText loading={loading}>{job.role}</SkeletonText>
          </p>
        </div>
        <p className="font-extralight">
          <SkeletonText loading={loading}>{job.description}</SkeletonText>
        </p>
      </article>
      {index < total - 1 && (
        <hr
          aria-hidden="true"
          className={loading ? "skeleton" : "bg-secondary"}
        />
      )}
    </li>
  );
}
