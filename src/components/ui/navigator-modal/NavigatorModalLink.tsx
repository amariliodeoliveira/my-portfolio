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
  download?: boolean | string;
  openInNewTab?: boolean;
  ariaLabel?: string;
}

export default function NavigatorModalLink({
  href,
  label,
  icon,
  kbd,
  modalId,
  external = false,
  download,
  openInNewTab = false,
  ariaLabel,
}: NavigatorModalLinkProps) {
  const { closeModal } = useModal(modalId);
  const shouldOpenInNewTab = external || openInNewTab;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={shouldOpenInNewTab ? "_blank" : undefined}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      download={download}
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
