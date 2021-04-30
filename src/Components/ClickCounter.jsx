import React from "react";

export default function ClickCounter({ count, handleClick }) {
  return <button onClick={handleClick}>clicked {count} times</button>;
}
