export function convertToWGS84(x: number, y: number) {
  // eslint-disable-next-line prefer-const
  let lon = (x / 20037508.34) * 180;
  let lat = (y / 20037508.34) * 180;
  lat =
    (180 / Math.PI) *
    (2 * Math.atan(Math.exp((lat * Math.PI) / 180)) - Math.PI / 2);

  return { lat: lat, lon: lon };
}
