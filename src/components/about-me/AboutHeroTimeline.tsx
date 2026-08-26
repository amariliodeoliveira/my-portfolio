import { Icon } from "@iconify/react";
import Link from "next/link";

import { cvNavigationLink } from "@/config/navigation";
import { MyJobs } from "@/data/jobs";
import { formatDate } from "@/utils/dateFormat";
import { getJobEndTimestamp } from "@/utils/jobs";

import AboutHeroTimelineLink from "./AboutHeroTimelineLink";

const sortedJobs = MyJobs.toSorted(
  (a, b) => getJobEndTimestamp(b) - getJobEndTimestamp(a),
);

export default function AboutHeroTimeline() {
  return (
    <section aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="text-primary mb-5 text-2xl font-black uppercase"
      >
        My Career
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {sortedJobs.map((job, index) => {
          const start = formatDate(job.startDate);
          const end = formatDate(job.endDate);

          return (
            <li key={index}>
              {index !== 0 && (
                <hr aria-hidden="true" className="bg-secondary" />
              )}
              <Icon
                icon="line-md:confirm-circle-filled"
                aria-hidden="true"
                className="timeline-middle text-secondary size-5"
              />
              <article
                className={`${index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end md:mb-10"}`}
              >
                <p className="text-sm font-light italic">
                  <time dateTime={job.startDate}>{start}</time>
                  <span aria-hidden="true"> – </span>
                  {job.endDate ? (
                    <time dateTime={job.endDate}>{end}</time>
                  ) : (
                    <span>Moment</span>
                  )}
                </p>
                <div className="my-2 leading-tight">
                  <AboutHeroTimelineLink
                    label={job.company}
                    href={job.link}
                    index={index}
                  />
                  <p className="font-medium italic">{job.role}</p>
                </div>
                <p className="font-extralight">{job.description}</p>
              </article>
              {index < sortedJobs.length - 1 && (
                <hr aria-hidden="true" className="bg-secondary" />
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center pb-8">
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
      </div>
    </section>
  );
}
