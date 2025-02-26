"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";

export default function FeedbackSearchbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const keywordFromURL = useMemo(
    () => searchParams.get("keyword") || "",
    [searchParams],
  );

  useEffect(() => {
    setSearchTerm(keywordFromURL);
  }, [keywordFromURL]);

  // 검색 실행 함수
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term.trim()) {
      params.set("keyword", term.trim());
    } else {
      params.delete("keyword");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="hidden h-10 w-full gap-1 md:flex">
      {/* 검색 조건 표시 */}
      <div className="border-1 flex h-full w-[117px] items-center justify-start rounded-[8px] border border-gray-300 bg-white p-3 text-sm font-medium text-gray-500">
        검색조건
      </div>

      {/* 검색 폼 */}
      <form onSubmit={handleSubmit} className="flex items-center gap-1">
        <input
          type="text"
          className="border-1 h-10 w-[264px] rounded-[8px] border border-gray-300 p-3 text-sm font-medium text-gray-500"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 w-[70px] rounded-[8px] bg-gray-800 text-sm font-medium text-white"
        >
          검색
        </button>
      </form>
    </div>
  );
}
