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
    <div>
      <h2>Compare by:</h2>
      <div className="d-flex flex-wrap">
        {compareByArr.map((value) => {
          return (
            <button
              onClick={() => setCompareBy(value as compareBy)}
              key={value}
              type="button"
              className="btn btn-secondary mx-3 my-2"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CompareBy;