/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/src/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function MobileFeedbackFilterButtons() {
  const filterOptions = ["ALL", "답변 전", "답변 후"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const statusMapping: Record<string, string> = {
    ALL: "",
    "답변 전": "before",
    "답변 후": "completion",
  };

  const currentStatus = searchParams.get("status") || "";

  const handleToggle = useCallback(
    (filter: string) => {
      const newStatus = statusMapping[filter];

      const params = new URLSearchParams(searchParams);
      if (newStatus) {
        params.set("status", newStatus);
      } else {
        params.delete("status");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    [statusMapping, searchParams, replace, pathname],
  );

  return (
    <div className="flex items-center gap-1">
      {filterOptions.map((filter) => {
        const isChecked = currentStatus === statusMapping[filter];

        return (
          <Button
            key={filter}
            className={`flex h-[30px] w-[80px] items-center justify-center rounded-[30px] text-sm font-semibold pt-3 
              ${isChecked ? "theme-feedback-button-checked text-white" : "theme-feedback-button-unchecked hover:theme-feedback-button-checked hover:text-white"}`}
            onClick={() => handleToggle(filter)}
          >
            {filter}
          </Button>
        );
      })}
    </div>
  );
}
