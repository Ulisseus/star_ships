import React from "react";
import Ship from "../types/ship";
import { compareBy } from "./Comparison";

const fieldsToFilter = ["pilots", "films", "created", "edited", "url"];
const ShipProfile: React.FC<{ ship: Ship; value: compareBy }> = ({
  ship,
  value,
}) => {
  return (
    <div className="d-inline-block mx-3 my-2">
      {Object.keys(ship).map((key) => {
        if (!fieldsToFilter.includes(key))
          return key === value ? (
            <h1>{`${key}: ${ship[key as keyof Ship]}`}</h1>
          ) : (
            <p className="">{`${key}: ${ship[key as keyof Ship]}`}</p>
          );
      })}
    </div>
  );
};

export default ShipProfile;
