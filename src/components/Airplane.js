import { useEffect } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import aircraftIcon from "../assets/square.png";
import "../assets/styles.css";

export const Airplane = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = `AIRPLANE_SOURCE_ID_${id}`;
  const AIRPLANE_LAYER_ID = `AIRPLANE_LAYER_ID_${id}`;
  const TEXT_SOURCE_ID = `TEXT_SOURCE_ID_${id}`;
  const TEXT_LAYER_ID = `TEXT_LAYER_ID_${id}`;
  const styles = {
    row: "display: flex; flex-direction: row;"
  };

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
        "icon-size": 0.05,
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
      },
      paint: {
        "text-color": "#ffffff",
      },
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
      map.removeLayer(TEXT_LAYER_ID);
      map.removeSource(TEXT_SOURCE_ID);
    };
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
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
        }
      } else {
        mouseout();
        popin.remove();
      }
    });

    map.on("mouseout", AIRPLANE_LAYER_ID, function (e) {
      mouseout();
      popin.remove();
    });
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
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
  return null;
};
