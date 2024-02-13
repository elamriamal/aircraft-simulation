import { useEffect } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";

export const Airplane = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = `AIRPLANE_SOURCE_ID_${id}`;
  const AIRPLANE_LAYER_ID = `AIRPLANE_LAYER_ID_${id}`;
  useEffect(() => {
    map.addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",
      data: [],
    });

    map.addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",
      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "airport-15",
        "icon-size": 1.5,
        "icon-allow-overlap": true,
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map",
      },
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
    };
  }, [AIRPLANE_LAYER_ID, AIRPLANE_SOURCE_ID, map]);

  useEffect(() => {
    const positionFeature = getFlightPositionAtTimestamp(
      routePoints,
      timestamp
    );

    map.getSource(AIRPLANE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: positionFeature ? [positionFeature] : [],
    });
  }, [AIRPLANE_SOURCE_ID, map, routePoints, timestamp]);

  return null;
};
