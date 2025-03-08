"use client";

import { useSession } from "next-auth/react";
import { StarIcon } from "../utils/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/src/lib/api/client";

export interface DestinationItem {
  id?: string;
  name: string;
  address?: string;
  bookmarked: boolean;
  lat?: number;
  lng?: number;
  bookmarkId?: number;
}

export default function RecentDestinationsItem({
  name,
  address,
  lat,
  lng,
  bookmarked,
  bookmarkId,
}: DestinationItem) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const addBookmarkMutation = useMutation({
    mutationFn: async (destination: DestinationItem) => {
      if (!session?.user?.memberId) return;
      console.log("보낼 데이터:", destination);
      await client.post(`/api/members/${session.user.memberId}/bookmarks`, {
        name: destination.name,
        address: destination.address,
        lat: destination.lat,
        lng: destination.lng,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recentPaths", session?.user?.memberId],
      });
    },
    onError: (error) => {
      console.error(error);
      alert("북마크 저장에 실패했습니다.");
    },
  });

  const deleteBookmarkMutation = useMutation({
    mutationFn: async (bookmarkId: number) => {
      if (!session?.user?.memberId) return;
      console.log("북마크 해제 - 보낼 bookmarkId:", bookmarkId);

      await client.delete(`/api/members/${session.user.memberId}/bookmarks`, {
        params: {
          bookmarkId: bookmarkId,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myPlaces", session?.user?.memberId],
      });
    },
    onError: (error) => {
      console.error(error);
      alert("북마크 해제에 실패했습니다.");
    },
  });

  const handleClickBookmark = () => {
    if (!session?.user?.memberId) return;

    if (bookmarked) {
      if (!bookmarkId) {
        console.warn("bookmarkId가 없어 북마크 해제 불가");
        return;
      }
      deleteBookmarkMutation.mutate(bookmarkId);
    } else {
      addBookmarkMutation.mutate({ name, address, lat, lng, bookmarked });
    }
  };

  return (
    <li className="my-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              className="h-[24px] w-[24px]"
            >
              <path
                fillRule="evenodd"
                d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="theme-my-profile-location-name font-bold">{name}</p>
            <p className="theme-my-profile-location-address text-xs font-medium">
              {address}
              최근 목적지 주소
            </p>
          </div>
        </div>
        <div
          onClick={handleClickBookmark}
          className={`flex h-6 w-6 items-center justify-center rounded-full outline outline-1 ${
            bookmarked
              ? "outline-teal text-teal"
              : "outline-gray-300 text-gray-300"
          }`}
        >
          <StarIcon />
        </div>
      </div>
    </li>
  );
}
