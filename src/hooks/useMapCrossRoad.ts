import { useEffect, useRef, useState } from "react";
import { TMap, TMapCluster, TMapLatLng, TMapMarker } from "../types";

export type CrossRoadType = {
  crossroadId: number;
  crossroadApiId: string;
  name: string;
  lat: number;
  lng: number;
  status: string;
};

export default function useMapCrossRoad(map: TMap | null) {
  const ws = useRef<WebSocket | null>(null);
  const mapRef = useRef<TMap | null>(map);

  const [isLoading, setIsLoading] = useState(true);
  const [center, setCenter] = useState<TMapLatLng>(
    map
      ? map.getCenter()
      : { name: "skttop", _lat: 37.5652045, _lng: 126.98702028 },
  );

  const [crossRoadMarkers, setCrossRoadMarkers] = useState<TMapMarker[]>([]);
  const [crossCluster, setCrossCluster] = useState<TMapCluster | null>(null);

  const getRadiusByZoom = (zoom: number): number => {
    if (zoom >= 19) return 400;
    if (zoom >= 18) return 800;
    if (zoom >= 17) return 1000;
    if (zoom >= 15) return 3000;
    if (zoom >= 13) return 5000;
    if (zoom >= 11) return 7000;
    return 10000;
  };

  const addTargetMarker = (cross: CrossRoadType) => {
    const { Tmapv2 } = window;
    const currentMap = mapRef.current;
    if (!Tmapv2 || !currentMap) return null;

    const marker = new Tmapv2.Marker({
      id: cross.crossroadApiId,
      position: new Tmapv2.LatLng(cross.lat, cross.lng),
      map: currentMap,
      title: cross.name,
      icon: "/imgs/cross-marker.png",
    });
    return marker;
  };

  const addCluster = (markers: TMapMarker[]) => {
    const { Tmapv2 } = window;
    const currentMap = mapRef.current;
    if (!Tmapv2 || !currentMap) return null;
    const markerCluster = new Tmapv2.extension.MarkerCluster({
      markers,
      map: currentMap,
    });
    console.log(markerCluster);
    setCrossCluster(markerCluster);
  };

  useEffect(() => {
    mapRef.current = map;
  }, [map]);

  useEffect(() => {
    ws.current = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ws/location`,
    );

    ws.current.onopen = () => {
      setIsLoading(false);
      if (!mapRef.current) return;

      const payload = JSON.stringify({
        lat: center._lat,
        lng: center._lng,
        radius: getRadiusByZoom(mapRef.current.getZoom()),
      });
      ws.current?.send(payload);
    };

    ws.current.onmessage = (event) => {
      const responseData = JSON.parse(event.data);
      const data = responseData.data;

      crossRoadMarkers.forEach((marker) => marker.setMap(null));
      if (crossCluster) crossCluster.setMap(null);

      const newMarkers = data
        .map((cross: CrossRoadType) => addTargetMarker(cross))
        .filter(
          (marker: TMapMarker | null): marker is TMapMarker => marker !== null,
        );

      setCrossRoadMarkers(newMarkers);
      addCluster(newMarkers);
    };

    ws.current.onerror = () => console.log("WebSocket Error");
    ws.current.onclose = () => {
      console.log("Websocket connection is closed");
    };

    return () => {
      if (ws.current?.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || ws.current?.readyState !== WebSocket.OPEN) return;

    const zoom = mapRef.current.getZoom();
    const radius = getRadiusByZoom(zoom);

    const payload = JSON.stringify({
      lat: center._lat,
      lng: center._lng,
      radius,
    });

    ws.current.send(payload);
  }, [center, map]);

  useEffect(() => {
    if (!map) return;

    const handleCenterChange = () => {
      setCenter(map.getCenter());
    };

    map.addListener("dragend", handleCenterChange);
    map.addListener("zoom_changed", handleCenterChange);

    return () => {
      map.removeListener("dragend", handleCenterChange);
      map.removeListener("zoom_changed", handleCenterChange);
    };
  }, [map]);

  return { isLoading };
}
