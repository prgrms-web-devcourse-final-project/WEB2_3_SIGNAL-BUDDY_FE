"use client";

import { useGeoLocation } from "@/src/hooks/useGeoLocation";
import { useRef } from "react";
import useMap from "@/src/hooks/useMap";
import MapSearch from "./MapSearch";
import MapButtons from "./MapButtons";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export default function MapBox() {
  const mapRef = useRef<HTMLDivElement>(null);

  const { location, handleGetGeo } = useGeoLocation(geolocationOptions);
  const { mapIns } = useMap(mapRef, location);

  return (
    <div className="flex relative flex-grow max-w-[100vw] max-h-[calc(100vh-70px)] overflow-hidden">
      <div className="w-full md:w-[40%] md:max-w-[320px] h-[calc(100vh-70px)] bg-gray-100 py-2 px-4 shadow-md absolute -translate-y-[70px] md:translate-y-0 top-full md:top-0 left-0 z-[999] flex flex-col">
        <MapSearch map={mapIns} location={location} />
      </div>
      <MapButtons map={mapIns} getGEO={handleGetGeo} />
      <div className="flex-1 relative">
        <div id="map" ref={mapRef} />
      </div>
    </div>
  );
}
