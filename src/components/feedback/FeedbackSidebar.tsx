"use client";

import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import FeedbackRadioButton from "./FeedbackRadioButton";

export default function FeedbackSidebar() {
  return (
    <aside className="hidden w-[190px] flex-shrink-0 md:block">
      <div
        className="text-gray-500"
        role="group"
        aria-labelledby="feedback-status"
      >
        <h2 className="text-grey-500 flex h-5 items-center text-xs font-semibold">
          답변여부
        </h2>
        <ToggleGroup type="single" className="flex flex-col items-start">
          {["ALL", "답변 전", "답변 후"].map((status, idx) => (
            <ToggleGroupItem
              value={status}
              key={idx}
              onClick={() => console.log("clicked")}
            >
              <p
                className="flex h-10 items-center font-bold text-base"
                role="radio"
                aria-checked={idx === 0}
              >
                {status}
              </p>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="border-grey-300 my-5 border-b"></div>
      <h2 className="text-grey-500 flex h-5 items-center text-xs font-semibold">
        피드백 유형
      </h2>
      <FeedbackRadioButton className="mt-2 flex flex-col gap-2" />
    </aside>
  );
}
