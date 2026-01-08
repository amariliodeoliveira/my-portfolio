"use client";

import Link from "next/link";
import useModal from "@/hooks/useModal";

import { useEffect } from "react";
import { navigationLinks } from "@/data/links";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const { openModal } = useModal("navigation_modal");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openModal]);

  return (
    <header className="navbar absolute top-0 bg-transparent uppercase backdrop-blur-xl">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          <li>
            <Link
              href="/"
              className="from-accent via-primary to-secondary inline-block bg-linear-to-r bg-clip-text text-3xl font-black text-transparent normal-case transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              AdO
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-sm">
          {navigationLinks.map((link, index) =>
            link.label.toLowerCase() === "home" ? null : link.sublinks ? (
              <li key={index}>
                <details>
                  <summary>{link.label}</summary>
                  <ul className="w-fit">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="text-nowrap"
                          href={sublink.href}
                          onClick={(e) => {
                            const details = e.currentTarget.closest("details");
                            if (details) details.removeAttribute("open");
                          }}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <button onClick={openModal}>
              <Icon className="size-5" icon="line-md:align-center" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
