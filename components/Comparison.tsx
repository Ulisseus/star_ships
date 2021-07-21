import React, { useState } from "react";
import Ship from "../types/ship";
import CompareBy from "./CompareBy";
import ShipProfile from "./ShipProfile";
import styles from "../styles/comparison.module.scss";

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
  const [byIncreasing, setByIncreasing] = useState(true);
  ships.sort((a, b) => {
    if (byIncreasing) return validate(b[compareBy]) - validate(a[compareBy]);
    else return validate(a[compareBy]) - validate(b[compareBy]);
  });
  return (
    <>
      <CompareBy
        setCompareBy={setCompareBy}
        compareBy={compareBy}
        byIncreasing={byIncreasing}
        setByIncreasing={setByIncreasing}
      />
      <div className={`d-flex flex-nowrap ${styles.comparison}`}>
        {ships.map((ship) => (
          <ShipProfile ship={ship} value={compareBy} key={ship.name} />
        ))}
      </div>
      <button
        type="button"
        className="btn btn-secondary mx-3 my-2 text-primary border border-primary"
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
