"use client";

import RecentDestinationsItem from "@/src/features/my-page/my-page-direction/components/my-page-direction-item";
import useRecentPaths from "@/src/features/my-page/my-page-direction/queries/recent-paths";

export interface Destination {
  recentPathId: number;
  name: string;
  address: string;
  lng: number;
  lat: number;
  lastAccessedAt: string;
  bookmarked: boolean;
}

export default function RecentDestinations() {
  const { destinations, isLoading, isError, error } = useRecentPaths();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError && error instanceof Error)
    return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <section className="rounded-[8px] theme-content-bg pb-4 pt-3">
      <h2 className="theme-feedback-filter-category mb-2 text-xs font-semibold px-2">
        최근 경로
      </h2>
      <ul className="flex flex-col gap-2">
        {destinations.length > 0 ? (
          destinations.map((item) => (
            <RecentDestinationsItem
              key={item.recentPathId}
              recentPathId={item.recentPathId}
              name={item.name}
              bookmarked={item.bookmarked}
              lat={item.lat}
              lng={item.lng}
              address={item.address}
            />
          ))
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center text-gray-500">
              최근 경로가 존재하지 않습니다.
            </p>
          </div>
        )}
      </ul>
    </section>
  );
}
