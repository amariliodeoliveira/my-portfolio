import Link from "next/link";

import { MyJobs } from "@/data/jobs";

import KbdMenuButton from "../ui/KbdMenuButton";

import { InlineIcon } from "@iconify/react/dist/iconify.js";

const Hero: React.FC = () => {
  const currentJob = MyJobs.find((job) => job.endDate === null);

  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl text-left">
          <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-accent via-primary to-secondary inline-block text-transparent bg-clip-text">
            Amarilio de Oliveira
          </h1>
          <div className="flex flex-col mb-4 gap-1">
            {currentJob && (
              <p className="font-bold flex gap-1.5">
                {currentJob.role} at
                {currentJob.link ? (
                  <Link href={currentJob.link} className="link link-hover text-primary flex items-center gap-1 group">
                    <span>{currentJob.company}</span>
                    <InlineIcon className="size-4 opacity-0 group-hover:opacity-100" icon="line-md:external-link" />
                  </Link>
                ) : (
                  <span className="text-primary">{currentJob.company}</span>
                )}
              </p>
            )}

            <p className="font-light">
              Passionate software developer with a strong foundation in full-stack development, a background in
              Information Systems, and a keen eye for UI/UX—also a gastronomy enthusiast with a problem-solving mindset.
            </p>
          </div>
          <KbdMenuButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
