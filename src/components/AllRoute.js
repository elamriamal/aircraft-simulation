import { useEffect } from "react";
import * as turf from "@turf/turf";

export const AllRoute = ({ map, routePoints, id }) => {
  const ROUTE_LINE_SOURCE_ID = `ROUTE_LINE_SOURCE_ID_${id}`;
  const ROUTE_LINE_LAYER_ID = `ROUTE_LINE_LAYER_ID_${id}`;
  useEffect(() => {
    var greatCircle = turf.greatCircle([routePoints[0].longitude, routePoints[0].latitude], [routePoints[1].longitude, routePoints[1].latitude], { steps: 100 });
    map.addSource(ROUTE_LINE_SOURCE_ID, {
      type: "geojson",
      data: [],
    });

    map.addLayer({
      id: ROUTE_LINE_LAYER_ID,
      type: "line",
      source: {
        type: 'geojson',
        data: greatCircle
    },
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#197adc", "line-width": 2 },
    });

    return () => {
      map.removeLayer(ROUTE_LINE_LAYER_ID);
      map.removeSource(ROUTE_LINE_SOURCE_ID);
    };
  }, [ROUTE_LINE_LAYER_ID, ROUTE_LINE_SOURCE_ID, map, routePoints]);

  return null;
};
