import React from "react";

const Comparision: React.FC<{
  setState: React.Dispatch<React.SetStateAction<"selection" | "comparision">>;
}> = ({ setState }) => {
  return (
    <>
      <h1>Comparing...</h1>
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
