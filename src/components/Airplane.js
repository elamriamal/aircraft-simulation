/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import aircraftIcon from "../assets/square-modified.png";
import "../assets/styles.css";
import { v4 as uuidv4 } from "uuid";
import { AllRoute } from "./AllRoute";
import * as turf from "@turf/turf";

export const Airplane = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = `AIRPLANE_SOURCE_ID_${id}`;
  const AIRPLANE_LAYER_ID = `AIRPLANE_LAYER_ID_${id}`;
  const TEXT_SOURCE_ID = `TEXT_SOURCE_ID_${id}`;
  const TEXT_LAYER_ID = `TEXT_LAYER_ID_${id}`;
  const LINE_SOURCE_ID = `LINE_SOURCE_ID_${id}`;
  const LINE_LAYER_ID = `LINE_LAYER_ID_${id}`;
  const styles = {
    row: "display: flex; flex-direction: row;",
  };
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    // airplane
    map.addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",
      generateId: true,
      data: [],
    });
    map.loadImage(aircraftIcon, (error, image) => {
      if (error) throw error;
      // Add the image to the map style.
      map.addImage("square", image);
    });
    map.addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",
      generateId: true,
      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "square",
        "icon-size": 0.06,
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
      generateId: true,
      data: [],
    });

    map.addLayer({
      id: TEXT_LAYER_ID,
      type: "symbol",
      generateId: true,
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

    // Ajoutez une source de données GeoJSON qui contient une seule entité géométrique.
    map.addSource(LINE_SOURCE_ID, {
      type: "geojson",
      data: [],
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
      map.removeLayer(TEXT_LAYER_ID);
      map.removeSource(TEXT_SOURCE_ID);
      map.removeLayer(LINE_LAYER_ID);
      map.removeSource(LINE_SOURCE_ID);
    };
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    LINE_SOURCE_ID,
    LINE_LAYER_ID,
    TEXT_LAYER_ID,
    TEXT_SOURCE_ID,
    map,
  ]);

  useEffect(() => {
    const positionFeature = getFlightPositionAtTimestamp(
      routePoints.points,
      timestamp
    );
    if (positionFeature?.properties && routePoints?.metadata) {
      positionFeature.properties.metadata = routePoints.metadata;
    }
    map.getSource(AIRPLANE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: positionFeature ? [positionFeature] : [],
    });
    if (positionFeature?.properties && routePoints?.data) {
      positionFeature.properties.data = routePoints.data;
      map.getSource(TEXT_SOURCE_ID).setData({
        type: "FeatureCollection",
        features: positionFeature ? [positionFeature] : [],
      });
    }

    function calculateTextCoordinates() {
      const zoom = map.getZoom();
      const offsetMeters = 300 * Math.pow(2, 12 - zoom); // offset based on zoom level

      const textCoordinates = turf.destination(
        [
          positionFeature.geometry.coordinates[0],
          positionFeature.geometry.coordinates[1],
        ],
        offsetMeters,
        120, // Angle
        { units: "meters" }
      ).geometry.coordinates;

      return textCoordinates;
    }
    // Check if positionFeature is defined and has a geometry property before accessing it
    if (positionFeature && positionFeature.geometry) {
      const airplaneCoordinates = positionFeature.geometry.coordinates;

      // Calculate textCoordinates
      const textCoordinates = calculateTextCoordinates();

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
              coordinates: [
                [airplaneCoordinates[0], airplaneCoordinates[1]],
                textCoordinates,
              ],
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "white",
          "line-width": {
            base: 1,
            stops: [
              [10, 1],
              [18, 4],
            ],
          },
        },
      });

      // Update the line whenever the map zoom changes
      map.on("zoom", function () {
        const updatedTextCoordinates = calculateTextCoordinates();

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

    // When a click event occurs on a feature in the points layer, open a popup at the
    // losquareion of the feature, with bearing HTML from its properties.
    var popin = new mapboxgl.Popup({
      className: `${styles.mapboxglPopupContent}`,
    });
    map.on("mousemove", AIRPLANE_LAYER_ID, (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const bearing = e.features[0].properties.bearing;
      const metadata = e.features[0].properties.metadata;
      if (e.features[0]) {
        mouseover(e.features[0]);
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        if (bearing && coordinates) {
          popin.setLngLat(coordinates).setHTML(metadata).addTo(map);
          setShowRoute(true);
        }
      } else {
        mouseout();
        popin.remove();
        setShowRoute(false);
      }
    });

    map.on("mouseout", AIRPLANE_LAYER_ID, function (e) {
      mouseout();
      popin.remove();
      setShowRoute(false);
    });
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    LINE_SOURCE_ID,
    LINE_LAYER_ID,
    TEXT_SOURCE_ID,
    TEXT_LAYER_ID,
    map,
    routePoints,
    styles.column,
    styles.row,
    styles.textSize,
    timestamp,
  ]);

  let fHover = null;
  function mouseover(feature) {
    fHover = feature;
    map.getCanvasContainer().style.cursor = "pointer";
    map.setFeatureState(
      {
        source: AIRPLANE_SOURCE_ID,
        id: fHover.id,
      },
      {
        hover: true,
      }
    );
  }

  function mouseout() {
    if (!fHover) return;
    map.getCanvasContainer().style.cursor = "default";
    map.setFeatureState(
      {
        source: AIRPLANE_SOURCE_ID,
        id: fHover.id,
      },
      {
        hover: false,
      }
    );
    fHover = null;
  }

  return (
    showRoute && (
      <AllRoute routePoints={routePoints.points} map={map} id={uuidv4()} />
    )
  );
};
