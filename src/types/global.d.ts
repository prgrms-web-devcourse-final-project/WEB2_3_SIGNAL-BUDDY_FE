import { TMap, TMapLatLng, TMapMarker, TMapSize } from "@/src/types";

declare global {
  interface Window {
    Tmapv2: {
      Map: new (
        element: HTMLElement | string,
        options?: {
          center?: TMapLatLng;
          scaleBar?: boolean;
          width?: string | number;
          height?: string | number;
          zoom?: number;
          zoomControl?: boolean;
          scrollwheel?: boolean;
        },
      ) => TMap;
      LatLng: new (lat: number, lon: number) => TMapLatLng;
      Marker: new (options?: {
        name?: string;
        map: TMap;
        position: TMapLatLng;
        iconHTML?: string;
        iconSize?: TMapSize;
        label?: string;
        icon?: string;
      }) => TMapMarker;
      Size: new (width: number, height: number) => TMapSize;
    };
  }
}

export {};
