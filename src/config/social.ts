import { MyProfile } from "@/data";
import type { Link } from "./types";

export const socialLinks: readonly Link[] = [
  {
    href: MyProfile.socials.linkedin,
    label: "LinkedIn",
    icon: "line-md:linkedin",
    kbd: "l",
  },
  {
    href: MyProfile.socials.github,
    label: "GitHub",
    icon: "line-md:github-loop",
    kbd: "g",
  },
] as const;
