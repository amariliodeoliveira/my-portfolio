import Link from "next/link";
import { usePathname } from "next/navigation";

import useModal from "@/hooks/useModal";

import { Icon } from "@iconify/react/dist/iconify.js";

interface NavigatorModalLinkProps {
  href: string;
  label: string;
  icon: string;
  kbd: string;
  modalId: string;
}

export default function NavigatorModalLink({ href, label, icon, kbd, modalId }: NavigatorModalLinkProps) {
  const pathname = usePathname();
  const { closeModal } = useModal(modalId);

  return (
    <Link
      href={href}
      className="btn btn-block justify-between bg-transparent hover:bg-base-300 rounded-none border-0"
      onClick={() => pathname === href && closeModal()}
    >
      <span className="flex gap-2">
        {icon && <Icon className="size-5" icon={icon} />}
        {label}
      </span>
      <kbd className="kbd">{kbd}</kbd>
    </Link>
  );
}
