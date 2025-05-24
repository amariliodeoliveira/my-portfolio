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
    <header className="navbar absolute top-0 bg-transparent backdrop-blur-xl uppercase pt-4">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/" className="font-bold">
              Home
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal text-sm">
          {navigationLinks.map((link, index) =>
            link.label.toLowerCase() === "home" ? null : (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
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
