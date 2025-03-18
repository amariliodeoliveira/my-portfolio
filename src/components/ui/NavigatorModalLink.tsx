"use client";

import React from "react";
import Link from "next/link";

import { closeModal } from "@/utils/modal";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NavigatorModalLinkProps {
  href: string;
  label: string;
  kbd: string;
  icon?: string;
  modalId: string;
}

const NavigatorModalLink: React.FC<NavigatorModalLinkProps> = ({
  href,
  label,
  kbd,
  icon,
  modalId,
}) => {
  const handleClick = () => {
    closeModal(modalId);
  };

  return (
    <Link
      href={href}
      className="btn btn-block justify-between bg-transparent hover:bg-base-300 rounded-none border-0"
      onClick={handleClick}
    >
      <span className="flex gap-2">
        {icon && <Icon className="size-5" icon={icon} />}
        {label}
      </span>
      <kbd className="kbd">{kbd}</kbd>
    </Link>
  );
};

export default NavigatorModalLink;
