import React from "react";
import Ship from "../types/ship";

const ShipProfile: React.FC<{ ship: Ship }> = ({ ship }) => {
  return (
    <div className="d-inline-block mx-3 my-2">
      <h1>{ship.name}</h1>
      <p>{ship.max_atmosphering_speed}</p>
      <p>{ship.length}</p>
    </div>
  );
};

export default ShipProfile;
