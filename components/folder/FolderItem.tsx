"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Folder } from "@/lib/types";

type Props = {
  folder: Folder;
};

export default function FolderItem({ folder }: Props) {
  const href = `/folder/${folder.id}`;
  const active = usePathname() === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex h-9 w-full items-center justify-between rounded-md px-3 text-sm transition-colors ${
        active
          ? "bg-zinc-100 font-medium dark:bg-zinc-900"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
      }`}
    >
      <span className="truncate">{folder.name}</span>
      <span className="text-xs text-zinc-500">{folder.count}</span>
    </Link>
  );
}
