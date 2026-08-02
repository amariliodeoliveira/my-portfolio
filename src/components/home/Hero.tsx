import { InlineIcon } from "@iconify/react";
import Link from "next/link";

import KbdMenuButton from "@/components/ui/KbdMenuButton";
import { MyProfile, MyJobs } from "@/data";
import { getCurrentJob } from "@/utils/jobs";

export default function Hero() {
  const currentJob = getCurrentJob(MyJobs);

  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl text-left">
          <h1 className="from-accent via-primary to-secondary mb-6 inline-block bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
            {MyProfile.name}
          </h1>
          <div className="mb-4 flex flex-col gap-1">
            {currentJob && (
              <p className="flex gap-2 font-bold">
                {currentJob.role} at
                {currentJob.link ? (
                  <Link
                    href={currentJob.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover text-primary group flex items-center gap-1"
                  >
                    <span>{currentJob.company}</span>
                    <InlineIcon
                      className="size-4 opacity-0 group-hover:opacity-100"
                      icon="line-md:external-link"
                    />
                  </Link>
                ) : (
                  <span className="text-primary">{currentJob.company}</span>
                )}
              </p>
            )}

            <p className="font-light">{MyProfile.about.shortBio}</p>
          </div>
          <KbdMenuButton />
        </div>
      </div>
    </section>
  );
}
