import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, { type, value }) => {
  switch (type) {
    case "increment":
      return state + value;
    case "decrement":
      return state - value;

    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{count}</div>
      <div>
        <button
          type="button"
          onClick={dispatch({ type: "increment", value: 1 })}
        >
          increment by 1
        </button>
        <button
          type="button"
          onClick={dispatch({ type: "decrement", value: 1 })}
        >
          decrement by 1
        </button>
        <button
          type="button"
          onClick={dispatch({ type: "increment", value: 1 })}
        >
          increment by 1
        </button>
        <button
          type="button"
          onClick={dispatch({ type: "decrement", value: 1 })}
        >
          decrement by 1
        </button>
      </div>
    </>
  );
}

export default App;
