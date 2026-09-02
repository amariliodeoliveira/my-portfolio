import { Icon } from "@iconify/react";
import Link from "next/link";

export default function BackToHomeLink() {
  return (
    <Link href="/" className="btn justify-between">
      <span>Go back to home</span>
      <Icon
        icon="line-md:arrow-small-right"
        aria-hidden="true"
        className="size-5"
      />
    </Link>
  );
}
