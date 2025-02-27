import FeedbackList from "@/src/components/feedback/FeedbackList";
import MobileToolbar from "@/src/components/feedback/MobileToolbar";
import MobileToolbarHandleButton from "@/src/components/feedback/MobileToolbarHandleButton";
import Link from "next/link";
import { EditIcon } from "lucide-react";
import FeedbackSidebar from "@/src/components/feedback/FeedbackSidebar";
import FeedbackSearchbar from "@/src/components/feedback/FeedbackSearchbar";

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

// data fetch 함수
const fetchData = async (searchParams: Record<string, string | undefined>) => {
  const params = await searchParams;
  const query = new URLSearchParams(
    params as Record<string, string>,
  ).toString();
  const res = await fetch(
    `http://52.79.71.9/api/feedbacks?${decodeURI(query)}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
  return res.json();
};

export default async function Page({
  searchParams = {},
}: {
  searchParams?: Record<string, string | undefined>;
}) {
  const res = await fetchData(searchParams || {});
  const feedbackList = res.data.searchResults;
  console.log(res.data.searchResults);

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
            <FeedbackSearchbar />
            {feedbackList.length ? (
              <FeedbackList feedbackListData={feedbackList} />
            ) : (
              <div className="flex justify-center mt-[100px]">
                <p className="text-gray-500 text-sm">검색 결과가 없습니다.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
