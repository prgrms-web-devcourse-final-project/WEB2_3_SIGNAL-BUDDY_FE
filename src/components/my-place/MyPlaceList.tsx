"use client";

import { useSession } from "next-auth/react";
import client from "@/src/lib/api/client";
import { useEffect, useState } from "react";
import MyPlaceItem from "./MyPlaceItem";

interface Bookmark {
  bookmarkId: number;
  lat: number;
  lng: number;
  address: string;
  name: string;
  sequence: number;
}

export default function MyPlaceList() {
  const { data: session, status } = useSession();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const page = 0;
  const size = 10;

  useEffect(() => {
    if (session?.user?.memberId) {
      fetchMyPlaces();
    }
  }, [session?.user.memberId]);

  const fetchMyPlaces = async () => {
    try {
      const userId = session?.user?.memberId;
      if (!userId) return;

      const response = await client.get(`/api/members/${userId}/bookmarks`, {
        params: { page, size },
      });

      const { data: apiData } = response;
      if (apiData.status === "성공") {
        setBookmarks(apiData.data.searchResults);
      }
    } catch (error) {
      console.error("나의 장소 목록 불러오기 에러:", error);
    }
  };

  fetchMyPlaces.displayName = "abc";

  if (status === "loading") {
    return <div>로딩중...</div>;
  }

  if (!session) {
    return <div>로그인 해주세요</div>;
  }

  return (
    <div className="space-y-2">
      {bookmarks.map((item) => (
        <MyPlaceItem
          key={item.bookmarkId}
          name={item.name}
          address={item.address}
        />
      ))}
    </div>
  );
}
