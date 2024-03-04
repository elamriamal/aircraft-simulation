import React, { useState } from "react";

// Composant de tableau d'avions
export const FlightsTable = ({ flights, onFlightClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
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
                {flights.map((flight) => (
                  <tr key={flight.id} onClick={() => onFlightClick(flight)}>
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
