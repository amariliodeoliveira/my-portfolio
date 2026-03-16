import Link from "next/link";
import { Icon } from "@iconify/react";

import { socialLinks } from "@/config/social";

export default function AboutFooter() {
  return (
    <footer className="footer footer-center bg-base-300/40 text-base-content p-4 backdrop-blur-xl">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn items-center gap-2"
              >
                <Icon className="size-5" icon={link.icon} />
                <p className="font-medium">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
