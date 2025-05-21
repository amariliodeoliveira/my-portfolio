import Image from "next/image";
import React from "react";

import ProfilePic from "@img/profile-oficial.jpeg";
import AboutHeroTimeline from "./AboutHeroTimeline";

const AboutHero: React.FC = () => {
  return (
    <section className="hero justify-center bg-base-200 min-h-screen pt-28">
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:pb-4 pb-6 font-bold bg-gradient-to-r from-accent via-primary to-secondary text-transparent bg-clip-text">
            Turning Coffee Into Code!
          </h1>
          <div className="flex md:gap-8 lg:gap-16 gap-8 flex-wrap md:flex-nowrap">
            <Image
              src={ProfilePic}
              alt="Amarilio de Oliveira"
              className="rounded-lg shadow-2xl size-fit max-w-80 max-h-64"
            />

            <p>
              I&apos;ve been passionate about technology for as long as I can remember, but it was in my early teens
              that I first wrote a <i>Hello World</i>
              —a simple yet defining moment that sparked my deep curiosity about how things work behind the scenes.
              Since then, I&apos;ve been on a continuous journey of learning, exploring, and building.
              <br />
              <br />
              With over two years of professional experience in software development and more than five years of
              academic dedication, I&apos;ve worked with a diverse range of technologies, always striving to refine my
              skills and embrace new challenges. Problem-solving, clean code, and efficiency are at the core of my
              approach, and I&apos;m always eager to explore innovative solutions.
              <br />
              <br />
              Beyond coding, I have a strong connection with another world—Gastronomy. As a trained and post-graduated
              professional in the field, I&apos;ve developed not only a refined palate but also invaluable soft skills
              such as attention to detail, adaptability, and teamwork. Whether in the kitchen or in development, I
              thrive on creativity, precision, and continuous improvement.
              <br />
              <br />
              Technology and gastronomy may seem like separate worlds, but for me, they share a common thread: the
              ability to create, transform, and deliver exceptional experiences.
            </p>
          </div>
        </div>

        <AboutHeroTimeline />
      </div>
    </section>
  );
};

export default AboutHero;
