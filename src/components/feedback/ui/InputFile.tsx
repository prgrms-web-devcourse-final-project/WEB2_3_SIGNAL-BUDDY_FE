"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface InputFileProps {
  setNewImageUrl: Dispatch<SetStateAction<File | null | string>>;
  newImageUrl?: string | File | null;
}

export default function InputFile({
  setNewImageUrl,
  newImageUrl,
}: InputFileProps) {
  const { image, setImage, clearImage } = useImagePreview(
    setNewImageUrl,
    newImageUrl,
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file || !validateFile(file)) return;

    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);
    setNewImageUrl(file);
  };

  return (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="image-upload">이미지 업로드</Label>
      <Input
        id="image-upload"
        type="file"
        accept="image/jpeg, image/png, image/webp"
        onChange={handleImageChange}
        className="cursor-pointer"
        aria-describedby="file-help"
      />
      <p id="file-help" className="text-xs text-gray-500">
        지원 파일 형식: JPG, PNG, WEBP (최대 5MB)
      </p>

      {image && <ImagePreview image={image} onRemove={clearImage} />}
    </div>
  );
}

// ✅ 커스텀 훅: 이미지 미리보기 처리
function useImagePreview(
  setNewImageUrl: Dispatch<SetStateAction<string | File | null>>,
  newImageUrl?: string | File | null,
) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof newImageUrl === "string") {
      setImage(newImageUrl);
    } else if (newImageUrl instanceof File) {
      const objectUrl = URL.createObjectURL(newImageUrl);
      setImage(objectUrl);
    }
  }, [newImageUrl]);

  const clearImage = () => {
    setImage(null);
    setNewImageUrl(null);
  };

  return { image, setImage, clearImage };
}

// ✅ 파일 유효성 검사 함수
function validateFile(file: File): boolean {
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 크기는 5MB 이하만 가능합니다.");
    return false;
  }

  const validTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!validTypes.includes(file.type)) {
    alert("JPEG, PNG, WEBP 형식의 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
}

// ✅ 이미지 미리보기 컴포넌트
function ImagePreview({
  image,
  onRemove,
}: {
  image: string;
  onRemove: () => void;
}) {
  return (
    <div className="relative mt-2">
      <Image
        src={image}
        alt="이미지 미리보기"
        className="w-full h-auto rounded-lg shadow-md"
        width={500}
        height={500}
      />
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-500/30 text-gray-600 hover:text-white hover:bg-slate-900/50"
        aria-label="이미지 삭제"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
