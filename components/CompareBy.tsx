import React from "react";
import { compareBy } from "./Comparison";
export const compareByArr = [
  "cost_in_credits",
  "max_atmosphering_speed",
  "crew",
  "passengers",
  "length",
  "cargo_capacity",
  "hyperdrive_rating",
  "MGLT",
];

const CompareBy: React.FC<{
  setCompareBy: React.Dispatch<React.SetStateAction<compareBy>>;
}> = ({ setCompareBy }) => {
  return (
    <details>
      <summary>Compare By:</summary>
      {compareByArr.map((value) => {
        return (
          <button
            onClick={() => setCompareBy(value as compareBy)}
            key={value}
          >{`Compare by ${value}`}</button>
        );
      })}
    </details>
  );
};

export default CompareBy;
