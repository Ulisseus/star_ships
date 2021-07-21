import React from "react";
import Ship from "../types/ship";
import styles from "../styles/shipList.module.scss";

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
      className={
        shipsToCompare.includes(ship)
          ? `card bg-secondary text-white ${styles.ship}`
          : `card ${styles.ship}`
      }
    >
      {ship.name}
    </li>
  ));
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-secondary mx-3 my-2 text-primary"
          onClick={() => {
            setState("comparision");
          }}
        >
          Compare selected
        </button>
      </div>
      <ul className={`d-flex flex-column flex-md-wrap ${styles.list} mx-2`}>
        {names}
      </ul>
    </>
  );
};

export default ShipList;
