import Image from "next/image";
import React from "react";

import ProfilePic from "@img/profile-oficial.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutHero: React.FC = () => {
  return (
    <section className="hero justify-center bg-base-200 min-h-screen pt-24">
      <div className="hero-content max-w-4xl flex-col items-start gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl pb-4 font-bold bg-gradient-to-r from-accent via-primary to-secondary text-transparent bg-clip-text">
            Turning Coffee Into Code!
          </h1>
          <div className="flex gap-12">
            <Image
              src={ProfilePic}
              width={250}
              height={250}
              alt="Amarilio de Oliveira"
              className="rounded-lg shadow-2xl size-fit"
            />

            <p>
              I&apos;ve been passionate about technology for as long as I can
              remember, but it was in my early teens that I first wrote a{" "}
              <i>Hello World</i>
              —a simple yet defining moment that sparked my deep curiosity about
              how things work behind the scenes. Since then, I&apos;ve been on a
              continuous journey of learning, exploring, and building.
              <br />
              <br />
              With over two years of professional experience in software
              development and more than five years of academic dedication,
              I&apos;ve worked with a diverse range of technologies, always
              striving to refine my skills and embrace new challenges.
              Problem-solving, clean code, and efficiency are at the core of my
              approach, and I&apos;m always eager to explore innovative
              solutions.
              <br />
              <br />
              Beyond coding, I have a strong connection with another
              world—Gastronomy. As a trained and post-graduated professional in
              the field, I&apos;ve developed not only a refined palate but also
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

        <div>
          <h2 className="uppercase text-primary text-2xl font-bold mb-5">
            Carreira
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <Icon
                icon="line-md:confirm-circle-filled"
                className="timeline-middle size-5"
              />
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-sm">
                  March 2023 – Moment
                </time>
                <div className="text-base/tight my-2">
                  <h3 className="font-black text-secondary">
                    StonePlus - Concrete Design
                  </h3>
                  <p className="font-bold">Software Developer</p>
                </div>
                <p className="font-extralight">
                  Developed web apps with React, Node.js, and TypeScript,
                  crafting responsive interfaces and APIs. Managed databases
                  with PostgreSQL, boosted performance with Next.js, and secured
                  sessions via JWT. Delivered clean, scalable solutions.
                </p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <Icon
                icon="line-md:confirm-circle-filled"
                className="timeline-middle size-5"
              />
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic text-sm">
                  January 2024 – Moment
                </time>
                <div className="text-base/tight my-2">
                  <h3 className="font-black text-secondary">PORING.me</h3>
                  <p className="font-bold">Founder & Software Engineer</p>
                </div>
                <p className="font-extralight">
                  Developed a fan-made Ragnarok Online platform, offering tools
                  to enhance player experience. Researched user needs for a
                  user-friendly UI, built a monolithic full-stack app with
                  strong API integration, and automated deployments via CI/CD
                  pipelines. Deployed on Vercel for scalability and performance.
                </p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <Icon
                icon="line-md:confirm-circle-filled"
                className="timeline-middle size-5"
              />
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-sm">
                  April 2020 – July 2020
                </time>
                <div className="text-base/tight my-2">
                  <h3 className="font-medium text-secondary">
                    A² Design Consulting
                  </h3>
                  <p className="font-bold">Wordpress Developer</p>
                </div>
                <p className="font-extralight">
                  Developed and maintained a responsive, multilingual web
                  application (Portuguese, English, and French) in WordPress for
                  an architecture consultancy in Toronto, Canada, while ensuring
                  the website met client needs and provided a seamless user
                  experience across multiple languages and devices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
