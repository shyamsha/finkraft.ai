import React from "react";
import useCounterHook from "./useCounterHook";

function CounterHook() {
  const [counter, inc, dec, rst] = useCounterHook(0,1);
  return (
    <div>
      {counter}
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={rst}>rst</button>
    </div>
  );
}

export default CounterHook;
