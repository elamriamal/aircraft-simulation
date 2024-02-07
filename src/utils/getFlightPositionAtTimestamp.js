import { along, bearing, length, lineString } from "@turf/turf";

export function getFlightPositionAtTimestamp(routePoints, timestamp) {
  if (
    timestamp <= routePoints[0].time ||
    timestamp >= routePoints.at(-1).time
  ) {
    return undefined;
  }

  const nextPointIndex = routePoints.findIndex((rp) => timestamp < rp.time);

  const prevPoint = routePoints[nextPointIndex - 1];
  const nextPoint = routePoints[nextPointIndex];

  const currentEdgeLineString = lineString([
    [prevPoint.longitude, prevPoint.latitude],
    [nextPoint.longitude, nextPoint.latitude]
  ]);

  const percentage =
    (timestamp - prevPoint.time) / (nextPoint.time - prevPoint.time);

  const distanceBetweenPrevAndNext = length(currentEdgeLineString);

  const completedDistanceBetweenPrevAndNext =
    distanceBetweenPrevAndNext * percentage;

  const positionAtTimestampFeature = along(
    currentEdgeLineString,
    completedDistanceBetweenPrevAndNext
  );
  const positionAtTimestampFeatureOffset = along(
    currentEdgeLineString,
    completedDistanceBetweenPrevAndNext + 0.001
  );

  const airplaneBearing = bearing(
    positionAtTimestampFeature,
    positionAtTimestampFeatureOffset
  );

  return {
    ...positionAtTimestampFeature,
    properties: {
      bearing: airplaneBearing
    }
  };
}
