"use client";

import { fetchCommentList } from "@/src/app/api/feedback/fetchCommentList";
import {
  IFeedbackCommentListProps,
  IFeedbackCommentProps,
} from "@/src/types/feedback/feedbackList";
import { formatDate } from "@/src/utils/formatDate";
import Image from "next/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function FeedbackCommentItem({ userId, commentItem }: IFeedbackCommentProps) {
  const { commentId, content, createdAt, member } = commentItem;
  const author = member?.memberId;

  return (
    <article
      className="flex flex-col gap-2 pb-[9px] text-sm"
      aria-labelledby={`comment-${commentId}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Image
            className="rounded-full outline outline-1 outline-gray-300"
            src={member.profileImageUrl}
            width={24}
            height={24}
            alt={`${member.nickname}님의 프로필 이미지`}
          />
          <p
            id={`comment-${commentId}`}
            className="font-semibold text-gray-700"
          >
            {member.nickname}
          </p>
        </div>
        {Number(userId) === author && (
          <button className="text-xs font-semibold text-gray-500">삭제</button>
        )}
      </div>
      <p className="text-gray-600">{content}</p>
      <p className="text-xs text-gray-500">{formatDate(createdAt)}</p>
    </article>
  );
}

export default function FeedbackCommentList({
  id,
  userId,
}: IFeedbackCommentListProps) {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchCommentList(id),
  });

  const [comments, setComments] = useState(data?.data?.searchResults ?? []);

  // ✅ 데이터가 변경될 때 상태 업데이트 (최초 마운트 또는 새 데이터 요청 시)
  useEffect(() => {
    if (data?.data?.searchResults) {
      setComments(data.data.searchResults);
    }
  }, [data]);

  // ✅ 새로운 댓글을 추가하는 함수 (낙관적 업데이트)
  const addNewComment = (newComment: IFeedbackCommentProps["commentItem"]) => {
    setComments((prev) => [newComment, ...prev]);

    // `useQueryClient`를 이용해 서버 데이터 동기화
    queryClient.setQueryData(["comments", id], (oldData: any) => {
      return {
        ...oldData,
        data: {
          ...oldData.data,
          searchResults: [newComment, ...oldData.data.searchResults],
        },
      };
    });
  };

  if (isLoading)
    return <p className="text-center text-gray-500">댓글을 불러오는 중...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        댓글을 불러오는 중 오류가 발생했습니다.
      </p>
    );

  return (
    <section
      className="mt-5 w-full rounded-[20px] bg-white px-2 py-3"
      aria-label="댓글 리스트"
    >
      <div className="flex flex-col gap-2">
        {comments.length > 0 ? (
          comments.map((commentItem) => (
            <FeedbackCommentItem
              key={commentItem.commentId}
              commentItem={commentItem}
              userId={userId}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">아직 댓글이 없습니다.</p>
        )}
      </div>
    </section>
  );
}
