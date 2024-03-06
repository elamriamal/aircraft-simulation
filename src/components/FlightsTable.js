import React, { useState } from "react";

// Composant de tableau d'avions
export const FlightsTable = ({ flights, onFlightClick, selectedFlight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const flightsInFlight = flights.filter((flight) => {
    return (
      flight.timestamp >= flight.routePoints.points[0].time &&
      flight.timestamp <=
        flight.routePoints.points[flight.routePoints.points.length - 1].time
    );
  });

  return (
    <div className={`flight-table ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-button-container">
        <button className="toggle-button" onClick={toggleCollapse}>
          {isOpen ? "Flights" : "Show flights"}
        </button>
      </div>
      <div className="table-container">
        {isOpen && (
          <>
            <table className="dark-table">
              <tbody>
                {flightsInFlight.map((flight) => (
                  <tr
                    key={flight.id}
                    onClick={() => onFlightClick(flight)}
                    style={{
                      backgroundColor:
                        selectedFlight && selectedFlight.id === flight.id
                          ? "#555"
                          : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <td>{flight?.routePoints?.name}</td>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                          flight.routePoints.metadata
                        ).slice(1, -1),
                      }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
