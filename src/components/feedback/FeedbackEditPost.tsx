"use client";

import React, { useState } from "react";
import { CrossRoadSearchbar } from "@/src/components/feedback/ui/CrossRoadSearchbar";
import DropDownMenu from "@/src/components/feedback/ui/DropDownMenu";
import { ArrowLeftIcon } from "@/src/components/utils/icons";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { IFeedbackListItem } from "@/src/types/feedback/feedbackList";
import { onCancel } from "@/src/app/api/feedback/edit/onCancelEdit";
import { updateFeedback } from "@/src/app/api/feedback/edit/updateFeedback";
import InputFile from "./ui/InputFile";
import { toast } from "sonner";

export default function FeedbackEditPost({
  feedbackData,
  token,
}: {
  feedbackData: IFeedbackListItem;
  token: string;
}) {
  const { feedbackId, subject, content, category, crossroad, imageUrl } =
    feedbackData;

  const [title, setTitle] = useState<string>(subject);
  const [feedbackContent, setFeedbackContent] = useState<string>(content);
  const [feedbackCategory, setFeedbackCategory] = useState<string>(category);
  const [isSecret, setIsSecret] = useState(false);
  const [crossroadId, setCrossroadId] = useState<string | null>(
    crossroad.crossroadId.toString(),
  );
  const [newImageUrl, setNewImageUrl] = useState<string | File | null>(
    imageUrl || null,
  );

  const router = useRouter();

  // const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   const requestData = {
  //     subject: title,
  //     content: feedbackContent,
  //     category: feedbackCategory.toUpperCase(),
  //     secret: isSecret,
  //     crossroadId,
  //     updatedAt: new Date().toISOString(),
  //   };

  //   const imageFile = {
  //     newImageUrl,
  //   };

  //   if (!title || !content || !category) {
  //     console.log(formData);
  //     toast.error("내용을 모두 입력해주세요.");
  //     return;
  //   }
  //   console.log("뉴 이미지", imageFile);

  //   if (newImageUrl === null) {
  //     formData.delete("imageFile");
  //     formData.append("imageFile", "");
  //   } else if (newImageUrl instanceof File) {
  //     formData.delete("imageFile");
  //     formData.append("imageFile", newImageUrl);
  //   } else if (!newImageUrl) {
  //     formData.delete("imageFile");
  //   }

  //   formData.append(
  //     "request",
  //     new Blob([JSON.stringify(requestData)], { type: "application/json" }),
  //   );

  //   Swal.fire({
  //     title: "게시물을 수정하시겠습니까?",
  //     text: "수정된 내용이 저장됩니다.",
  //     showCancelButton: true,
  //     confirmButtonColor: "#8DB4AF",
  //     cancelButtonColor: "#64748B",
  //     confirmButtonText: "확인",
  //     cancelButtonText: "취소",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       await updateFeedback(formData, feedbackId, token, router);
  //     }
  //   });
  // };

  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    const requestData = {
      subject: title,
      content: feedbackContent,
      category: feedbackCategory.toUpperCase(),
      secret: isSecret,
      crossroadId,
      updatedAt: new Date().toISOString(),
    };

    if (!title || !feedbackContent || !feedbackCategory) {
      toast.error("내용을 모두 입력해주세요.");
      return;
    }

    if (newImageUrl === null) {
      formData.append("imageFile", "");
    } else if (newImageUrl instanceof File) {
      formData.append("imageFile", newImageUrl);
    }

    formData.append(
      "request",
      new Blob([JSON.stringify(requestData)], { type: "application/json" }),
    );

    // ✅ FormData 콘솔 출력
    console.log("🔍 FormData 내용 확인:");
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    Swal.fire({
      title: "게시물을 수정하시겠습니까?",
      text: "수정된 내용이 저장됩니다.",
      showCancelButton: true,
      confirmButtonColor: "#8DB4AF",
      cancelButtonColor: "#64748B",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateFeedback(formData, feedbackId, token, router);
      }
    });
  };

  return (
    <div className="flex flex-col md:mx-auto md:w-[821px]">
      {/* 헤더 영역 */}
      <div className="flex h-10 items-center gap-1 border-b theme-line">
        <div
          className="cursor-pointer flex h-10 items-center gap-1"
          onClick={() => onCancel(router, feedbackId)}
        >
          <ArrowLeftIcon className="h-6 w-6" />
          <p className="text-sm font-semibold theme-feedback-nav">뒤로가기</p>
        </div>
      </div>

      <form className="flex flex-col gap-4 pt-2" onSubmit={submitHandle}>
        {/* 제목 입력 */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="title"
            className="text-sm font-medium theme-feedback-filter"
          >
            제목
          </Label>
          <Input
            type="text"
            className="h-12 rounded-[4px] p-4 border theme-line theme-content-bg shadow-none text-gray-500 font-medium placeholder:text-gray-400"
            placeholder="제목을 입력해주세요."
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 피드백 유형 선택 */}
        <div className="flex flex-col gap-2">
          <p className="text-sm theme-feedback-filter font-medium">
            피드백 유형
          </p>
          <DropDownMenu addCategory={setFeedbackCategory} />
        </div>

        {/* 본문 입력 */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium theme-feedback-filter">본문</p>
          <textarea
            className="h-[409px] resize-none rounded-[4px] p-4 border theme-line theme-content-bg placeholder:text-sm placeholder:text-gray-400 text-gray-500 text-[14px]"
            placeholder="내용을 입력해주세요."
            value={feedbackContent}
            onChange={(e) => setFeedbackContent(e.target.value)}
          />
        </div>

        {/* 피드백 위치 */}
        <div className="flex flex-col gap-2">
          <CrossRoadSearchbar crossroadId={crossroadId!} />
        </div>

        {/* 이미지 입력 */}
        <div className="flex flex-col gap-2">
          <InputFile
            setNewImageUrl={setNewImageUrl}
            newImageUrl={newImageUrl}
          />
        </div>

        {/* 숨김처리 여부 */}
        {/* <div className="flex flex-col gap-2">
          <p className="text-sm font-medium theme-label">숨김처리</p>
          <div
            className="mb-[187px] flex cursor-pointer items-center gap-1 transition-all"
            onClick={() => setIsSecret(!isSecret)}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-sm border-2 transition-all ${
                isSecret ? "bg-gray-500" : "bg-white"
              }`}
            >
              {isSecret && <CheckIcon className="text-white" />}
            </div>
            <span className="text-xs font-medium text-gray-500">
              관리자만 보기
            </span>
          </div>
        </div> */}

        {/* 제출 버튼 */}
        <div className="flex justify-end">
          <button className="mb-[72px] h-10 w-[100px] rounded-[8px] bg-teal text-sm font-semibold text-white">
            저장
          </button>
        </div>
      </form>
    </div>
  );
}
