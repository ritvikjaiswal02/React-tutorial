import React from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    document.title = counter;

    console.log("UseEffect runs");
  }, [counter]);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increasing</button>
      <button onClick={() => setCounter(counter - 1)}>Decreasing</button>
    </div>
  );
};

export default UseEffect;
