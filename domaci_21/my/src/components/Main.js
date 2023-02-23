import React, { useState, useEffect } from "react";
import Button from "./Button";

const Main = () => {
  const [text, setText] = useState("black");

  useEffect(() => {
    console.log("whatever");
  }, [text]);

  return (
    <>
      <Button color="red" text={"red"} submitHandler={setText} />
      <Button color="green" text={"green"} submitHandler={setText} />
      <Button color="blue" text={"blue"} submitHandler={setText} />
      <br />
      <h1>this text is brought to you by {text} button</h1>
    </>
  );
};

export default Main;
