import React from "react";
import Ship from "../types/ship";

const ShipList: React.FC<{ ships: Ship[] }> = ({ ships }) => {
  console.log(ships);
  return <>Loading...</>;
};

export default ShipList;
