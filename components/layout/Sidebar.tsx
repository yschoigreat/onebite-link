import AllButton from "@/components/folder/AllButton";
import FolderList from "@/components/folder/FolderList";
import { folders } from "@/lib/mock-data";

export default function Sidebar() {
  const total = folders.reduce((sum, folder) => sum + folder.count, 0);

  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-4 overflow-y-auto border-r border-zinc-200 p-4 md:flex dark:border-zinc-800">
      <AllButton count={total} />
      <div className="flex flex-col gap-1">
        <h2 className="px-3 text-xs font-semibold tracking-wider text-zinc-500">
          폴더
        </h2>
        <FolderList folders={folders} />
      </div>
    </aside>
  );
}
