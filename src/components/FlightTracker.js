import { useState, useEffect } from "react";
import * as turf from "@turf/turf";
const FlightTracker = ({
  startLatitude,
  startLongitude,
  currentLatitude,
  currentLongitude,
  map,
  id,
}) => {
  const [positions, setPositions] = useState([]);
  const LAST_POINTS_SOURCE_ID = `LAST_POINTS_SOURCE_ID_${id}`;
  const LAST_POINTS_LAYER_ID = `LAST_POINTS_LAYER_ID_${id}`;

  useEffect(() => {
    const calculateFlightPath = () => {
      const flightPath = turf.lineString([
        [startLongitude, startLatitude],
        [currentLongitude, currentLatitude],
      ]);

      const distance = turf.length(flightPath, { units: "kilometers" });
      const numPoints = Math.ceil(distance / 2); // Number of points for 10 km intervals
      const interval =
        turf.length(flightPath, { units: "kilometers" }) / numPoints;

      const newPositions = [];

      for (let i = 1; i <= numPoints; i++) {
        const point = turf.along(flightPath, i * interval, {
          units: "kilometers",
        }).geometry.coordinates;
        newPositions.push({ latitude: point[1], longitude: point[0] });
      }

      // Keep only the last 5 positions
      setPositions(newPositions.slice(-5));
    };

    calculateFlightPath();
  }, [startLatitude, startLongitude, currentLatitude, currentLongitude]);

  useEffect(() => {
    map.addSource(LAST_POINTS_SOURCE_ID, {
      type: "geojson",
      generateId: true,
      data: [],
    });

    map.addLayer({
      id: LAST_POINTS_LAYER_ID,
      type: "circle",
      generateId: true,
      source: LAST_POINTS_SOURCE_ID,
      paint: {
        "circle-radius": 3,
        "circle-color": "#223b53",
        "circle-stroke-color": "white",
        "circle-stroke-width": 1,
        "circle-opacity": 0.5,
      },
    });

    return () => {
      map.removeLayer(LAST_POINTS_LAYER_ID);
      map.removeSource(LAST_POINTS_SOURCE_ID);
    };
  }, [LAST_POINTS_LAYER_ID, LAST_POINTS_SOURCE_ID, map]);

  useEffect(() => {
    if (positions.length > 0) {
      map.getSource(LAST_POINTS_SOURCE_ID).setData({
        type: "FeatureCollection",
        features: positions.map((pos) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [pos.longitude, pos.latitude],
          },
        })),
      });
    }
  }, [LAST_POINTS_SOURCE_ID, map, positions, LAST_POINTS_LAYER_ID]);
  return null;
};

export default FlightTracker;
