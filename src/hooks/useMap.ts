import { useCallback, useState } from "react";
import { TMap, TMapMarker } from "../types";

// import { Marker } from '@/components/Map/Marker';

const { Tmapv2 } = window;

export const useMap = (mapRef: React.RefObject<HTMLDivElement | null>) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);

  // 지도 띄우는 코드 생략

  const updateMarker = useCallback(
    (coord: { latitude: number | null; longitude: number | null }) => {
      const { latitude, longitude } = coord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      if (currentMarker) {
        const { _lat: prevLatitude, _lng: prevLongitude } =
          currentMarker.getPosition();
        if (prevLatitude === latitude && prevLongitude === longitude) {
          return;
        }
      }

      currentMarker?.setMap(null);
      const position = new Tmapv2.LatLng(latitude, longitude);
      const marker = new Tmapv2.Marker({
        position,
        map: mapInstance,
        // icon: markerIcon,
        iconSize: new Tmapv2.Size(50, 50),
      });

      setCurrentMarker(marker);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentMarker],
  );

  return { mapInstance, updateMarker };
};
