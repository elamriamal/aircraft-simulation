import mapboxgl from "mapbox-gl";
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

    map.getSource(ROUTE_LINE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: routePoints.map((rp) => [rp.longitude, rp.latitude]),
          },
        },
      ],
    });
    // When a click event occurs on a feature in the points layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", ROUTE_POINTS_LAYER_ID, (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      if (description && coordinates) {
        var popin = new mapboxgl.Popup();
        popin.setLngLat(coordinates).setHTML(description).addTo(map);
        popin.on("close", () => {});
      }
    });

    // Change the cursor to a pointer when the mouse is over the points layer.
    map.on("mouseenter", ROUTE_POINTS_LAYER_ID, () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", ROUTE_POINTS_LAYER_ID, () => {
      map.getCanvas().style.cursor = "";
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
