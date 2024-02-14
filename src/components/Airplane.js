import { useEffect } from "react";
import { getFlightPositionAtTimestamp } from "../utils/getFlightPositionAtTimestamp";
import mapboxgl from "mapbox-gl";
import "../assets/styles.css";

export const Airplane = ({ map, routePoints, timestamp, id }) => {
  const AIRPLANE_SOURCE_ID = `AIRPLANE_SOURCE_ID_${id}`;
  const AIRPLANE_LAYER_ID = `AIRPLANE_LAYER_ID_${id}`;
  const styles = {
    row: 'display: flex; flex-direction: row;',
    textSize: 'text-size: 14px;'
  };

  useEffect(() => {
    map.addSource(AIRPLANE_SOURCE_ID, {
      type: "geojson",
      'generateId': true,
      data: [],
    });

    map.addLayer({
      id: AIRPLANE_LAYER_ID,
      type: "symbol",
      generateId: true,
      source: AIRPLANE_SOURCE_ID,
      layout: {
        "icon-image": "airport-15",
        "icon-size": 1.75,
        "icon-allow-overlap": true,
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map",
      },
      'paint': {
        'icon-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.6
        ]
      }
    });

    return () => {
      map.removeLayer(AIRPLANE_LAYER_ID);
      map.removeSource(AIRPLANE_SOURCE_ID);
    };
  }, [AIRPLANE_LAYER_ID, AIRPLANE_SOURCE_ID, map]);
  useEffect(() => {
    const positionFeature = getFlightPositionAtTimestamp(
      routePoints.points,
      timestamp
    );
    map.getSource(AIRPLANE_SOURCE_ID).setData({
      type: "FeatureCollection",
      features: positionFeature ? [positionFeature] : [],
    });
    // When a click event occurs on a feature in the points layer, open a popup at the
    // location of the feature, with bearing HTML from its properties.
    map.on("click", AIRPLANE_LAYER_ID, (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const bearing = e.features[0].properties.bearing;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      if (bearing && coordinates) {
        let actualPoint = JSON.parse(e.features[0].properties.actualPoint);

        var popin = new mapboxgl.Popup();
        popin
          .setLngLat(coordinates)
          .setHTML(`
          <div style="color: black;">
            <strong style="${styles.textSize}">${routePoints.name}</strong>
            <div style="${styles.row}">
              <strong>Latitude</strong>
            </div>
            <div style="${styles.row}">
              <p>${coordinates[0]}</p>
            </div>
            <div style="${styles.row}">
              <strong>Longitude</strong>
            </div>
            <div style="${styles.row}">
              <p>${coordinates[1]}</p>
            </div>
            <div style="${styles.row}">
              <strong>Altitude</strong>
            </div>
            <div style="${styles.row}">
              <p>${actualPoint.altitudeFt} ft</p>
            </div>
            <div style="${styles.row}">
              <strong>Roulement d'avion</strong>
            </div>
            <div style="${styles.row}">
              <p>${bearing}</p>
            </div>
        </div> `)
        .addTo(map);
        popin.on("close", () => {});
      }
    });

    map.on('mousemove', AIRPLANE_LAYER_ID, function(e) {
      if (e.features[0]) {
        mouseover(e.features[0]);
        const coordinates = e.features[0].geometry.coordinates.slice();
        var popin = new mapboxgl.Popup({closeButton: false,//<----
        closeOnClick: true,
        closeOnMove: true,});
        popin
          .setLngLat(coordinates)
          .setHTML(`
          <div style="color: black;">
            <small>${routePoints.name}</small>
          </div>`)
        .addTo(map);
        popin.on("close", () => {});
      } else {
        mouseout();
      }

    });

    map.on('mouseout', AIRPLANE_LAYER_ID, function(e) {
      mouseout();
    });
    
  }, [AIRPLANE_LAYER_ID, AIRPLANE_SOURCE_ID, map, routePoints, styles.column, styles.row, styles.textSize, timestamp]);
  
  let fHover = null;
  function mouseover(feature) {
    fHover = feature;
    map.getCanvasContainer().style.cursor = 'pointer';

    map.setFeatureState({
      source: AIRPLANE_SOURCE_ID,
      id: fHover.id
    }, {
      hover: true
    });
  }

  function mouseout() {
    if (!fHover) return;
    map.getCanvasContainer().style.cursor = 'default';
    map.setFeatureState({
      source: AIRPLANE_SOURCE_ID,
      id: fHover.id
    }, {
      hover: false
    });
    fHover = null;

  }
  return null;
};
