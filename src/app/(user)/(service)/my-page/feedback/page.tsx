"use client";

import Feedback from "@/src/components/feedback/Feedback";
import FeedbackList from "@/src/components/feedback/FeedbackList";
import client from "@/src/lib/api/client";
import { IFeedbackListItem } from "@/src/types/feedback/feedbackList";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  const {
    data: feedbackList = [],
    isLoading,
    isError,
    error,
  } = useQuery<IFeedbackListItem[]>({
    queryKey: ["myFeedbacks", session?.user?.memberId],
    queryFn: async () => {
      const response = await client.get(`/api/feedbacks`, {
        params: {
          target: "writer",
          keyword: `${session?.user.nickname}`,
        },
      });
      const apiData = response.data;
      const feedbackList = apiData.data.searchResults;
      console.log(apiData);
      console.log(apiData.data);
      console.log(apiData.data.searchResults);
      console.log(apiData.searchParams);
      console.log(feedbackList);

      if (apiData.status === "성공") {
        return feedbackList as IFeedbackListItem[];
      }
      throw new Error("최근 경로 불러오기 실패");
    },
    enabled: !!session?.user?.memberId,
  });

  if (isLoading) return <div>로딩 중...</div>;

  if (!session) {
    return <div>로그인 해주세요</div>;
  }

  if (isError && error instanceof Error)
    return <div>에러가 발생했습니다: {error.message}</div>;
  console.log(session?.user?.memberId);

  return (
    <div>
      {feedbackList.length ? (
        <FeedbackList feedbackList={feedbackList} />
      ) : (
        <div className="flex justify-center mt-[100px]">
          <p className="theme-feedback-no-result text-sm">
            작성한 피드백이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
