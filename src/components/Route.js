import { useEffect } from "react";

export const Route = ({ map, routePoints, id }) => {
  const ROUTE_POINTS_SOURCE_ID = `ROUTE_POINTS_SOURCE_ID_${id}`;
  const ROUTE_POINTS_LAYER_ID = `ROUTE_POINTS_LAYER_ID_${id}`;
  const ROUTE_LINE_SOURCE_ID = `ROUTE_LINE_SOURCE_ID_${id}`;
  const ROUTE_LINE_LAYER_ID = `ROUTE_LINE_LAYER_ID_${id}`;
  useEffect(() => {
    map.addSource(ROUTE_POINTS_SOURCE_ID, {
      type: "geojson",
      data: [],
    });

    map.addSource(ROUTE_LINE_SOURCE_ID, {
      type: "geojson",
      data: [],
    });

    map.addLayer({
      id: ROUTE_LINE_LAYER_ID,
      type: "line",
      source: ROUTE_LINE_SOURCE_ID,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#197adc", "line-width": 2 },
    });

    map.addLayer({
      id: ROUTE_POINTS_LAYER_ID,
      type: "circle",
      source: ROUTE_POINTS_SOURCE_ID,
      paint: {
        // Make circles larger as the user zooms from z12 to z22.
        "circle-radius": 3,
        // Color circles by ethnicity, using a `match` expression.
        "circle-color": "#1b71ab",
      },
    });

    return () => {
      map.removeLayer(ROUTE_POINTS_LAYER_ID);
      map.removeSource(ROUTE_POINTS_SOURCE_ID);
      map.removeLayer(ROUTE_LINE_LAYER_ID);
      map.removeSource(ROUTE_LINE_SOURCE_ID);
    };
  }, [
    ROUTE_LINE_LAYER_ID,
    ROUTE_LINE_SOURCE_ID,
    ROUTE_POINTS_LAYER_ID,
    ROUTE_POINTS_SOURCE_ID,
    map,
  ]);

  useEffect(() => {
    map.getSource(ROUTE_POINTS_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: routePoints.map((rp) => ({
        type: "Feature",
        properties: {
          description: `<div style="color: black"><strong> ${rp.name}</strong>
          <p>Latitude ${rp.latitude}</p>
          <p>Longitude ${rp.longitude}</p>
          <p>Altitude ${rp.altitudeFt} ft</p>
          </div>`,
        },
        geometry: {
          type: "Point",
          coordinates: [rp.longitude, rp.latitude],
        },
      })),
    });

  }, [
    ROUTE_LINE_SOURCE_ID,
    ROUTE_POINTS_LAYER_ID,
    ROUTE_POINTS_SOURCE_ID,
    map,
    routePoints,
  ]);

  return null;
};
