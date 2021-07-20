import React from "react";
import Ship from "../types/ship";
import { compareBy } from "./Comparison";
import styles from "../styles/shipProfile.module.css";

const fieldsToFilter = ["pilots", "films", "created", "edited", "url"];
const ShipProfile: React.FC<{ ship: Ship; value: compareBy }> = ({
  ship,
  value,
}) => {
  return (
    <div className={`card d-inline-block mx-3 my-2 ${styles.shipProfile}`}>
      {Object.keys(ship).map((key) => {
        const content = `${key}: ${ship[key as keyof Ship]}`;
        if (!fieldsToFilter.includes(key))
          if (key === "name") return <h1 className="card-header">{content}</h1>;
          else if (key === value) return <b className="px-3">{content}</b>;
          else return <p className="px-3">{content}</p>;
      })}
    </div>
  );
};

export default ShipProfile;
