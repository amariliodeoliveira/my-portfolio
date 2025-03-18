import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="footer footer-center bg-base-300/40 backdrop-blur-xl text-base-content p-4">
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
