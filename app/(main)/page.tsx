import LinkGrid from "@/components/link/LinkGrid";
import { bookmarks } from "@/lib/mock-data";

export default function Home() {
  return <LinkGrid bookmarks={bookmarks} />;
}
