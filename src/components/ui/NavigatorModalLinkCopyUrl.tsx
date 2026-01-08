"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import useModal from "@/hooks/useModal";

type NavigatorModalLinkCopyUrlProps = {
  query: string;
  label: string;
};

export default function NavigatorModalLinkCopyUrl({
  query,
  label,
}: NavigatorModalLinkCopyUrlProps) {
  const { closeModal } = useModal("navigation_modal");

  if (!label.toLowerCase().includes(query.toLowerCase())) {
    return null;
  }

  const handleClick = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.toString());
    closeModal();
  };

  return (
    <button
      className="btn btn-block hover:bg-base-300 justify-between rounded-none border-0 bg-transparent"
      onClick={handleClick}
    >
      <span className="flex gap-2">
        <Icon className="size-5" icon="line-md:link" />
        {label}
      </span>
      <kbd className="kbd">c</kbd>
    </button>
  );
}
