import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/src/lib/api/client";
import { useSession } from "next-auth/react";

interface UseRenameBookmarkParams {
  bookmarkId: number;
  lng: number;
  lat: number;
  address: string;
  setOpen: (open: boolean) => void;
}

export function useRenameBookmark({
  bookmarkId,
  lng,
  lat,
  address,
  setOpen,
}: UseRenameBookmarkParams) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newName: string) => {
      if (!session?.user?.memberId) return;
      const body = {
        lng,
        lat,
        address,
        name: newName,
      };
      const response = await client.patch(
        `/api/members/${session.user.memberId}/bookmarks/${bookmarkId}`,
        body,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myPlaces", session?.user?.memberId],
      });
      setOpen(false);
    },
  });
}
