import Image from "next/image";

import { MyProfile } from "@/data";
import ProfilePic from "@img/profile-oficial.jpeg";
import AboutHeroTimeline from "./AboutHeroTimeline";

export default function AboutHero() {
  return (
    <section className="hero bg-base-200 min-h-screen justify-center pt-28">
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="from-accent via-primary to-secondary bg-linear-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:pb-4">
            {MyProfile.about.title}
          </h1>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:gap-8 lg:gap-16">
            <Image
              src={ProfilePic}
              alt={MyProfile.name}
              className="size-fit max-h-64 max-w-80 rounded-lg shadow-2xl"
            />

            <p>{MyProfile.about.fullBio}</p>
          </div>
        </div>

        <AboutHeroTimeline />
      </div>
    </section>
  );
}
