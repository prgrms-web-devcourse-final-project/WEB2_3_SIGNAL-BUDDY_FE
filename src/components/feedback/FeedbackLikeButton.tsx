"use client";

import { HeartIcon } from "@/src/components/utils/icons";
import { Button } from "../shadcn/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addLikes,
  deleteLikes,
  getLikes,
} from "@/src/app/api/feedback/likeButton";
import { debounce } from "lodash";

export default function FeedbackLikeButton({
  likeCount = 0,
  feedbackId,
  likeStatus = false,
}: {
  likeCount?: number;
  feedbackId: string;
  likeStatus: boolean;
}) {
  const { data: session } = useSession();
  const token = session?.user?.token;
  const queryClient = useQueryClient();
  const [isLiked, setIsLiked] = useState(likeStatus);
  const [like, setLike] = useState(likeCount);

  const { isPending, mutate } = useMutation({
    mutationFn: async (liked: boolean) => {
      if (!token) return;
      return liked
        ? deleteLikes(feedbackId, token)
        : addLikes(feedbackId, token);
    },
    onMutate: async (liked) => {
      if (!token) return;

      await queryClient.cancelQueries({ queryKey: ["likes", feedbackId] });
      const previousLikes = queryClient.getQueryData<{ count: number }>([
        "likes",
        feedbackId,
      ]);

      setIsLiked(!liked);
      setLike((prev) => (liked ? prev - 1 : prev + 1));

      queryClient.setQueryData(["likes", feedbackId], {
        count: liked
          ? Math.max((previousLikes?.count ?? likeCount) - 1, 0)
          : (previousLikes?.count ?? likeCount) + 1,
      });

      return { previousLikes };
    },
    onError: (_, __, context) => {
      if (context?.previousLikes) {
        queryClient.setQueryData(["likes", feedbackId], context.previousLikes);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes", feedbackId] });
    },
  });

  const onLikeClicked = debounce(() => {
    if (!token || isPending) return;
    mutate(isLiked);
  }, 300);

  return (
    <div className="mb-1 flex justify-center">
      <Button
        variant="outline"
        className={`flex h-[30px] w-[69px] items-center justify-center gap-1 rounded-[30px] border ${
          isLiked ? "border-red-500 opacity-50" : "border-gray-400"
        }`}
        disabled={!token || isPending}
        onClick={onLikeClicked}
      >
        <HeartIcon className={isLiked ? "text-red-500" : "text-gray-400"} />
        <p className="text-sm font-medium">{like}</p>
      </Button>
    </div>
  );
}
