import { Icon } from "@iconify/react/dist/iconify.js";
import { MyJobs } from "@/data/jobs";
import AboutHeroTimelineLink from "./AboutHeroTimelineLink";

export default function AboutHeroTimeline() {
  return (
    <div>
      <h2 className="uppercase text-primary text-2xl font-black mb-5">My Career</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {MyJobs.map((job, index) => (
          <li key={index}>
            {index !== 0 && <hr />}
            <Icon icon="line-md:confirm-circle-filled" className="timeline-middle size-5" />
            <div className={`${index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end md:mb-10"}`}>
              <time className="font-light italic text-sm">{job.date}</time>
              <div className="text-light/tight my-2">
                <AboutHeroTimelineLink label={job.company} href={job.link} />
                <p className="font-medium italic">{job.role}</p>
              </div>
              <p className="font-extralight">{job.description}</p>
            </div>
            {index < MyJobs.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
}
