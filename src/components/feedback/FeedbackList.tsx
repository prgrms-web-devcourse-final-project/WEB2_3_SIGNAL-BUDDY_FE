import Link from "next/link";
import { UserIcon } from "../utils/icons";
import { IFeedbackData } from "@/src/types/feedback";
import { formatDate } from "@/src/utils/formatDate";
import Image from "next/image";

function FeedbackItem({
  feedbackId,
  answerStatus,
  subject,
  content,
  member,
  createdAt,
}: IFeedbackData) {
  const statusColor = answerStatus === "ANSWERED" ? "bg-teal" : "bg-red";

  return (
    <div className="border-b border-gray-300 pb-6">
      <div className="flex flex-col gap-2">
        <div
          className={`flex h-[22px] w-[66px] items-center justify-center rounded-[30px] text-xs font-semibold text-white ${statusColor}`}
        >
          {answerStatus === "ANSWERED" ? "답변 후" : "답변 전"}
        </div>
        <Link href={`/feedback/${feedbackId}`} className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-black">{subject}</h2>
          <p className="text-sm font-medium text-gray-600">{content}</p>
        </Link>
      </div>
      <div className="mt-4 flex">
        <div className="outline-grey-300 mr-1 flex aspect-square w-6 items-center justify-center rounded-full bg-white outline outline-1">
          {/* <div>{member.profileImageUrl}</div> */}
          {/* <img
            src={member.profileImageUrl}
            alt="작성자 프로필 이미지입니다."
            width={16}
            height={16}
          /> */}
        </div>
        <p className="mr-4">{member.nickname}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}

export default function FeedbackList({
  feedbackListData,
}: {
  feedbackListData: IFeedbackData[];
}) {
  return (
    <>
      {feedbackListData.map((feedback, index) => (
        <FeedbackItem key={index} {...feedback} />
      ))}
    </>
  );
}
