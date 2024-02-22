import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";

import mapboxgl from "mapbox-gl";
import "./assets/styles.css";
import { routePoints } from "./data/route";
import { Airplane } from "./components/Airplane";
import { TimelineSlider } from "./components/TimelineSlider";
import { v4 as uuidv4 } from "uuid";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmVsbGl0IiwiYSI6ImNrb3dncHdnOTA1emQybnBkZ3N1MjhzYW8ifQ.uqKPevtCLOPOjX88-7ZK9w";

export const MAX_TIMESTAMP = 1674249811; // Friday, 20 January 2023 21:23:31
export const MIN_TIMESTAMP = 1674221811; // Friday, 20 January 2023 13:36:51
export const NOW_TIMESTAMP = 1674225811; // Friday, 20 January 2023 14:43:31

function App() {
  const [map, setMap] = useState();
  const [timestamp, setTimestamp] = useState(NOW_TIMESTAMP);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-6.494917884024034, 51.69935897822677],
      zoom: 10,
      projection: "mercator",
    });

    map.on("load", () => {
      // remove countries and cities names
      let show = false;
      map.style.stylesheet.layers.forEach(function (layer) {
        if (layer.type === "symbol") {
          map.setLayoutProperty(
            layer.id,
            "visibility",
            show ? "visible" : "none"
          );
        }
      });
      const bounds = [
        [-6.494917884024034, 51.69935897822677], // Coin Sud-Ouest
        [9.732690059356145, 41.25166002712723], // Coin Nord-Est
      ];
      map.fitBounds(bounds);
      map.setLayoutProperty("country-label", "text-field", ["get", `name_fr`]);
      setMap(map);
    });
  }, []);
  return (
    <div className="wrapper">
      <div id="map">
        {map ? (
          <>
            routePoints
            {routePoints.map((route) => (
              <React.Fragment key={uuidv4()}>
                <Airplane
                  routePoints={route}
                  map={map}
                  timestamp={timestamp}
                  id={uuidv4()}
                />
              </React.Fragment>
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
                handleChange={(e) => setTimestamp(parseInt(e.target.value))}
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
