import Link from "next/link";

export default function NewLinkButton() {
  return (
    <Link
      href="/new"
      className="inline-flex h-9 items-center gap-1 rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
    >
      <span aria-hidden className="text-base leading-none">
        +
      </span>
      새 링크
    </Link>
  );
}
