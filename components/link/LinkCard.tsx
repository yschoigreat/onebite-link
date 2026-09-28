import type { Bookmark } from "@/lib/types";

type Props = {
  bookmark: Bookmark;
};

export default function LinkCard({ bookmark }: Props) {
  const hostname = new URL(bookmark.url).hostname.replace(/^www\./, "");

  return (
    <a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col gap-3 rounded-lg border border-zinc-200 p-4 transition-shadow hover:shadow-md dark:border-zinc-800"
    >
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="flex size-8 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-sm font-bold uppercase dark:bg-zinc-900"
        >
          {hostname.charAt(0)}
        </span>
        <span className="truncate text-xs text-zinc-500">{hostname}</span>
      </div>
      <h3 className="line-clamp-1 font-semibold">{bookmark.title}</h3>
      <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {bookmark.description}
      </p>
      <time
        dateTime={bookmark.createdAt}
        className="mt-auto text-xs text-zinc-500"
      >
        {bookmark.createdAt}
      </time>
    </a>
  );
}
