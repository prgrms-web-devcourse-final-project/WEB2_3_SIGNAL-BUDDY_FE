"use client";

import { useGeoLocation } from "@/src/hooks/useGeoLocation";
import { useRef } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import useMap from "@/src/hooks/useMap";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export default function MapBox() {
  const mapRef = useRef<HTMLDivElement>(null);

  const { location, handleGetGeo } = useGeoLocation(geolocationOptions);
  const { mapIns } = useMap(mapRef, location);

  const handleClickCurrentPosition = () => {
    handleGetGeo();
  };

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
