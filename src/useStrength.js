import React, { useState, useCallback, useEffect, useRef } from "react";
import { calculatePasswordStrength } from "./weaknessFunctions";

export default function useStrength() {
  const [state, setState] = useState({
    value: "",
    strength: 0,
    weaknesses: [],
  });

  useEffect(() => {
    let weaknessLists = calculatePasswordStrength(state.value);
    let sumStrength = 100;
    weaknessLists.length &&
      weaknessLists.forEach((weaknessListItem) => {
        sumStrength -= weaknessListItem.score;
      });

    setState({ ...state, strength: sumStrength, weaknesses: weaknessLists });
  }, [state.value]);
  return [state, setState];
}
