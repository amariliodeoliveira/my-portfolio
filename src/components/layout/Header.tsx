"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect } from "react";

import { navigationLinks } from "@/config/navigation";
import { MyProfile } from "@/data";
import useModal from "@/hooks/useModal";

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
              {MyProfile.brandName}
            </Link>
          </li>
        </ul>
      </div>

      <nav className="navbar-center hidden lg:flex" aria-label="Main">
        <ul className="menu menu-horizontal gap-4 text-sm">
          {navigationLinks.map((link) => {
            if (link.showInNavbar === false) return null;

            return (
              <li key={link.href}>
                {link.sublinks ? (
                  <details>
                    <summary>{link.label}</summary>

                    <ul className="w-fit">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.href}>
                          <Link href={sublink.href}>{sublink.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <button onClick={openModal} aria-label="Open search">
              <Icon className="size-5" icon="line-md:align-center" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
