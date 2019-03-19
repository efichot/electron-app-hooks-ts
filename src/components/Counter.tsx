import React from "react";
import { useGlobal } from "reactn";

const Counter: React.FC = () => {
  const [number, setNumber] = useGlobal("number");
  return (
    <>
      <button onClick={() => setNumber(number + 1)}> {number}</button>
    </>
  );
};

export default Counter;
