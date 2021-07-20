import React, { useState } from "react";
import Ship from "../types/ship";
import ShipProfile from "./ShipProfile";

type compareBy = "name" | "length" | "max_atmosphering_speed";

const Comparision: React.FC<{
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  ships: Ship[];
}> = ({ setState, ships }) => {
  const [compareBy, setCompareBy] = useState<compareBy>("name");
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
    </>
  );
};

export default Comparision;
