import React from "react";

export default function TempInput({ temperature, scale, onChange }) {
  const scales = { c: "celcius", f: "fahrenheit" };
  return (
    <div class="form-group">
      <label for="text">Temperature in {scales[scale]}</label>
      <input
        type="text"
        class="form-control"
        id="text"
        placeholder="enter temp."
        value={temperature}
        onChange={(event) => {
          onChange(event, scale);
        }}
      ></input>
    </div>
  );
}
