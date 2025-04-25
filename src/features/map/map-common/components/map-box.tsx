"use client";

import { useGeoLocation } from "@/src/hooks/use-geo-location";
import { useRef } from "react";
import useMap from "@/src/hooks/use-map";
import MapButtons from "@/src/features/map/map-common/components/map-btns";
import useMapCrossRoad from "@/src/hooks/use-map-crossroad";
import MapCrossRoad from "@/src/features/map/map-crossroads";
import MapSearch from "@/src/features/map/map-search";
import MapDirection from "@/src/features/map/map-direction";

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

  const { location, handleGetGeo, startWatching, stopWatching, isWatching } =
    useGeoLocation(geolocationOptions);
  const { mapIns, handleGetCenter } = useMap(mapRef, location);
  const {
    target: crossTarget,
    removeTarget,
    refreshState,
    refreshTrigger,
  } = useMapCrossRoad(mapIns);

  return (
    <div className="flex relative flex-grow max-w-[100vw] max-h-[calc(100vh-70px)] overflow-hidden">
      <div className="w-full md:w-[40%] md:max-w-[320px] md:h-[calc(100vh-70px)] bg-gray-100 pb-2 md:py-2 shadow-md absolute top-0 left-0 z-[999] flex flex-col items-center theme-bg">
        {crossTarget ? (
          <MapCrossRoad
            target={crossTarget}
            removeTarget={removeTarget}
            refreshState={refreshState}
            refreshTrigger={refreshTrigger}
          />
        ) : !slug ? (
          <MapSearch map={mapIns} location={location} />
        ) : slug[0] === "direction" ? (
          <MapDirection
            map={mapIns}
            location={location}
            getGEO={handleGetGeo}
            startWatching={startWatching}
            stopWatching={stopWatching}
            isWatching={isWatching}
          />
        ) : (
          <></>
        )}
      </div>
      <MapButtons
        map={mapIns}
        getGEO={handleGetGeo}
        setCenterLocation={handleGetCenter}
      />
      <div className="flex-1 relative cursor-grab">
        <div id="map" ref={mapRef} />
      </div>
    </div>
  );
}
