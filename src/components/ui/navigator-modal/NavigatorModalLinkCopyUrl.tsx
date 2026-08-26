"use client";

import { Icon } from "@iconify/react";

import useModal from "@/hooks/useModal";

import { MENU_ITEM_CLASSNAME } from "./constants";

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
    const url = new URL(globalThis.location.href);
    void navigator.clipboard.writeText(url.toString());
    closeModal();
  };

  return (
    <button className={MENU_ITEM_CLASSNAME} onClick={handleClick}>
      <span className="flex gap-2">
        <Icon className="size-5" icon="line-md:link" />
        {label}
      </span>
      <kbd className="kbd">c</kbd>
    </button>
  );
}
