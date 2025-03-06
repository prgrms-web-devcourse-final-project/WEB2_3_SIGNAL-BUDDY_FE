"use client";

import { useGeoLocation } from "@/src/hooks/useGeoLocation";
import { useEffect, useRef, useState } from "react";
import useMap from "@/src/hooks/useMap";
import MapSearch from "./search/MapSearch";
import MapButtons from "./MapButtons";
import MapDirection from "./direction/MapDirection";
import { TMapLatLng } from "@/src/types";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

type Props = {
  slug?: string[];
};

export default function MapBox({ slug }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const ws = useRef<WebSocket | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { location, handleGetGeo } = useGeoLocation(geolocationOptions);
  const { mapIns } = useMap(mapRef, location);

  const [center, setCenter] = useState<TMapLatLng>(
    mapIns
      ? mapIns.getCenter()
      : { name: "skttop", _lat: 37.5652045, _lng: 126.98702028 },
  );

  useEffect(() => {
    ws.current = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ws/location`,
    );
    ws.current.onopen = () => {
      console.log("WebSocket connection opened.");
      setIsLoading(false);

      const payload = JSON.stringify({
        lat: center._lat,
        lng: center._lng,
        radius: 500,
      });
      ws.current?.send(payload);
    };
    ws.current.onmessage = (event) => {
      try {
        const responseData = JSON.parse(event.data);
        console.log("Received data:", responseData);
      } catch (e) {
        console.error("Error parsing WebSocket message", e);
      }
    };

    ws.current.onerror = () => console.log("WebSocket Error");
    ws.current.onclose = () => {
      console.log("Websocket connection is closed");
    };

    return () => {
      if (ws.current && ws.current.readyState === 1) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    const payload = JSON.stringify({
      lat: center._lat,
      lng: center._lng,
      radius: 500,
    });

    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(payload);
      console.log("CENTER", JSON.parse(payload));
    }
  }, [center]);

  useEffect(() => {
    if (mapIns) {
      mapIns.addListener("dragend", (e) => {
        const mapCenter = mapIns.getCenter();
        setCenter(mapCenter);
      });

      mapIns.addListener("zoom_changed", (e) => {
        const mapCenter = mapIns.getCenter();
        setCenter(mapCenter);
      });
    }
  }, [mapIns]);

  return (
    <div className="flex relative flex-grow max-w-[100vw] max-h-[calc(100vh-70px)] overflow-hidden">
      <div className="w-full md:w-[40%] md:max-w-[320px] md:h-[calc(100vh-70px)] bg-gray-100 pb-2 md:py-2 shadow-md absolute top-0 left-0 z-[999] flex flex-col items-center">
        {!slug ? (
          <MapSearch map={mapIns} location={location} />
        ) : slug[0] === "direction" ? (
          <MapDirection map={mapIns} location={location} />
        ) : (
          <></>
        )}
      </div>
      <MapButtons map={mapIns} getGEO={handleGetGeo} />
      <div className="flex-1 relative cursor-grab">
        <div id="map" ref={mapRef} />
      </div>
    </div>
  );
}
