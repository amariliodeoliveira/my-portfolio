import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer fixed bottom-0 left-0 footer-center bg-transparent text-base-content p-4 backdrop-blur">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/amariliodeoliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn items-center gap-2"
            >
              <Icon className="size-5" icon="line-md:linkedin" />
              <p className="font-medium">LinkedIn</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/amariliodeoliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn items-center gap-2"
            >
              <Icon className="size-5" icon="line-md:github-loop" />
              <p className="font-medium">GitHub</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
