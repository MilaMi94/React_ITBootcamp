import React from "react";

const Button = ({ color, text, submitHandler }) => {
  return (
    <button
      value={text}
      style={{ color: color }}
      onClick={() => submitHandler(text)}
    >
      {text}
    </button>
  );
};

export default Button;
