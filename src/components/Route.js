import { useEffect } from "react";

const ROUTE_POINTS_SOURCE_ID = "ROUTE_POINTS_SOURCE_ID";
const ROUTE_POINTS_LAYER_ID = "ROUTE_POINTS_LAYER_ID";

const ROUTE_LINE_SOURCE_ID = "ROUTE_LINE_SOURCE_ID";
const ROUTE_LINE_LAYER_ID = "ROUTE_LINE_LAYER_ID";

export const Route = ({ map, routePoints }) => {
  useEffect(() => {
    map.addSource(ROUTE_POINTS_SOURCE_ID, {
      type: "geojson",
      data: []
    });

    map.addSource(ROUTE_LINE_SOURCE_ID, {
      type: "geojson",
      data: []
    });

    map.addLayer({
      id: ROUTE_LINE_LAYER_ID,
      type: "line",
      source: ROUTE_LINE_SOURCE_ID,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#197adc", "line-width": 2 }
    });

    map.addLayer({
      id: ROUTE_POINTS_LAYER_ID,
      type: "circle",
      source: ROUTE_POINTS_SOURCE_ID,
      paint: {
        // Make circles larger as the user zooms from z12 to z22.
        "circle-radius": 4,
        // Color circles by ethnicity, using a `match` expression.
        "circle-color": "#1b71ab"
      }
    });

    return () => {
      map.removeLayer(ROUTE_POINTS_LAYER_ID);
      map.removeSource(ROUTE_POINTS_SOURCE_ID);
      map.removeLayer(ROUTE_LINE_LAYER_ID);
      map.removeSource(ROUTE_LINE_SOURCE_ID);
    };
  }, [map]);

  useEffect(() => {
    map.getSource(ROUTE_POINTS_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: routePoints.map((rp) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [rp.longitude, rp.latitude]
        }
      }))
    });

    map.getSource(ROUTE_LINE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: routePoints.map((rp) => [rp.longitude, rp.latitude])
          }
        }
      ]
    });
  }, [map, routePoints]);

  return null;
};
