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
      extension: {
        TData: new () => {
          getPOIDataFromSearchJson: (
            string,
            {
              reqCoordType: string,
              resCoordType: string,
              centerLon: number,
              centerLat: number,
            },
            {},
          ) => void;
        };
      };
      Map: {
        new (element: HTMLElement | string, options?: any): TMap;
        MapType: {
          SATELLITE: 4;
          HYBRID: 5;
          ROAD: 1;
        };
      };
      LatLng: new (lat: number, lon: number) => TMapLatLng;
      Marker: new (options?: {
        id?: string;
        name?: string;
        map: TMap;
        position: TMapLatLng;
        iconHTML?: string;
        iconSize?: TMapSize;
        label?: string;
        icon?: string;
        title?: string;
      }) => TMapMarker;
      Size: new (width: number, height: number) => TMapSize;
    };
  }
}

export {};
