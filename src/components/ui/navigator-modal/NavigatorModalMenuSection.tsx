type NavigatorModalMenuSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function NavigatorModalMenuSection({
  title,
  children,
}: NavigatorModalMenuSectionProps) {
  return (
    <>
      <h3 className="p-4 pb-2 text-xs tracking-wide uppercase opacity-60">
        {title}
      </h3>

      <ul className="list *:list-item">{children}</ul>
    </>
  );
}
