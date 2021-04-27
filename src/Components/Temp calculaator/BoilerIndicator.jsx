import React from "react";

export default function BoilerIndicator({ temperature }) {
  return (
    <p>
      {Number.isNaN(temperature)
        ? "insert temp."
        : temperature >= 100
        ? "water is boiling"
        : "water won't boil"}
    </p>
  );
}
