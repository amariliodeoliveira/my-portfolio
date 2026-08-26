"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationLinks } from "@/config/navigation";
import { MyProfile } from "@/data";
import useModal from "@/hooks/useModal";

export default function Header() {
  const { openModal } = useModal("navigation_modal");
  const [openDropdownHref, setOpenDropdownHref] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        openModal();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [openModal]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDropdownHref(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdownHref(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
              <li key={link.href} ref={link.sublinks ? dropdownRef : undefined}>
                {link.sublinks ? (
                  <details open={openDropdownHref === link.href}>
                    <summary
                      onClick={(event) => {
                        event.preventDefault();
                        setOpenDropdownHref((currentHref) =>
                          currentHref === link.href ? null : link.href,
                        );
                      }}
                    >
                      {link.label}
                    </summary>

                    <ul className="w-fit">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            onClick={() => setOpenDropdownHref(null)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    aria-label={link.ariaLabel}
                    download={link.download}
                    target={link.openInNewTab ? "_blank" : undefined}
                    rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                    className={
                      link.ctaVariant === "primary"
                        ? "bg-primary text-primary-content hover:bg-primary/90"
                        : ""
                    }
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <button onClick={openModal} aria-label="Open menu">
              <Icon className="size-5" icon="line-md:menu" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
