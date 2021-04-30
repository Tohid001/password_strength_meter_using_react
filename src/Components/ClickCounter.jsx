import React from "react";
import Hoc from "./hoc";

const ClickCounter = ({ counter, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      clicked {counter} times
    </button>
  );
};

export default Hoc(ClickCounter);
