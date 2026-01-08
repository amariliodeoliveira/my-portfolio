import Link from "next/link";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function NotFoundHero() {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl text-left">
          <span className="flex gap-2">
            <h1 className="from-accent to-error mb-6 inline-block bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
              Oops! Error 404
            </h1>
            <Icon
              icon="line-md:alert-circle-loop"
              className="text-error size-6"
            />
          </span>

          <p className="mb-8 font-light">
            It seems the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          <Link href="/" className="btn justify-between">
            <span>Go back to home</span>
            <Icon icon="line-md:arrow-small-right" className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
