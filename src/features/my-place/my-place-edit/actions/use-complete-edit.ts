import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Bookmark } from "@/src/types/my-place";
import { useDeleteBookmarks } from "@/src/features/my-place/my-place-edit/actions/use-delete-bookmarks";
import { useReorderBookmarks } from "@/src/features/my-place/my-place-edit/actions/use-reorder-bookmarks";

interface UseCompleteEditProps {
  memberId?: number;
  deletedIds: number[];
  items: Bookmark[];
  page: number;
  size: number;
}

export function useCompleteEdit({
  memberId,
  deletedIds,
  items,
  page,
  size,
}: UseCompleteEditProps) {
  const router = useRouter();

  const deleteMutation = useDeleteBookmarks(memberId);
  const reorderMutation = useReorderBookmarks(memberId);

  const handleComplete = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();

      try {
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
      } catch (err) {
        console.error("편집 완료 처리 중 오류 발생:", err);
      }
    },
    [deletedIds, items, page, size, router, deleteMutation, reorderMutation],
  );

  return { handleComplete };
}
