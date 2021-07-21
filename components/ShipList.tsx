import React from "react";
import Ship from "../types/ship";
import styles from "../styles/shipList.module.scss";

const ShipList: React.FC<{
  ships: Ship[];
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  setShipToCompare: React.Dispatch<React.SetStateAction<Ship[]>>;
  shipsToCompare: Ship[];
}> = ({ ships, setState, setShipToCompare, shipsToCompare }) => {
  const onClick = (ship: Ship) => {
    if (shipsToCompare.map((s) => s.name).includes(ship.name)) {
      setShipToCompare(shipsToCompare.filter((s) => s.name !== ship.name));
    } else setShipToCompare([...shipsToCompare, ship]);
  };
  const names = ships.map((ship) => (
    <li
      key={ship.name}
      onClick={() => onClick(ship)}
      className={
        shipsToCompare.includes(ship)
          ? `card bg-secondary text-primary ${styles.ship} my-1  px-2 py-1`
          : `card ${styles.ship} bg-primary my-1 px-2 py-1`
      }
    >
      {ship.name}
    </li>
  ));
  const button = (
    <button
      type="button"
      className="btn btn-secondary mx-3 my-2 text-primary border border-primary"
      onClick={() => {
        setState("comparision");
      }}
    >
      <b className={styles.button}>Compare selected</b>
    </button>
  );
  return (
    <>
      <ul className={`${styles.list} mx-2`}>{names}</ul>
      <div className="d-flex justify-content-center">{button}</div>
    </>
  );
};

export default ShipList;
