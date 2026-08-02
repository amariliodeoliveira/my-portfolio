import { Icon } from "@iconify/react";
import Link from "next/link";

import useModal from "@/hooks/useModal";

import { MENU_ITEM_CLASSNAME } from "./constants";

interface NavigatorModalLinkProps {
  href: string;
  label: string;
  icon: string;
  kbd: string;
  modalId: string;
  external?: boolean;
}

export default function NavigatorModalLink({
  href,
  label,
  icon,
  kbd,
  modalId,
  external = false,
}: NavigatorModalLinkProps) {
  const { closeModal } = useModal(modalId);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={MENU_ITEM_CLASSNAME}
      onClick={() => closeModal()}
    >
      <span className="flex gap-2">
        {icon && <Icon className="size-5" icon={icon} />}
        {label}
      </span>
      <kbd className="kbd">{kbd}</kbd>
    </Link>
  );
}
