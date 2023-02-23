import React, { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      break;
  }
};

//const[state,dispatch] = useReduser(reducer, initialState, init?)

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("Increment")}>+</button>
      <button onClick={() => dispatch("Decrement")}>-</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
