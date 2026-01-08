import Link from "next/link";

import { MyJobs } from "@/data/jobs";
import { InlineIcon } from "@iconify/react/dist/iconify.js";

import KbdMenuButton from "../ui/KbdMenuButton";

export default function Hero() {
  const currentJob = MyJobs.find((job) => job.endDate === null);

  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl text-left">
          <h1 className="from-accent via-primary to-secondary mb-6 inline-block bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
            Amarilio de Oliveira
          </h1>
          <div className="mb-4 flex flex-col gap-1">
            {currentJob && (
              <p className="flex gap-1.5 font-bold">
                {currentJob.role} at
                {currentJob.link ? (
                  <Link
                    href={currentJob.link}
                    target="_blank"
                    rel="opener noreferrer"
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

            <p className="font-light">
              Greetings! 👋 Let me introduce myself. I&apos;m a passionate
              Software Engineer with a strong foundation in Frontend
              Development, a background in Information Systems, and a keen eye
              for UI/UX — also a trained gastronome with a fine taste for coffee
              ☕.
            </p>
          </div>
          <KbdMenuButton />
        </div>
      </div>
    </section>
  );
}
