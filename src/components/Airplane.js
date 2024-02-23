import { useEffect, useState } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import "../assets/styles.css";
import { v4 as uuidv4 } from "uuid";
import { AllRoute } from "./AllRoute";
import * as turf from "@turf/turf";
import FlightTracker from "./FlightTracker";

export const Airplane = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = `AIRPLANE_SOURCE_ID_${id}`;
  const AIRPLANE_LAYER_ID = `AIRPLANE_LAYER_ID_${id}`;
  const TEXT_SOURCE_ID = `TEXT_SOURCE_ID_${id}`;
  const TEXT_LAYER_ID = `TEXT_LAYER_ID_${id}`;
  const LINE_SOURCE_ID = `LINE_SOURCE_ID_${id}`;
  const LINE_LAYER_ID = `LINE_LAYER_ID_${id}`;

  const [showRoute, setShowRoute] = useState(false);
  const [startLatitude] = useState(routePoints.points[0].latitude);
  const [startLongitude] = useState(routePoints.points[0].longitude);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  useEffect(() => {
    map.addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    map.addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",
      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "square",
        "icon-size": 0.09,
        "icon-allow-overlap": true,
      },
      paint: {
        "icon-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          1,
          0.6,
        ],
      },
    });
    // text
    map.addSource(TEXT_SOURCE_ID, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    map.addLayer({
      id: TEXT_LAYER_ID,
      type: "symbol",
      source: TEXT_SOURCE_ID,
      layout: {
        "text-field": ["get", "data"],
        "text-size": 14,
        "text-justify": "left",
        "text-anchor": "left",
        "text-offset": [0, 1],
      },
      paint: {
        "text-color": "#ffffff",
        "text-translate": [30, 30],
      },
    });

    map.addSource(LINE_SOURCE_ID, {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      },
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
      map.removeLayer(TEXT_LAYER_ID);
      map.removeSource(TEXT_SOURCE_ID);
      if (map.getLayer(LINE_LAYER_ID)) {
        map.removeLayer(LINE_LAYER_ID);
      }
      if (map.getSource(LINE_SOURCE_ID)) {
        map.removeSource(LINE_SOURCE_ID);
      }
    };
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    LINE_LAYER_ID,
    LINE_SOURCE_ID,
    TEXT_LAYER_ID,
    TEXT_SOURCE_ID,
    map,
  ]);

  useEffect(() => {
    const positionFeature = getFlightPositionAtTimestamp(
      routePoints.points,
      timestamp
    );
    setCurrentLatitude(positionFeature?.geometry?.coordinates?.[1]);
    setCurrentLongitude(positionFeature?.geometry?.coordinates?.[0]);

    if (positionFeature) {
      const newData = [
        {
          ...positionFeature,
          properties: {
            ...positionFeature.properties,
            metadata: routePoints.metadata,
            data: routePoints.data,
          },
        },
      ];

      map.getSource(AIRPLANE_SOURCE_ID).setData({
        type: "FeatureCollection",
        features: newData,
      });
      if (positionFeature?.properties && routePoints?.data) {
        positionFeature.properties.data = routePoints.data;
        map.getSource(TEXT_SOURCE_ID).setData({
          type: "FeatureCollection",
          features: positionFeature ? [positionFeature] : [],
        });
      }
      const airplaneCoordinates = positionFeature.geometry.coordinates;
      const textCoordinates = calculateTextCoordinates(positionFeature);
      const lineCoordinates = [
        [airplaneCoordinates[0], airplaneCoordinates[1]],
        textCoordinates,
      ];
      // Add a layer for the line representing the route
      map.addLayer({
        id: LINE_LAYER_ID,
        type: "line",
        generateId: true,
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: lineCoordinates,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "white",
          "line-width": 1,
        },
      });
      map.getSource(LINE_SOURCE_ID).setData({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: lineCoordinates,
        },
      });
      // Update the line whenever the map zoom changes
      map.on("zoom", function () {
        const updatedTextCoordinates =
          calculateTextCoordinates(positionFeature);

        // Update the line source with the new text coordinates
        map.getSource(LINE_LAYER_ID).setData({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [airplaneCoordinates[0], airplaneCoordinates[1]],
              updatedTextCoordinates,
            ],
          },
        });
      });
    }
  }, [AIRPLANE_SOURCE_ID, LINE_LAYER_ID, LINE_SOURCE_ID, TEXT_SOURCE_ID, map, routePoints, timestamp]);

  useEffect(() => {
    const popin = new mapboxgl.Popup();

    const mousemoveHandler = (e) => {
      const feature = e.features[0];
      if (!feature) return;

      const coordinates = feature.geometry.coordinates.slice();
      const bearing = feature.properties.bearing;
      const metadata = feature.properties.metadata;

      if (bearing && coordinates) {
        if (metadata) {
          popin.setLngLat(coordinates).setHTML(metadata).addTo(map);
        }
        setShowRoute(true);
      }
    };

    const mouseoutHandler = () => {
      popin.remove();
      setShowRoute(false);
    };

    map.on("mousemove", AIRPLANE_LAYER_ID, mousemoveHandler);
    map.on("mouseout", AIRPLANE_LAYER_ID, mouseoutHandler);

    return () => {
      map.off("mousemove", AIRPLANE_LAYER_ID, mousemoveHandler);
      map.off("mouseout", AIRPLANE_LAYER_ID, mouseoutHandler);
      popin.remove();
    };
  }, [AIRPLANE_LAYER_ID, map]);

  function calculateTextCoordinates(positionFeature) {
    const zoom = map.getZoom();
    const offsetMeters = 300 * Math.pow(2, 12 - zoom);
    const textCoordinates = turf.destination(
      [
        positionFeature.geometry.coordinates[0],
        positionFeature.geometry.coordinates[1],
      ],
      offsetMeters,
      130, // Angle
      { units: "meters" }
    ).geometry.coordinates;

    return textCoordinates;
  }

  return (
    <>
      {currentLatitude && currentLongitude && (
        <FlightTracker
          startLatitude={startLatitude}
          startLongitude={startLongitude}
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
          map={map}
          id={id}
        />
      )}
      {showRoute && (
        <AllRoute routePoints={routePoints.points} map={map} id={uuidv4()} />
      )}
    </>
  );
};
