import React, { useState } from "react";

const Counter1 = () => {
  const [state, setState] = useState({ counter: 4, color: "blue" });
  const { counter, color } = state;

  const handleDecrement = () => {
    setState((prevState) => {
      //spread operator
      // omogucava nam da iskopiramo ceo ili delove niza ili objekta
      return { ...prevState, counter: prevState.counter - 1 };
    });
  };

  const handleIncrement = () => {
    setState((prevState) => {
      return { ...prevState, counter: prevState.counter + 1 };
    });
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <span style={{ marginLeft: 15 }}>{color}</span>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button
        onClick={() =>
          setState((prevState) => {
            return { ...prevState, color: "red" };
          })
        }
      >
        change color
      </button>
    </div>
  );
};

export default Counter1;