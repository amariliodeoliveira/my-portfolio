import { Icon } from "@iconify/react";
import Link from "next/link";

import { socialLinks } from "@/config/social";

type FooterProps = {
  /**
   * "overlay": fixed, transparent footer floating over a full-height hero.
   * "inline": footer sitting in normal document flow at the end of the page.
   */
  variant: "overlay" | "inline";
};

const footerClassNames: Record<FooterProps["variant"], string> = {
  overlay:
    "footer footer-center text-base-content fixed bottom-0 left-0 bg-transparent p-4 backdrop-blur",
  inline:
    "footer footer-center bg-base-300/40 text-base-content p-4 backdrop-blur-xl",
};

const labelClassNames: Record<FooterProps["variant"], string> = {
  overlay: "font-normal uppercase",
  inline: "font-medium",
};

export default function Footer({ variant }: FooterProps) {
  return (
    <footer className={footerClassNames[variant]}>
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={variant === "overlay" ? false : undefined}
                className="btn items-center gap-2"
              >
                <Icon className="size-5" icon={link.icon} />
                <p className={labelClassNames[variant]}>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
