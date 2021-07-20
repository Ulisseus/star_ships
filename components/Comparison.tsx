import React, { useState } from "react";
import Ship from "../types/ship";
import ShipProfile from "./ShipProfile";

type compareBy = "name" | "length" | "max_atmosphering_speed";
const compareByArr = ["length", "max_atmosphering_speed"];

const validate = (value: any) => {
  if (value === "unknown") return Number.NEGATIVE_INFINITY;
  return Number.parseFloat(value);
};

const Comparision: React.FC<{
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  ships: Ship[];
}> = ({ setState, ships }) => {
  const [compareBy, setCompareBy] = useState<compareBy>("name");
  ships.sort((a, b) => validate(a[compareBy]) - validate(b[compareBy]));
  console.log(ships,'ships')
  return (
    <>
      {ships.map((ship) => (
        <ShipProfile ship={ship} />
      ))}
      <button
        type="button"
        className="d-block"
        onClick={() => {
          setState("selection");
        }}
      >
        Back to selection
      </button>
      {compareByArr.map((value) => {
        return (
          <button
            onClick={() => setCompareBy(value as compareBy)}
          >{`Compare by ${value}`}</button>
        );
      })}
    </>
  );
};

export default Comparision;
