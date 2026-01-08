import Image from "next/image";

import ProfilePic from "@img/profile-oficial.jpeg";
import AboutHeroTimeline from "./AboutHeroTimeline";

export default function AboutHero() {
  return (
    <section className="hero bg-base-200 min-h-screen justify-center pt-28">
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="from-accent via-primary to-secondary bg-linear-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:pb-4">
            Turning Coffee Into Code!
          </h1>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:gap-8 lg:gap-16">
            <Image
              src={ProfilePic}
              alt="Amarilio de Oliveira"
              className="size-fit max-h-64 max-w-80 rounded-lg shadow-2xl"
            />

            <p>
              I&apos;ve been passionate about technology for as long as I can
              remember, but it was in my early teens that I first wrote a{" "}
              <i>Hello World</i>
              — a simple yet defining moment that sparked my deep curiosity
              about how things work behind the scenes. Since then, I&apos;ve
              been on a continuous journey of learning, exploring, and building.
              <br />
              <br />
              With over three years of professional experience in software
              development, and more than five years of academic dedication,
              I&apos;ve worked with a diverse range of technologies, always
              striving to refine my skills and embrace new challenges.
              Problem-solving, clean code, and efficiency are at the core of my
              approach, and I&apos;m always eager to explore new and innovative
              solutions.
              <br />
              <br />
              Beyond coding, I have a strong connection with another world —
              Gastronomy. As a trained and post-graduated professional in the
              field, I&apos;ve developed not only a refined palate but also
              invaluable soft skills such as attention to detail, adaptability,
              and teamwork. Whether in the kitchen or in development, I thrive
              on creativity, precision, and continuous improvement.
              <br />
              <br />
              Technology and gastronomy may seem like separate worlds, but for
              me, they share a common thread: the ability to create, transform,
              and deliver exceptional experiences.
            </p>
          </div>
        </div>

        <AboutHeroTimeline />
      </div>
    </section>
  );
}
