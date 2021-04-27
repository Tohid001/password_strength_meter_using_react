import React from "react";

export default function BoilerIndicator({ temp }) {
  return (
    <p>
      {Number.isNaN(temp)
        ? "insert temp."
        : temp >= 100
        ? "water is boiling"
        : "water won't boil"}
    </p>
  );
}
