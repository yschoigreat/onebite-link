import FolderItem from "@/components/folder/FolderItem";
import type { Folder } from "@/lib/types";

type Props = {
  folders: Folder[];
};

export default function FolderList({ folders }: Props) {
  return (
    <ul className="flex flex-col gap-0.5">
      {folders.map((folder) => (
        <li key={folder.id}>
          <FolderItem folder={folder} />
        </li>
      ))}
    </ul>
  );
}
