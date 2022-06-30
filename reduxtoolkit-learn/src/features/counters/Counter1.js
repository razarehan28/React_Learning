import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => {}}
      >
        {" "}
        +{" "}
      </button>
      <span className="value">{count}</span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {}}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Counter;
