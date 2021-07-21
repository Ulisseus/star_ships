import React from "react";
import { compareBy } from "./Comparison";
import styles from "../styles/compareBy.module.scss";

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
  compareBy: compareBy;
  byIncreasing: boolean;
  setByIncreasing: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setCompareBy, compareBy, byIncreasing, setByIncreasing }) => {
  return (
    <div>
      <h2 className="text-primary">Compare by:</h2>
      <div className="d-flex flex-wrap">
        {compareByArr.map((value) => {
          return (
            <button
              onClick={() => {
                setCompareBy(value as compareBy);
                if (value === compareBy) setByIncreasing(!byIncreasing);
              }}
              key={value}
              type="button"
              className={`btn mx-3 my-2  ${
                value === compareBy
                  ? `btn-primary ${
                      byIncreasing ? styles.increasing : styles.decreasing
                    }`
                  : "btn-secondary"
              }`}
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
