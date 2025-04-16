import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDeleteBookmarks } from "@/src/features/my-place/my-place-edit/actions/use-delete-bookmarks";
import { useReorderBookmarks } from "@/src/features/my-place/my-place-edit/actions/use-reorder-bookmarks";
import { DropResult } from "@hello-pangea/dnd";
import { Bookmark } from "@/src/types/my-place";

export function useMyPlaceEdit(
  searchResults: Bookmark[],
  memberId?: number,
  page = 0,
  size = 15,
) {
  const router = useRouter();
  const [items, setItems] = useState<Bookmark[]>([]);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  const deleteMutation = useDeleteBookmarks(memberId);
  const reorderMutation = useReorderBookmarks(memberId);

  useEffect(() => {
    if (searchResults.length) {
      setItems(searchResults);
    }
  }, [searchResults]);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const updated = Array.from(items);
    const [movedItem] = updated.splice(source.index, 1);
    updated.splice(destination.index, 0, movedItem);
    setItems(updated);
  };

  const handleDelete = (bookmarkId: number) => {
    setItems((prev) => prev.filter((item) => item.bookmarkId !== bookmarkId));
    setDeletedIds((prev) => [...prev, bookmarkId]);
  };

  const handleComplete = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (deletedIds.length > 0) {
      await deleteMutation.mutateAsync(deletedIds);
    }

    if (items.length > 0) {
      const reorderBody = items.map((item, idx) => ({
        id: item.bookmarkId,
        targetSequence: page * size + idx + 1,
      }));
      await reorderMutation.mutateAsync(reorderBody);
    }

    router.push("/my-place");
  };

  return {
    items,
    deletedIds,
    handleDragEnd,
    handleDelete,
    handleComplete,
  };
}
