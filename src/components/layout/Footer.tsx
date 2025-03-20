import { Icon } from "@iconify/react";
import Link from "next/link";

import { socialMediaLinks } from "@/data/links";

export default function Footer() {
  return (
    <footer className="footer fixed bottom-0 left-0 footer-center bg-transparent text-base-content p-4 backdrop-blur">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
