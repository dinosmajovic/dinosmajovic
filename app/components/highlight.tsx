const Highlight = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="inline-flex h-[22px] items-center gap-1 rounded-[4px] bg-neutral-50 py-0.5 px-1 text-sm font-medium ring-[0.5px] shadow-sm ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800 [&>svg]:size-3"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {icon}
      {children}
    </a>
  );
};

export { Highlight };
