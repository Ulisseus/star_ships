import React from "react";
import Ship from "../types/ship";

const ShipList: React.FC<{
  ships: Ship[];
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  setShipToCompare: React.Dispatch<React.SetStateAction<Ship[]>>;
  shipsToCompare: Ship[];
}> = ({ ships, setState, setShipToCompare, shipsToCompare }) => {
  const names = ships.map((ship) => (
    <li
      key={ship.name}
      onClick={() => {
        if (shipsToCompare.map((s) => s.name).includes(ship.name)) return;
        setShipToCompare([...shipsToCompare, ship]);
      }}
    >
      {ship.name}
    </li>
  ));
  return (
    <>
      <ul>{names}</ul>

      <button
        onClick={() => {
          setState("comparision");
        }}
      >
        Change State
      </button>
    </>
  );
};

export default ShipList;
