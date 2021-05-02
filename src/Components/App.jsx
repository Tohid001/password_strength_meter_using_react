/* eslint-disable no-unreachable */
import React from "react";

import Counter from "./Counter";
import ClickCounter from "./ClickCounter";

function App() {
  return (
    <Counter
      render={(count, handleClick) => (
        <ClickCounter count={count} handleClick={handleClick} />
      )}
    />
  );
}
export default App;
