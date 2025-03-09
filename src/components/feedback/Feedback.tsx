import React from "react";
import MobileFeedbackFilterButtons from "./MobileFeedbackFilterButtons";
import MobileToolbarHandleButton from "./MobileToolbarHandleButton";
import MobileToolbar from "./MobileToolbar";
import Link from "next/link";

import FeedbackSidebar from "./FeedbackSidebar";
import FeedbackSearchbar from "./FeedbackSearchbar";
import { EditIcon } from "../utils/icons";
import FeedbackList from "./FeedbackList";
import { IFeedbackListItem } from "@/src/types/feedback/feedbackList";

type FeedbackProps_T = {
  feedbackList: IFeedbackListItem[];
};

export default function Feedback({ feedbackList }: FeedbackProps_T) {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center">
        {/* 툴바 영역 */}
        <div className="sticky top-0 z-10 flex w-full flex-col theme-bg pb-[11px]">
          <div className="relative mt-2 flex h-[30px] items-center justify-between md:hidden">
            <MobileFeedbackFilterButtons />
            <MobileToolbarHandleButton />
            <MobileToolbar />
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="theme-line flex h-10 w-full items-center justify-between border-b text-sm font-extrabold">
          <p className="theme-header-text">{`홈 > 피드백 게시판`}</p>
          <Link href={`/feedback/write`}>
            <EditIcon className="theme-edit-icon" />
          </Link>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="bg-blue mt-2 flex min-h-[917px] w-full">
          <FeedbackSidebar />
          <section className="flex flex-grow flex-col gap-3 md:ml-[22px]">
            <FeedbackSearchbar />
            {feedbackList.length ? (
              <FeedbackList feedbackList={feedbackList} />
            ) : (
              <div className="flex justify-center mt-[100px]">
                <p className="theme-feedback-no-result text-sm">
                  작성한 피드백이 없습니다.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
