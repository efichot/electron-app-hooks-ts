import React, { useEffect } from "react";
import { useGlobal } from "reactn";

const Counter: React.FC = () => {
  const [number, setNumber] = useGlobal("number");

  useEffect(() => {
    console.log("cdu Counter");
  });

  return (
    <>
      <button onClick={() => setNumber(number + 1)}> {number}</button>
    </>
  );
};

export default Counter;
