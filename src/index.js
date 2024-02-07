import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./assets/styles.css";
import { routePoints } from "./data/route";
import { Route } from "./components/Route";
import { Airplane } from "./components/Airplane";
import { TimelineSlider } from "./components/TimelineSlider";
import { AltitudeSlider } from "./components/AltitudeSlider";
import aircraftIcon from "./assets/aircraft-alert-none.svg";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmVsbGl0IiwiYSI6ImNrb3dncHdnOTA1emQybnBkZ3N1MjhzYW8ifQ.uqKPevtCLOPOjX88-7ZK9w";

export const MIN_TIMESTAMP = 1674221811; // Friday, 20 January 2023 13:36:51
export const NOW_TIMESTAMP = 1674225811; // Friday, 20 January 2023 14:43:31
export const MAX_TIMESTAMP = 1674249811; // Friday, 20 January 2023 21:23:31
function App() {
  const [map, setMap] = useState();
  const [timestamp, setTimestamp] = useState(NOW_TIMESTAMP);
  const [flightLevel, setFlightLevel] = useState(0);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: 
        [-6.494917884024034, 51.69935897822677 ]
      ,
      zoom: 3,
      projection: "mercator"
    });
    map.on("load", () => {
      // Add aircraft Image
      const img = new Image();
      img.src = aircraftIcon;
      img.onload = () => {
        const bounds = [
          [-6.494917884024034, 51.69935897822677],  // Coin Sud-Ouest
          [9.732690059356145, 41.25166002712723]    // Coin Nord-Est
        ];
        map.fitBounds(bounds);
        map.addImage("airplane", img);
      };

      setMap(map);
    });
  }, []);
  return (
    <div className="wrapper">
      <div id="map">
        {map ? (
          <>
            <Route routePoints={routePoints} map={map} />
            <Airplane
              routePoints={routePoints}
              map={map}
              timestamp={timestamp}
            />
            
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
                background: "#202020"
              }}
            >
              <div style={{ width: "80px" }}>
                Time:{" "}
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
            <div
              style={{
                position: "absolute",
                background: "#202020",
                top: 0,
                bottom: "2.5rem",
                right: 0,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "1rem"
              }}
            >
              <div style={{ textAlign: "center" }}>{flightLevel}</div>
              <AltitudeSlider
                value={flightLevel}
                handleChange={(e) => setFlightLevel(e.target.value)}
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


render(<App />, document.querySelector("#root"));
