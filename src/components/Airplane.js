import { useEffect } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";

const AIRPLANE_SOURCE_ID = "AIRPLANE_SOURCE_ID";
const AIRPLANE_LAYER_ID = "AIRPLANE_LAYER_ID";

export const Airplane = ({ map, routePoints, timestamp }) => {
  useEffect(() => {
    map.addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",
      data: []
    });

    map.addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",
      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "airplane",
        "icon-allow-overlap": true,
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map"
      }
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
    };
  }, [map]);

  useEffect(() => {
    const positionFeature = getFlightPositionAtTimestamp(
      routePoints,
      timestamp
    );

    map.getSource(AIRPLANE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: positionFeature ? [positionFeature] : []
    });
  }, [map, routePoints, timestamp]);

  return null;
};
