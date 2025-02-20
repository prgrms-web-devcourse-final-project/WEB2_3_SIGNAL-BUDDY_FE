import {
  MapOptions,
  TMap,
  TMapLatLng,
  TMapMarker,
  TMapSize,
} from "@/src/types";

declare global {
  interface Window {
    Tmapv2: {
      Map: new (element: HTMLElement | string, options?: MapOptions) => TMap;
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
