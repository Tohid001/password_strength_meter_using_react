/* eslint-disable no-unreachable */
import React from "react";

import ClickCounter from "./ClickCounter";
import Counter from "./Counter";

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
