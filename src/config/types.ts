export type IconName =
  | "line-md:home-md"
  | "line-md:account"
  | "line-md:computer"
  | "line-md:document-list"
  | "line-md:linkedin"
  | "line-md:github-loop";

export interface Link {
  readonly href: string;
  readonly label: string;
  readonly icon: IconName;
  readonly kbd?: string;
  readonly sublinks?: readonly Link[];
  readonly download?: boolean | string;
  readonly ctaVariant?: "primary" | "accent";
  readonly openInNewTab?: boolean;
  readonly ariaLabel?: string;

  readonly showInNavbar?: boolean;
}
