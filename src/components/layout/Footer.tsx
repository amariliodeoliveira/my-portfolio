import { Icon } from "@iconify/react";
import Link from "next/link";

import { socialLinks } from "@/config/social";
import { MyProfile } from "@/data";

type FooterProps = {
  /**
   * "overlay": fixed, transparent footer floating over a full-height hero.
   * "inline": footer sitting in normal document flow at the end of the page.
   */
  variant: "overlay" | "inline";
};

function getFooterClassName(variant: FooterProps["variant"]) {
  if (variant === "overlay") {
    return "text-base-content/70 fixed bottom-0 left-0 w-full bg-transparent px-4 py-3 backdrop-blur";
  }

  return "border-base-content/10 text-base-content/70 border-t bg-base-200 px-4 py-6";
}

export default function Footer({ variant }: FooterProps) {
  return (
    <footer className={getFooterClassName(variant)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row">
        <p className="order-2 text-center sm:order-1 sm:text-left">
          © {new Date().getFullYear()} {MyProfile.name}. Software Engineer.
        </p>

        <nav aria-label="Social links" className="order-1 sm:order-2">
          <ul className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={variant === "overlay" ? false : undefined}
                  className="hover:text-primary focus-visible:outline-primary inline-flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <Icon
                    className="size-4"
                    icon={link.icon}
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
