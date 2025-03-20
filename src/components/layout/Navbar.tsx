"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { navigationLinks } from "@/data/links";

import useModal from "@/hooks/useModal";

import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar: React.FC = () => {
  const handleClick = useModal("navigation_modal");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();

        const dialog = document.getElementById(
          "navigation_modal"
        ) as HTMLDialogElement | null;

        if (dialog) {
          dialog.showModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar absolute top-0 bg-transparent backdrop-blur-xl uppercase">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/" className="font-bold">
              de Oliveira
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal">
          {navigationLinks.map((link, index) =>
            link.label.toLowerCase() === "home" ? null : (
              <li key={index}>
                <Link href={link.href}>
                  <Icon className="size-4" icon={link.icon} />
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <button onClick={handleClick}>
              <Icon className="size-5" icon="line-md:align-center" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
