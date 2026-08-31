import { type ReactNode } from "react";

const maxWidthClassNames = {
  md: "max-w-4xl",
  lg: "max-w-6xl",
} as const;

type RoutePageProps = {
  children: ReactNode;
  labelledBy?: string;
  ariaHidden?: boolean;
  width?: keyof typeof maxWidthClassNames;
  className?: string;
  contentClassName?: string;
};

function getMaxWidthClassName(width: keyof typeof maxWidthClassNames) {
  if (width === "md") {
    return maxWidthClassNames.md;
  }

  return maxWidthClassNames.lg;
}

export default function RoutePage({
  children,
  labelledBy,
  ariaHidden,
  width = "lg",
  className = "",
  contentClassName = "",
}: RoutePageProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      aria-hidden={ariaHidden}
      className={`bg-base-200 min-h-screen pt-32 ${className}`.trim()}
    >
      <div
        className={`mx-auto flex w-full ${getMaxWidthClassName(width)} flex-col px-4 pb-12 ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
