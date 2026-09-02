import type { PropsWithChildren } from "react";

type SkeletonTextProps = PropsWithChildren<{
  loading: boolean;
}>;

export default function SkeletonText({ children, loading }: SkeletonTextProps) {
  if (!loading) return children;

  return (
    <span className="skeleton box-decoration-clone text-transparent">
      {children}
    </span>
  );
}
