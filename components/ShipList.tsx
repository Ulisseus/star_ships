import React from "react";
import Ship from "../types/ship";
import styles from "../styles/shipList.module.css";

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
        if (shipsToCompare.map((s) => s.name).includes(ship.name)) {
          setShipToCompare(shipsToCompare.filter((s) => s.name !== ship.name));
        } else setShipToCompare([...shipsToCompare, ship]);
      }}
      className={shipsToCompare.includes(ship) ? "card bg-secondary " : "card "}
    >
      {ship.name}
    </li>
  ));
  return (
    <>
      <ul className="m-auto text-center px-3">{names}</ul>

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
