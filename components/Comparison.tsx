import React, { useState } from "react";
import Ship from "../types/ship";
import CompareBy from "./CompareBy";
import ShipProfile from "./ShipProfile";

export type compareBy =
  | "cost_in_credits"
  | "max_atmosphering_speed"
  | "crew"
  | "passengers"
  | "length"
  | "cargo_capacity"
  | "hyperdrive_rating"
  | "MGLT";

const validate = (value: any) => {
  if (value === "unknown" || value === "n/a") return Number.NEGATIVE_INFINITY;
  return Number.parseFloat(value);
};

const Comparision: React.FC<{
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  ships: Ship[];
}> = ({ setState, ships }) => {
  const [compareBy, setCompareBy] = useState<compareBy>("cost_in_credits");
  ships.sort((a, b) => validate(b[compareBy]) - validate(a[compareBy]));
  return (
    <>
      <CompareBy setCompareBy={setCompareBy} />
      <div className="d-flex flex-nowrap">
        {ships.map((ship) => (
          <ShipProfile ship={ship} value={compareBy} key={ship.name} />
        ))}
      </div>
      <button
        type="button"
        className="d-block"
        onClick={() => {
          setState("selection");
        }}
      >
        Back to selection
      </button>
    </>
  );
};

export default Comparision;
