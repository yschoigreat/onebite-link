"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  count: number;
};

export default function AllButton({ count }: Props) {
  const active = usePathname() === "/";

  return (
    <Link
      href="/"
      aria-current={active ? "page" : undefined}
      className={`flex h-10 w-full items-center justify-between rounded-md px-3 text-sm font-semibold transition-colors ${
        active
          ? "bg-foreground text-background"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
      }`}
    >
      ALL
      <span className="text-xs font-normal opacity-70">{count}</span>
    </Link>
  );
}
