import { MyJobs } from "@/data/jobs";
import { formatDate } from "@/utils/dateFormat";
import { Icon } from "@iconify/react/dist/iconify.js";

import AboutHeroTimelineLink from "./AboutHeroTimelineLink";

const sortedJobs = [...MyJobs].sort((a, b) => {
  const dateA = a.endDate
    ? new Date(a.endDate).getTime()
    : new Date("9999-12-31").getTime();
  const dateB = b.endDate
    ? new Date(b.endDate).getTime()
    : new Date("9999-12-31").getTime();
  return dateB - dateA;
});

export default function AboutHeroTimeline() {
  return (
    <div>
      <h2 className="text-primary mb-5 text-2xl font-black uppercase">
        My Career
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {sortedJobs.map((job, index) => {
          const start = formatDate(job.startDate);
          const end = formatDate(job.endDate);

          const dateRange = `${start} – ${end}`;

          return (
            <li key={index}>
              {index !== 0 && <hr />}
              <Icon
                icon="line-md:confirm-circle-filled"
                className="timeline-middle size-5"
              />
              <div
                className={`${index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end md:mb-10"}`}
              >
                <time className="text-sm font-light italic">{dateRange}</time>
                <div className="text-light/tight my-2">
                  <AboutHeroTimelineLink
                    label={job.company}
                    href={job.link}
                    index={index}
                  />
                  <p className="font-medium italic">{job.role}</p>
                </div>
                <p className="font-extralight">{job.description}</p>
              </div>
              {index < sortedJobs.length - 1 && <hr />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
