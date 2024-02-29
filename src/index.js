/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import "./assets/styles.css";
import { routePoints } from "./data/route";
import Flight from "./components/Flight";
import { TimelineSlider } from "./components/TimelineSlider";
import { v4 as uuidv4 } from "uuid";
import aircraftIcon from "./assets/square-modified.png";
import _debounce from "lodash.debounce";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmVsbGl0IiwiYSI6ImNrb3dncHdnOTA1emQybnBkZ3N1MjhzYW8ifQ.uqKPevtCLOPOjX88-7ZK9w";

export const MAX_TIMESTAMP = 1674249811; // Friday, 20 January 2023 21:23:31
export const MIN_TIMESTAMP = 1674221811; // Friday, 20 January 2023 13:36:51
export const NOW_TIMESTAMP = 1674227811; // Friday, 20 January 2023 14:43:31;

function App() {
  const [map, setMap] = useState(null);
  const [timestamp, setTimestamp] = useState(NOW_TIMESTAMP);
  const [flights, setFlights] = useState([]);

  const debouncedSetTimestamp = useCallback(
    _debounce((value) => setTimestamp(value), 20),
    []
  );

  useEffect(() => {
    const loadMap = async () => {
      try {
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/dark-v10?optimize=true",
          center: [1.888334, 46.603354], // Coordonnées du centre de la France
          zoom: 4,
        });

        const [image] = await Promise.all([
          new Promise((resolve, reject) => {
            map.loadImage(aircraftIcon, (error, img) => {
              if (error) reject(error);
              else resolve(img);
            });
          }),
        ]);

        map.addImage("square", image);

        // Hide the names of cities
        let show = false;
        map.style.stylesheet.layers.forEach((layer) => {
          if (layer.type === "symbol") {
            map.setLayoutProperty(
              layer.id,
              "visibility",
              show ? "visible" : "none"
            );
          }
        });
        setMap(map);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMap();
  }, []);

  useEffect(() => {
    const initialFlights = routePoints.map((route) => ({
      routePoints: route,
      timestamp: NOW_TIMESTAMP,
      id: uuidv4(),
    }));

    setFlights(initialFlights);
  }, []);
  const isFlightVisible = useCallback(
    (flight) =>
      flight.timestamp >= MIN_TIMESTAMP &&
      flight.timestamp <= MAX_TIMESTAMP,
    []
  );
  useEffect(() => {
    setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        isFlightVisible(flight) ? { ...flight, timestamp } : flight
      )
    );
  }, [timestamp, isFlightVisible]);

  const handleChange = useCallback(
    (value) => debouncedSetTimestamp(parseInt(value)),
    [debouncedSetTimestamp]
  );

  return (
    <div className="wrapper">
      <div id="map">
        {map ? (
          <>
            {flights.map((flight) => (
              <Flight
                key={flight.id}
                routePoints={flight.routePoints}
                map={map}
                timestamp={flight.timestamp}
                id={flight.id}
              />
            ))}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5,
                height: "2.5rem",
                padding: "0.5rem",
                display: "flex",
                background: "#202020",
              }}
            >
              <div style={{ width: "80px" }}>
                Temps:{" "}
                {new Date(timestamp * 1000).toLocaleTimeString().slice(0, -3)}
              </div>
              <TimelineSlider
                min={MIN_TIMESTAMP}
                max={MAX_TIMESTAMP}
                value={timestamp}
                step={10}
                handleChange={handleChange}
              />
            </div>
          </>
        ) : (
          <div>Initialising Map...</div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
