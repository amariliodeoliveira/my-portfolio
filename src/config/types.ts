export type IconName =
  | "line-md:home-md"
  | "line-md:account"
  | "line-md:computer"
  | "line-md:linkedin"
  | "line-md:github-loop";

export interface Link {
  readonly href: string;
  readonly label: string;
  readonly icon: IconName;
  readonly kbd?: string;
  readonly sublinks?: readonly Link[];

  readonly showInNavbar?: boolean;
}
