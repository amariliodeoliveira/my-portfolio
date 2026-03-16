import Link from "next/link";

import { Icon } from "@iconify/react";

import { socialLinks } from "@/config/social";

export default function Footer() {
  return (
    <footer className="footer footer-center text-base-content fixed bottom-0 left-0 bg-transparent p-4 backdrop-blur">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="btn items-center gap-2"
              >
                <Icon className="size-5" icon={link.icon} />
                <p className="font-normal uppercase">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
