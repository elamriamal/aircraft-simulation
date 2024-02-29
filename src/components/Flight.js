import React, { useEffect, useState, useMemo } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import "../assets/styles.css";
import { v4 as uuidv4 } from "uuid";
// import * as turf from "@turf/turf";
import FlightTracker from "./FlightTracker";
import { DrawAllRoute } from "./DrawAllRoute";

const Flight = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = useMemo(() => `AIRPLANE_SOURCE_ID_${id}`, [id]);
  const AIRPLANE_LAYER_ID = useMemo(() => `AIRPLANE_LAYER_ID_${id}`, [id]);
  const TEXT_SOURCE_ID = useMemo(() => `TEXT_SOURCE_ID_${id}`, [id]);
  const TEXT_LAYER_ID = useMemo(() => `TEXT_LAYER_ID_${id}`, [id]);
  // const LINE_SOURCE_ID = useMemo(() => `LINE_SOURCE_ID_${id}`, [id]);
  // const LINE_LAYER_ID = useMemo(() => `LINE_LAYER_ID_${id}`, [id]);

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

  useEffect(() => {
    if (!map) return;

    const isInFlight =
      timestamp >= routePoints.points[0].time &&
      timestamp <= routePoints.points[routePoints.points.length - 1].time;

    // Check if the source and layer exist before removing
    if (!isInFlight) {
      if (map.getLayer(AIRPLANE_LAYER_ID)) map.removeLayer(AIRPLANE_LAYER_ID);
      if (map.getLayer(TEXT_LAYER_ID)) map.removeLayer(TEXT_LAYER_ID);

      if (map.getSource(AIRPLANE_SOURCE_ID)) map.removeSource(AIRPLANE_SOURCE_ID);
      if (map.getSource(TEXT_SOURCE_ID)) map.removeSource(TEXT_SOURCE_ID);

      // if (map.getSource(LINE_SOURCE_ID)) map.removeSource(LINE_SOURCE_ID);
      // if (map.getLayer(LINE_LAYER_ID)) map.removeLayer(LINE_LAYER_ID);

      return;
    }

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

    addSource(TEXT_SOURCE_ID, {
      type: "geojson",

      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    addLayer({
      id: TEXT_LAYER_ID,
      type: "symbol",
      minzoom: 5,
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
        "text-translate": [15 , 15],
      },
    });

    // addSource(LINE_SOURCE_ID, {
    //   type: "geojson",
    //   data: {
    //     type: "Feature",
    //     geometry: {
    //       type: "LineString",
    //       coordinates: [],
    //     },
    //   },
    // });

    // addLayer({
    //   id: LINE_LAYER_ID,
    //   type: "line",
    //   minzoom: 5,
    //   source: LINE_SOURCE_ID,
    //   layout: {
    //     "line-join": "round",
    //     "line-cap": "round",
    //   },
    //   paint: {
    //     "line-color": "white",
    //     "line-width": 1,
    //   },
    // });

    return () => null;
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    // LINE_SOURCE_ID,
    // LINE_LAYER_ID,
    TEXT_LAYER_ID,
    TEXT_SOURCE_ID,
    map,
    routePoints,
    timestamp,
  ]);

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
        positionFeature.properties.data = routePoints.data;
        updateSourceData(TEXT_SOURCE_ID, positionFeature);
      }
    }

    // if (positionFeature && positionFeature.geometry) {
      // const flightCoordinates = positionFeature.geometry.coordinates;
      // const textCoordinates = calculateTextCoordinates(positionFeature);

      // updateSourceData(LINE_SOURCE_ID, {
      //   type: "Feature",
      //   geometry: {
      //     type: "LineString",
      //     coordinates: [
      //       [flightCoordinates[0], flightCoordinates[1]],
      //       textCoordinates,
      //     ],
      //   },
      // });

      // const updateTextCoordinates = () => {
      //   const updatedTextCoordinates =
      //     calculateTextCoordinates(positionFeature);
      //   updateSourceData(LINE_SOURCE_ID, {
      //     type: "Feature",
      //     geometry: {
      //       type: "LineString",
      //       coordinates: [
      //         [flightCoordinates[0], flightCoordinates[1]],
      //         updatedTextCoordinates,
      //       ],
      //     },
      //   });
      // };

      // map.on("zoom", updateTextCoordinates);
    // }

    const popin = new mapboxgl.Popup();

    const handleMouseMove = (e) => {
      const features = e.features;
      if (!features || !features.length) {
        mouseout();
        popin.remove();
        setShowRoute(false);
        return;
      }

      const coordinates = features[0].geometry.coordinates.slice();
      // const bearing = features[0].properties.bearing;
      const metadata = features[0].properties.metadata;

      mouseover(features[0]);

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      if (coordinates) {
        popin.setLngLat(coordinates).setHTML(metadata).addTo(map);
        setShowRoute(true);
      }
    };

    map.on("mousemove", AIRPLANE_LAYER_ID, handleMouseMove);

    const handleMouseOut = () => {
      mouseout();
      popin.remove();
      setShowRoute(false);
    };

    map.on("mouseout", AIRPLANE_LAYER_ID, handleMouseOut);

    return () => {
      map.off("mousemove", AIRPLANE_LAYER_ID, handleMouseMove);
      map.off("mouseout", AIRPLANE_LAYER_ID, handleMouseOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    AIRPLANE_LAYER_ID,
    AIRPLANE_SOURCE_ID,
    // LINE_SOURCE_ID,
    // LINE_LAYER_ID,
    TEXT_SOURCE_ID,
    TEXT_LAYER_ID,
    map,
    routePoints,
    timestamp,
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

  // const calculateTextCoordinates = ({ geometry: { coordinates } }) => {
  //   const zoom = map.getZoom();
  //   const offsetMeters = 300 * Math.pow(2, 12 - zoom);

  //   return turf.destination(coordinates, offsetMeters, 130, { units: "meters" })
  //     .geometry.coordinates;
  // };

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
        <DrawAllRoute routePoints={routePoints.points} map={map} id={uuidv4()} />
      )}
    </>
  );
};

export default React.memo(Flight);