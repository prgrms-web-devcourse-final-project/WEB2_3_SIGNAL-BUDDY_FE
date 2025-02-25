export const DEFAULT_ZOOM_LEVEL = 16;
export const INITIAL_LATITUDE = 37.566481622437934;
export const INITIAL_LONGITUDE = 126.98502302169841;
export const MAX_ZOOM_LEVEL = 17;
export const MIN_ZOOM_LEVEL = 7;

export const TMAP_TURN_TYPE = {
  11: "직진",
  12: "좌회전",
  13: "우회전",
  14: "유턴",
  16: "8시 방향 좌회전",
  17: "10시 방향 좌회전",
  18: "2시 방향 우회전",
  19: "4시 방향 우회전",
  184: "경유지",
  185: "첫번째 경유지",
  186: "두번째 경유지",
  187: "세번째 경유지",
  188: "네번째 경유지",
  189: "다섯번째 경유지",
  125: "육교",
  126: "지하보도",
  127: "계단 진입",
  128: "경사로 진입",
  129: "계단+경사로 진입",
  200: "출발지",
  201: "목적지",
  211: "횡단보도",
  212: "좌측 횡단보도",
  213: "우측 횡단보도",
  214: "8시 방향 횡단보도",
  215: "10시 방향 횡단보도",
  216: "2시 방향 횡단보도",
  217: "4시 방향 횡단보도",
  218: "엘리베이터",
  233: "직진 임시",
} as { [key: number]: string };
export const TMAP_FACILITY_TYPE = {
  1: "교량",
  2: "터널",
  3: "고가도로",
  11: "일반보행자도로",
  12: "육교",
  14: "지하보도",
  15: "횡단보도",
  16: "대형시설물이동통로",
  17: "계단",
} as { [key: string]: string };
export const TMAP_POINT_TYPE = {
  SP: "출발지",
  EP: "도착지",
  PP: "경유지",
  PP1: "경유지1",
  PP2: "경유지2",
  PP3: "경유지3",
  PP4: "경유지4",
  PP5: "경유지5",
  GP: "일반 안내점",
};
