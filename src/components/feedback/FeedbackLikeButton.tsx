"use client";

import { HeartIcon } from "@/src/components/utils/icons";
import { Button } from "../shadcn/components/ui/button";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function FeedbackLikeButton({
  likeCount = 0,
  feedbackId,
}: {
  likeCount?: number;
  feedbackId: string;
}) {
  const { data: session } = useSession();
  const token = session?.user.token;

  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(likeCount);

  const checkIsLiked = async () => {
    if (!session) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/feedbacks/${feedbackId}/like/exist`,
        {
          method: "GET",
          headers: {
            Authorization: session.user.token,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const { data } = await res.json();
      setIsLiked(data.status);
    } catch (error) {
      console.error("Failed to check like status:", error);
    }
  };

  const postLike = async (token: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/feedbacks/${feedbackId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error("Failed to like feedback:", error);
    }
  };

  const deleteLike = async (token: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/feedbacks/${feedbackId}/like`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error("Failed to like feedback:", error);
    }
  };

  const handleLike = async () => {
    if (!token) {
      toast("로그인 후 이용해주세요.");
      return;
    }
    if (isLiked) {
      setLike((prev) => prev - 1);
      deleteLike(token);
    } else {
      setLike((prev) => prev + 1);
      postLike(token);
    }
  };

  useEffect(() => {
    checkIsLiked();
  }, [session]);

  useEffect(() => {
    console.log("현재 좋아요 상태:", isLiked);
  }, [isLiked]);

  return (
    <div className="mb-1 flex justify-center">
      <Button
        variant="outline"
        className={`flex h-[30px] w-[69px] items-center justify-center gap-1 rounded-[30px] border ${
          isLiked ? "border-red-500 opacity-50" : "border-gray-400"
        }`}
        onClick={handleLike}
        disabled={!session}
      >
        <HeartIcon className={isLiked ? "text-red-500" : "text-gray-400"} />
        <p className="text-sm font-medium">{like}</p>
      </Button>
    </div>
  );
}
