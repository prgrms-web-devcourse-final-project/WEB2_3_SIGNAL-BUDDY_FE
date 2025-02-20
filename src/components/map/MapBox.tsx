"use client";

import { ILocation, useGeoLocation } from "@/src/hooks/useGeoLocation";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Tmapv2: any;
  }
}

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export default function MapBox() {
  const [mapIns, setMapIns] = useState(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const { location } = useGeoLocation(geolocationOptions);

  const initTmap = (location: ILocation) => {
    const { Tmapv2 } = window;
    if (!Tmapv2) return;
    const mapDiv = document.getElementById("map") as HTMLDivElement;

    if (!mapDiv.firstChild) {
      const latitude = location.latitude || 37.5652045;
      const longitude = location.longitude || 126.98702028;

      const map = new Tmapv2.Map("map", {
        center: new Tmapv2.LatLng(latitude, longitude),
        width: "100%",
        height: "calc(100vh - 70px)",
        zoom: 17,
        zoomControl: true,
        scrollwheel: true,
      });
      setMapIns(map);
    }
  };

  useEffect(() => {
    console.log(mapIns);
    if (location) initTmap(location);
  }, [location]);

  return <div id="map" ref={mapRef} />;
}
