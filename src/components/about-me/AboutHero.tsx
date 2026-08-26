import ProfilePic from "@img/profile-oficial.jpeg";
import Image from "next/image";

import { MyProfile } from "@/data";

import AboutHeroTimeline from "./AboutHeroTimeline";

const bioParagraphs = MyProfile.about.fullBio.split("\n\n");

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="hero bg-base-200 min-h-screen justify-center pt-28"
    >
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <h1
            id="about-heading"
            className="from-accent via-primary to-secondary bg-linear-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:pb-4"
          >
            {MyProfile.about.title}
          </h1>
          <div className="flex flex-wrap gap-8 md:flex-nowrap lg:gap-16">
            <Image
              src={ProfilePic}
              alt={MyProfile.name}
              priority
              className="size-fit max-h-64 max-w-80 rounded-lg shadow-2xl"
            />

            <div className="max-w-2xl space-y-4 leading-relaxed">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <AboutHeroTimeline />
      </div>
    </section>
  );
}
