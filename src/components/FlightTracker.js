import React, { useState, useEffect, useMemo, useCallback } from "react";
import * as turf from "@turf/turf";

const FlightTracker = React.memo(
  ({
    startLatitude,
    startLongitude,
    currentLatitude,
    currentLongitude,
    map,
    id,
  }) => {
    const [positions, setPositions] = useState([]);
    const LAST_POINTS_SOURCE_ID = useMemo(
      () => `LAST_POINTS_SOURCE_ID_${id}`,
      [id]
    );
    const LAST_POINTS_LAYER_ID = useMemo(
      () => `LAST_POINTS_LAYER_ID_${id}`,
      [id]
    );

    const calculateFlightPath = useCallback(() => {
      const flightPath = turf.lineString([
        [startLongitude, startLatitude],
        [currentLongitude, currentLatitude],
      ]);

      const distance = turf.length(flightPath, { units: "kilometers" });
      const numPoints = Math.ceil(distance / 5);
      const interval = distance / numPoints;

      const newPositions = Array.from({ length: numPoints }, (_, i) => {
        const point = turf.along(flightPath, (i + 1) * interval, {
          units: "kilometers",
        }).geometry.coordinates;
        return { latitude: point[1], longitude: point[0] };
      });

      setPositions(newPositions.slice(-6));
    }, [
      startLatitude,
      startLongitude,
      currentLatitude,
      currentLongitude,
      setPositions,
    ]);

    useEffect(() => {
      if (!map) return; // Ensure map exists

      const sourceData = {
        type: "FeatureCollection",
        features: positions.map((pos) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [pos.longitude, pos.latitude],
          },
        })),
      };

      if (!map.getSource(LAST_POINTS_SOURCE_ID)) {
        map.addSource(LAST_POINTS_SOURCE_ID, {
          type: "geojson",
          data: sourceData,
        });
        map.addLayer({
          id: LAST_POINTS_LAYER_ID,
          type: "circle",
           minzoom: 5,
          source: LAST_POINTS_SOURCE_ID,
          paint: {
            "circle-radius": 3,
            "circle-color": "#223b53",
            "circle-stroke-color": "white",
            "circle-stroke-width": 1,
            "circle-opacity": 0.5,
          },
        });
      } else {
        map.getSource(LAST_POINTS_SOURCE_ID).setData(sourceData);
      }

      return () => {
        map.removeLayer(LAST_POINTS_LAYER_ID);
        map.removeSource(LAST_POINTS_SOURCE_ID);
      };
    }, [LAST_POINTS_SOURCE_ID, LAST_POINTS_LAYER_ID, map, positions]);

    useEffect(calculateFlightPath, [calculateFlightPath]);

    return null;
  }
);

export default FlightTracker;
