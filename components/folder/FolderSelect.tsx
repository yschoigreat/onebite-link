import type { Folder } from "@/lib/types";

type Props = {
  folders: Folder[];
  id?: string;
  name?: string;
};

export default function FolderSelect({ folders, id, name }: Props) {
  return (
    <select
      id={id}
      name={name}
      defaultValue=""
      required
      className="h-10 w-full rounded-md border border-zinc-200 bg-background px-3 text-sm dark:border-zinc-800"
    >
      <option value="" disabled>
        폴더를 선택하세요
      </option>
      {folders.map((folder) => (
        <option key={folder.id} value={folder.id}>
          {folder.name}
        </option>
      ))}
    </select>
  );
}
