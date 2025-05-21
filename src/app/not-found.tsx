import React from "react";
import Link from "next/link";

import Footer from "@/components/layout/Footer";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function NotFound() {
  return (
    <>
      <section className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl text-left">
            <span className="flex gap-2">
              <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-accent to-error inline-block text-transparent bg-clip-text">
                Oops! Error 404
              </h1>
              <Icon icon="line-md:alert-circle-loop" className="size-6 text-error" />
            </span>

            <p className="font-light mb-8">
              It seems the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <Link href="/" className="btn justify-between">
              <span>Go back to home</span>
              <Icon icon="line-md:arrow-small-right" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
