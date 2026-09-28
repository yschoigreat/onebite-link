import { notFound } from "next/navigation";
import LinkGrid from "@/components/link/LinkGrid";
import { bookmarks, folders } from "@/lib/mock-data";

export default async function FolderPage(
  props: PageProps<"/folder/[folderId]">,
) {
  const { folderId } = await props.params;

  if (!folders.some((folder) => folder.id === folderId)) {
    notFound();
  }

  const folderBookmarks = bookmarks.filter(
    (bookmark) => bookmark.folderId === folderId,
  );

  return <LinkGrid bookmarks={folderBookmarks} />;
}
