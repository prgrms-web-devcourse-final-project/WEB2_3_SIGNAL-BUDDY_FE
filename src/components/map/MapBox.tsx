"use client";

import { DEFAULT_ZOOM_LEVEL } from "@/src/constants";
import { ILocation, useGeoLocation } from "@/src/hooks/useGeoLocation";
import { TMap, TMapMarker } from "@/src/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export default function MapBox() {
  const [mapIns, setMapIns] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);

  const { location, handleGetGeo } = useGeoLocation(geolocationOptions);

  const initTmap = () => {
    const { Tmapv2 } = window;
    if (!Tmapv2) return;
    const mapDiv = document.getElementById("map") as HTMLDivElement;

    if (!mapDiv.firstChild) {
      const latitude = 37.5652045;
      const longitude = 126.98702028;

      const position = new Tmapv2.LatLng(latitude, longitude);

      const map = new Tmapv2.Map("map", {
        center: position,
        width: "100%",
        height: "calc(100vh - 70px)",
        zoom: DEFAULT_ZOOM_LEVEL,
        zoomControl: true,
        scrollwheel: true,
      });

      const marker = new Tmapv2.Marker({
        name: "currentTarget",
        position,
        map,
        icon: "/imgs/current-marker.png",
        iconSize: new Tmapv2.Size(50, 50),
      });

      setCurrentMarker(marker);
      setMapIns(map);
    }
  };

  const handleGetCenter = (location?: ILocation) => {
    if (location && mapIns) {
      const { Tmapv2 } = window;
      if (!Tmapv2) return;
      const latitude = location?.latitude || 37.5652045;
      const longitude = location?.longitude || 126.98702028;

      const position = new Tmapv2.LatLng(latitude, longitude);
      mapIns.setCenter(position);
      if (currentMarker) {
        setTimeout(() => {
          console.log(currentMarker, position);
          currentMarker.setPosition(position);
        }, 0);
      }
    }
  };

  const handleClickCurrentPosition = () => {
    handleGetGeo();
  };

  useEffect(() => {
    initTmap();
    handleGetCenter(location);
  }, [location, mapIns]);

  return (
    <div className="relative">
      <div id="map" ref={mapRef} />
      <button
        onClick={handleClickCurrentPosition}
        className="absolute bottom-10 left-10 border rounded-full hover:bg-gray-200 border-gray-300 z-999 bg-gray-100 p-1"
      >
        <ArrowDownCircleIcon className="w-6 h-6 text-teal" />
      </button>
    </div>
  );
}
