import FeedbackList from "@/src/components/feedback/FeedbackList";
import MobileToolbar from "@/src/components/feedback/MobileToolbar";
import MobileToolbarHandleButton from "@/src/components/feedback/MobileToolbarHandleButton";
import { IFeedbackData } from "@/src/types/feedback";
import Link from "next/link";
import { EditIcon } from "lucide-react";
import FeedbackSidebar from "@/src/components/feedback/FeedbackSidebar";

// 필터 버튼 컴포넌트
const FeedbackFilterButtons = () => {
  const filterOptions = ["ALL", "답변 전", "답변 후"];
  return (
    <div className="flex items-center gap-1">
      {filterOptions.map((filter, index) => (
        <div
          key={index}
          className={`flex h-[30px] w-[80px] items-center justify-center rounded-[30px] text-sm font-semibold ${
            index === 0 ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

// 검색 바 컴포넌트
const FeedbackSearchBar = () => {
  return (
    <div className="hidden h-10 w-full gap-1 md:flex">
      <div className="border-1 flex h-full w-[117px] items-center justify-start rounded-[8px] border border-gray-300 bg-white p-3 text-sm font-medium text-gray-500">
        검색조건
      </div>
      <form className="mr-1">
        <input
          type="text"
          className="border-1 h-10 w-[264px] rounded-[8px] border border-gray-300 p-3 text-sm font-medium text-gray-500"
          placeholder="검색어를 입력해주세요."
        />
        <button className="ml-1 h-10 w-[70px] rounded-[8px] bg-gray-800 text-sm font-medium text-white">
          검색
        </button>
      </form>
    </div>
  );
};

// 더미 데이터
const feedbackListData: IFeedbackData[] = [
  {
    uid: 1,
    status: "답변 후",
    title: "피드백 제목",
    content: "피드백 내용",
    nickname: "닉네임",
    date: "2025.02.20",
  },
  {
    uid: 2,
    status: "답변 후",
    title: "피드백 제목",
    content: "피드백 내용",
    nickname: "닉네임",
    date: "2025.02.20",
  },
  {
    uid: 3,
    status: "답변 전",
    title: "피드백 제목",
    content: "피드백 내용",
    nickname: "닉네임",
    date: "2025.02.20",
  },
  {
    uid: 4,
    status: "답변 전",
    title: "피드백 제목",
    content: "피드백 내용",
    nickname: "닉네임",
    date: "2025.02.20",
  },
];

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center">
        {/* 툴바 영역 */}
        <div className="sticky top-0 z-10 flex w-full flex-col bg-gray-100 pb-[11px]">
          <div className="relative mt-2 flex h-[30px] items-center justify-between md:hidden">
            <FeedbackFilterButtons />
            <MobileToolbarHandleButton />
            <MobileToolbar />
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="border-grey-300 flex h-10 w-full items-center justify-between border-b text-sm font-extrabold">
          <p className="text-grey-700">{`홈 > 피드백 게시판`}</p>
          <Link href={`/feedback/write`}>
            <EditIcon className="text-gray-500" />
          </Link>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="bg-blue mt-2 flex min-h-[917px] w-full">
          <FeedbackSidebar />
          <section className="flex flex-grow flex-col gap-3 md:ml-[22px]">
            <FeedbackSearchBar />
            <FeedbackList feedbackListData={feedbackListData} />
          </section>
        </div>
      </div>
    </div>
  );
}
