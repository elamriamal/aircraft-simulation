import { along, length, lineString } from "@turf/turf";

export function getFlightPositionAtTimestamp(routePoints, timestamp) {
  if (
    timestamp <= routePoints[0].time ||
    timestamp >= routePoints.at(-1).time
  ) {
    return undefined;
  }

  let prevPoint, nextPoint;
  let prevTime, nextTime;

  for (let i = 1; i < routePoints.length; i++) {
    if (timestamp < routePoints[i].time) {
      prevPoint = routePoints[i - 1];
      nextPoint = routePoints[i];
      prevTime = prevPoint.time;
      nextTime = nextPoint.time;
      break;
    }
  }

  const currentEdgeLineString = lineString([
    [prevPoint.longitude, prevPoint.latitude],
    [nextPoint.longitude, nextPoint.latitude],
  ]);

  const distanceBetweenPrevAndNext = length(currentEdgeLineString);
  const percentage = (timestamp - prevTime) / (nextTime - prevTime);
  const completedDistanceBetweenPrevAndNext =
    distanceBetweenPrevAndNext * percentage;

  const positionAtTimestampFeature = along(
    currentEdgeLineString,
    completedDistanceBetweenPrevAndNext
  );

  return {
    ...positionAtTimestampFeature,
  };
}
