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

const CompareButton: React.FC<{
  value: string;
  compareBy: compareBy;
  sortByIncreasing: boolean;
}> = ({ value, compareBy, sortByIncreasing }) => {
  return (
    <button
      key={value}
      type="button"
      className={`btn mx-3 my-2 ${styles.button}  ${
        value === compareBy
          ? `btn-primary ${
              sortByIncreasing ? styles.increasing : styles.decreasing
            }`
          : "btn-secondary text-primary"
      }`}
    >
      {value}
    </button>
  );
};

const CompareBy: React.FC<{
  setCompareBy: React.Dispatch<React.SetStateAction<compareBy>>;
  compareBy: compareBy;
  byIncreasing: boolean;
  setByIncreasing: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setCompareBy, compareBy, byIncreasing, setByIncreasing }) => {
  return (
    <div>
      <h2 className={`text-primary mx-3 ${styles.title}`}>Compare by:</h2>
      <div className="d-flex flex-wrap">
        {compareByArr.map((value) => {
          return (
            <div
              onClick={() => {
                setCompareBy(value as compareBy);
                if (value === compareBy) setByIncreasing(!byIncreasing);
              }}
              key={value}
            >
              <CompareButton
                value={value}
                compareBy={compareBy}
                sortByIncreasing={byIncreasing}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompareBy;
