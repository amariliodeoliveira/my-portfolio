"use client";

import Link from "next/link";
import React, { useEffect } from "react";

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
          <li>
            <Link href="/about-me">
              <Icon className="size-4" icon="line-md:account" />
              About me
            </Link>
          </li>
          <li>
            <Link href="/setup">
              <Icon className="size-4" icon="line-md:computer" />
              Setup
            </Link>
          </li>
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
