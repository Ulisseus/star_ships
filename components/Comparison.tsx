import React from "react";
import Ship from "../types/ship";

const Comparision: React.FC<{
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
  ships: Ship[];
}> = ({ setState, ships }) => {
  return (
    <>
      <h1>Comparing...</h1>
      {ships.map((s) => s.name)}
      <button
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
