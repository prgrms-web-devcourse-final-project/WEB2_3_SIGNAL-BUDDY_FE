"use client";

import { HeartIcon } from "@/src/components/utils/icons";
import { Button } from "../shadcn/components/ui/button";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addLikes,
  deleteLikes,
  getLikes,
} from "@/src/app/api/feedback/likeButton";

export default function FeedbackLikeButton({
  likeCount = 0,
  feedbackId,
}: {
  likeCount?: number;
  feedbackId: string;
}) {
  const { data: session } = useSession();
  const token = session?.user.token;
  const queryClient = useQueryClient();

  // 서버에서 받아온 좋아요 개수
  const { data: likes = 0 } = useQuery({
    queryKey: ["likes", feedbackId, token],
    queryFn: () => (token ? getLikes(feedbackId, token) : Promise.resolve(0)),
    enabled: !!token, // token이 없을 경우 API 요청 방지
  });

  // 사용자가 좋아요를 눌렀는지 여부
  const [liked, setLiked] = useState(false);

  // 좋아요 상태 초기화 (서버 데이터 기반)
  useEffect(() => {
    if (token) {
      setLiked(likes > likeCount); // 기본적으로 기존보다 좋아요 개수가 증가한 경우 liked 상태 변경
    }
  }, [likes, likeCount, token]);

  const likeMutation = useMutation({
    mutationFn: async () => {
      if (!token) throw new Error("token이 없습니다.");
      return liked
        ? deleteLikes(feedbackId, token)
        : addLikes(feedbackId, token);
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["likes", feedbackId, token],
      });

      const previousLikes = queryClient.getQueryData<number>([
        "likes",
        feedbackId,
        token,
      ]);

      // Optimistic UI 업데이트
      queryClient.setQueryData(
        ["likes", feedbackId, token],
        (old: number | undefined) =>
          old !== undefined ? (liked ? old - 1 : old + 1) : likeCount,
      );

      setLiked((prev) => !prev);

      return { previousLikes };
    },
    onError: (_error, _variables, context) => {
      // 요청 실패 시 롤백
      if (context?.previousLikes !== undefined) {
        queryClient.setQueryData(
          ["likes", feedbackId, token],
          context.previousLikes,
        );
      }
      setLiked((prev) => !prev);
    },
    onSettled: () => {
      // 서버에서 최신 데이터 가져오기
      queryClient.invalidateQueries({ queryKey: ["likes", feedbackId, token] });
    },
  });

  return (
    <div className="mb-1 flex justify-center">
      <Button
        variant="outline"
        className={`flex h-[30px] w-[69px] items-center justify-center gap-1 rounded-[30px] border ${
          liked ? "border-red-500 opacity-50" : "border-gray-400"
        }`}
        onClick={() => likeMutation.mutate()}
        disabled={!token}
      >
        <HeartIcon className={liked ? "text-red-500" : "text-gray-400"} />
        <p className="text-sm font-medium">{likes}</p>
      </Button>
    </div>
  );
}
