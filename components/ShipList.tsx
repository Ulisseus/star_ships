import React from "react";
import Ship from "../types/ship";

const ShipList: React.FC<{
  ships: Ship[];
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
}> = ({ ships, setState }) => {
  const names = ships.map((ship) => <li key={ship.name}>{ship.name}</li>);
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
