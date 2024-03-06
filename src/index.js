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
import { FlightsTable } from "./components/FlightsTable";
import { DrawAllRoute } from "./components/DrawAllRoute";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmVsbGl0IiwiYSI6ImNrb3dncHdnOTA1emQybnBkZ3N1MjhzYW8ifQ.uqKPevtCLOPOjX88-7ZK9w";

export const MAX_TIMESTAMP = 1674249811;
export const MIN_TIMESTAMP = 1674221811;
export const NOW_TIMESTAMP = 1674226811;

function App() {
  const [map, setMap] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [timestamp, setTimestamp] = useState(NOW_TIMESTAMP);
  const [, setIsPlaying] = useState(false);
  const [flights, setFlights] = useState([]);

  const handleChange = (newValue) => {
    setTimestamp(newValue);
  };

  const handlePlayPause = (playing) => {
    setIsPlaying(playing);
  };


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
      flight.timestamp >= MIN_TIMESTAMP && flight.timestamp <= MAX_TIMESTAMP,
    []
  );
  useEffect(() => {
    setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        isFlightVisible(flight) ? { ...flight, timestamp } : flight
      )
    );
  }, [timestamp, isFlightVisible]);

  const handleFlightClick = (flight) => {
    if (selectedFlight && selectedFlight.id === flight.id) {
      // Clear selected flight if the same row is clicked again
      setSelectedFlight(null);
    } else {
      setSelectedFlight(flight);
    }
  };

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
            <FlightsTable
              flights={flights}
              onFlightClick={handleFlightClick}
              selectedFlight={selectedFlight}
            />
            {selectedFlight && (
              <DrawAllRoute
                routePoints={selectedFlight?.routePoints?.points}
                map={map}
                id={uuidv4()}
              />
            )}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5,
                padding: "0.5rem",
                display: "flex",
                background: "#202020",
              }}
            >
              <div style={{ width: "max-content" }}>
                Time:{" "}
                {new Date(timestamp * 1000).toLocaleTimeString()}
              </div>
              <TimelineSlider
                value={timestamp}
                handleChange={handleChange}
                handlePlayPause={handlePlayPause}
                minTimestamp={MIN_TIMESTAMP}
                maxTimestamp={MAX_TIMESTAMP}
                step={1}
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
