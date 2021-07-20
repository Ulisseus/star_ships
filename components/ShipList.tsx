import React from "react";
import Ship from "../types/ship";

const ShipList: React.FC<{ ships: Ship[] }> = ({ ships }) => {
  const names = ships.map((ship) => ship.name);
  return <>{names}</>;
};

export default ShipList;
