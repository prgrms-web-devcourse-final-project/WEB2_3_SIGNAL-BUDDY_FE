"use client";
import { useSearchParams } from "next/navigation";

export function CrossroadIdFetcher({
  onCrossroadId,
}: {
  onCrossroadId: (id: string | null) => void;
}) {
  const searchParams = useSearchParams();
  const crossroadId = searchParams.get("crossroadId");

  // 부모 컴포넌트로 전달
  onCrossroadId(crossroadId);

  return null;
}
