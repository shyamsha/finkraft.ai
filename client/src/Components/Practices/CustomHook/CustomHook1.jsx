import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomHook1() {
  const [counter, setCounter] = useState(0);
  useCounter(counter);
  const inc = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={inc}>counter</button>
    </div>
  );
}

export default CustomHook1;
