import NewLinkForm from "@/components/link/NewLinkForm";
import { folders } from "@/lib/mock-data";

export default function NewLinkPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <h1 className="text-xl font-bold tracking-tight">새 링크</h1>
      <NewLinkForm folders={folders} />
    </div>
  );
}
