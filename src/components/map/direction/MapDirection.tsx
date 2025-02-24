"use client";

import { ILocation } from "@/src/hooks/useGeoLocation";
import {
  LineStringFeature,
  RouteFeature,
  TMap,
  TMapLatLng,
  TMapPolyline,
  TmapResponse,
} from "@/src/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  map: TMap | null;
  location?: ILocation;
};

export default function MapDirection({ map, location }: Props) {
  const searchParams = useSearchParams();
  const end = searchParams.get("end");
  const poliLineRef = useRef<TMapPolyline>(null);

  const onComplete = (data: { _responseData: TmapResponse }) => {
    const { Tmapv2 } = window;
    if (!Tmapv2 || !map) return;
    if (!data._responseData.features || !data._responseData.features.length) {
      return alert("경로가 없습니다.");
    }
    if (poliLineRef.current) {
      poliLineRef.current.setMap(null);
    }
    const features = data._responseData.features;
    console.log(features);
    drawRoute(features);
  };

  const drawRoute = (routeData: RouteFeature[]) => {
    const { Tmapv2 } = window;
    if (!Tmapv2 || !map) return;
    const path = routeData
      .filter(
        (item): item is LineStringFeature =>
          item.geometry.type === "LineString",
      )
      .flatMap((item) =>
        item.geometry.coordinates.map((coord) => {
          return new Tmapv2.LatLng(coord[1], coord[0]);
        }),
      );
    const Polyline = new Tmapv2.Polyline({
      path,
      strokeColor: "#0cd9bd",
      outline: true,
      strokeWeight: 6,
      map: map,
    });
    poliLineRef.current = Polyline;
    map.setCenter(path[Math.floor(path.length / 2)]);
    map.setZoom(14);
  };

  const handleGetRoad = async ({
    startX,
    startY,
    startName,
    endX,
    endY,
    endName,
  }: {
    startX: number;
    startY: number;
    startName: string;
    endX: number;
    endY: number;
    endName: string;
  }) => {
    const { Tmapv2 } = window;
    if (!Tmapv2) return;
    const tData = new Tmapv2.extension.TData();
    const params = {
      onComplete,
      onProgress: () => console.log("진행중..."),
      onError: () => alert("Error: 그런 건 없을지도..?"),
    };

    tData.getRoutePlanForPeopleJson(
      new Tmapv2.LatLng(startY, startX),
      new Tmapv2.LatLng(endY, endX),
      startName,
      endName,
      {},
      params,
    );
    // const url = "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1";

    // const headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   appKey: process.env.NEXT_PUBLIC_TMAP_API_KEY,
    // } as HeadersInit;

    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(payload),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   console.log("보행자 경로 데이터:", data);
    // } catch (error) {
    //   console.error("Error fetching pedestrian route:", error);
    // }
  };

  useEffect(() => {
    if (location && end) {
      const endArr = end?.split(",");
      if (endArr.length !== 3) return;
      const body = {
        startX: location.longitude,
        startY: location.latitude,
        startName: "현재 위치",
        endX: Number(endArr[0]),
        endY: Number(endArr[1]),
        endName: encodeURIComponent(endArr[2]),
      };

      handleGetRoad(body);
    }
  }, [location, end]);

  return <div>MapDirection</div>;
}
