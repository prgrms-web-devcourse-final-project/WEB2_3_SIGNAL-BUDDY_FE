"use client";

import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useBookmarkDestination } from "../actions/bookmark-direction";
import DestinationCard from "./my-page-bookmark-card";
import BookmarkToggleButton from "./my-page-bookmark-toggle-button";

export interface DestinationItem {
  id?: string;
  name: string;
  address?: string;
  bookmarked: boolean;
  lat?: number;
  lng?: number;
  bookmarkId?: number;
  recentPathId: number;
}

export default function RecentDestinationsItem({
  recentPathId,
  name,
  address,
  bookmarked,
  lat,
  lng,
}: DestinationItem) {
  const { data: session } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { add, remove } = useBookmarkDestination();

  const handleClickBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!session?.user?.memberId) return;

    if (bookmarked) {
      remove.mutate(recentPathId);
    } else {
      add.mutate(recentPathId);
    }
  };

  const handleNavigate = () => {
    const encodedName = encodeURIComponent(name);
    router.push(`/map/direction?end=${lng},${lat},${encodedName}`);
  };

  return (
    <li className="hover:theme-hover-recent-path mx-1 rounded-md">
      <div
        className="flex items-center justify-between my-[10px] px-1 cursor-pointer"
        onClick={handleNavigate}
      >
        <DestinationCard
          name={name}
          address={address}
          onClick={handleNavigate}
        />
        <BookmarkToggleButton
          isBookmarked={bookmarked}
          onClick={handleClickBookmark}
        />
      </div>
    </li>
  );
}
