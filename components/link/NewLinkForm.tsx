"use client";

import type { FormEvent } from "react";
import FolderSelect from "@/components/folder/FolderSelect";
import type { Folder } from "@/lib/types";

type Props = {
  folders: Folder[];
};

export default function NewLinkForm({ folders }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="url" className="text-sm font-medium">
          링크
        </label>
        <input
          id="url"
          name="url"
          type="url"
          required
          placeholder="https://example.com"
          className="h-10 w-full rounded-md border border-zinc-200 bg-background px-3 text-sm dark:border-zinc-800"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="folder" className="text-sm font-medium">
          폴더
        </label>
        <FolderSelect id="folder" name="folder" folders={folders} />
      </div>
      <button
        type="submit"
        className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        저장
      </button>
    </form>
  );
}
