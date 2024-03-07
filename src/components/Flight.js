import React, { useEffect, useState, useMemo, useRef } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import "../assets/styles.css";
import { v4 as uuidv4 } from "uuid";
import FlightTracker from "./FlightTracker";
import { DrawAllRoute } from "./DrawAllRoute";

const Flight = ({ map, routePoints, timestamp, id, isOnOff }) => {
  const AIRPLANE_SOURCE_ID = useMemo(() => `AIRPLANE_SOURCE_ID_${id}`, [id]);
  const AIRPLANE_LAYER_ID = useMemo(() => `AIRPLANE_LAYER_ID_${id}`, [id]);
  const TEXT_SOURCE_ID = useMemo(() => `TEXT_SOURCE_ID_${id}`, [id]);
  const TEXT_LAYER_ID = useMemo(() => `TEXT_LAYER_ID_${id}`, [id]);

  const [showRoute, setShowRoute] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const startLatitude = useMemo(
    () => routePoints.points[0].latitude,
    [routePoints.points]
  );
  const startLongitude = useMemo(
    () => routePoints.points[0].longitude,
    [routePoints.points]
  );
  const isInFlight =
    timestamp >= routePoints.points[0].time &&
    timestamp <= routePoints.points[routePoints.points.length - 1].time;
  const addSource = (sourceId, sourceConfig) => {
    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, sourceConfig);
    }
  };

  const addLayer = (layerConfig) => {
    const existingLayer = map.getLayer(layerConfig.id);
    if (!existingLayer) {
      map.addLayer(layerConfig);
    }
  };
  useEffect(() => {
    if (!map) return;
    // Check if the source and layer exist before removing
    if (!isInFlight) {
      if (map.getLayer(AIRPLANE_LAYER_ID)) map.removeLayer(AIRPLANE_LAYER_ID);
      if (map.getLayer(TEXT_LAYER_ID)) map.removeLayer(TEXT_LAYER_ID);

      if (map.getSource(AIRPLANE_SOURCE_ID))
        map.removeSource(AIRPLANE_SOURCE_ID);
      if (map.getSource(TEXT_SOURCE_ID)) map.removeSource(TEXT_SOURCE_ID);
      return;
    }

    addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",

      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",

      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "square",
        "icon-size": 0.35,
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

    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    TEXT_LAYER_ID,
    TEXT_SOURCE_ID,
    map,
    routePoints,
    timestamp,
  ]);
  const popin = useRef(null);
  const [isPopinOpen, setIsPopinOpen] = useState(false);

  const handleMouseOut = () => {
    mouseout();
    if (popin.current && popin.current.isOpen()) {
      popin.current.remove(); // Close the popup if it's open
      setIsPopinOpen(false); // Update state to indicate the popup is closed
    }
  };

  const handleMouseMove = (e) => {
    const features = e.features;

    if (!features || !features.length) {
      mouseout();
      if (popin.current && isPopinOpen) {
        popin.current.remove(); // Remove the popup if no features are present
        setIsPopinOpen(false); // Update state to indicate the popup is closed
        setShowRoute(false);
      }
      return;
    }

    const coordinates = features[0].geometry.coordinates.slice();
    const metadata = features[0].properties.metadata;
    mouseover(features[0]);
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    if (coordinates) {
      if (!popin.current) {
        popin.current = new mapboxgl.Popup(); // Create a new popup if not already created
      }

      popin.current.setLngLat(coordinates).setHTML(metadata);
      if (!isPopinOpen) {
        popin.current.addTo(map); // Add the popup to the map if not already added
        setIsPopinOpen(true); // Update state to indicate the popup is open
        setShowRoute(true);
      }
      popin.current.on("close", () => {
        setIsPopinOpen(false); // Update state to indicate the popup is closed when closed by the user
        setShowRoute(false);
      });
    }
  };
  useEffect(() => {
    if (!map) return;

    const positionFeature = getFlightPositionAtTimestamp(
      routePoints.points,
      timestamp
    );
    setCurrentLatitude(positionFeature?.geometry?.coordinates?.[1]);
    setCurrentLongitude(positionFeature?.geometry?.coordinates?.[0]);

    const updateSourceData = (sourceId, features) => {
      map.getSource(sourceId)?.setData({
        type: "FeatureCollection",
        features: features ? [features] : [],
      });
    };

    if (positionFeature?.properties) {
      if (routePoints?.metadata) {
        positionFeature.properties.metadata = routePoints.metadata;
      }

      updateSourceData(AIRPLANE_SOURCE_ID, positionFeature);

      if (routePoints?.data) {
        positionFeature.properties.data = routePoints?.data?.replace(
          /<br\s*\/?>/g,
          "\n"
        ); // Replace <br> with \n
        updateSourceData(TEXT_SOURCE_ID, positionFeature);

        // Conditionally show or remove the text layer based on isOnOff
        if (!isOnOff) {
          // If isOnOff is false, remove the text layer
          if (map.getLayer(TEXT_LAYER_ID)) map.removeLayer(TEXT_LAYER_ID);
          if (map.getSource(TEXT_SOURCE_ID)) map.removeSource(TEXT_SOURCE_ID);
        } else {
          // If isOnOff is true, add or update the text layer
          addSource(TEXT_SOURCE_ID, {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [positionFeature],
            },
          });

          addLayer({
            id: TEXT_LAYER_ID,
            type: "symbol",
            source: TEXT_SOURCE_ID,
            layout: {
              "text-field": ["get", "data"],
              "text-size": 10,
              "text-justify": "left",
              "text-anchor": "left",
              "text-offset": [0, 1],
            },
            paint: {
              "text-color": "#ffffff",
              "text-translate": [15, 15],
            },
          });
        }
      }
    }

    map.on("mousemove", AIRPLANE_LAYER_ID, handleMouseMove);
    map.on("mouseout", AIRPLANE_LAYER_ID, handleMouseOut);

    return () => {
      map.off("mousemove", AIRPLANE_LAYER_ID, handleMouseMove);
      map.off("mouseout", AIRPLANE_LAYER_ID, handleMouseOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    TEXT_SOURCE_ID,
    TEXT_LAYER_ID,
    map,
    routePoints,
    timestamp,
    isOnOff,
  ]);

  let fHover = null;

  const mouseover = (feature) => {
    fHover = feature;
    map.getCanvasContainer().style.cursor = "pointer";
    map.setFeatureState(
      {
        source: AIRPLANE_SOURCE_ID,
        id: fHover.layer.id,
      },
      {
        hover: true,
      }
    );
  };

  const mouseout = () => {
    if (!fHover) return;
    map.getCanvasContainer().style.cursor = "default";
    map.setFeatureState(
      {
        source: AIRPLANE_SOURCE_ID,
        id: fHover.layer.id,
      },
      {
        hover: false,
      }
    );
    fHover = null;
  };

  return (
    <>
      {currentLatitude && currentLongitude && (
        <FlightTracker
          startLatitude={startLatitude}
          startLongitude={startLongitude}
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
          isInFlight={isInFlight}
          map={map}
          id={id}
        />
      )}
      {showRoute && (
        <DrawAllRoute
          routePoints={routePoints.points}
          map={map}
          id={uuidv4()}
        />
      )}
    </>
  );
};

export default React.memo(Flight);
