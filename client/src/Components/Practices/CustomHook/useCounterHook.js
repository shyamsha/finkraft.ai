import { useState } from "react";

function useCounterHook(state,value) {
  const [counter, setCounter] = useState(state);
  const inc = () => {
    setCounter((prev) => prev + value);
  };
  const dec = () => {
    setCounter((prev) => prev - value);
  };
  const rst = () => {
    setCounter(state);
  };
  return [counter, inc, dec, rst];
}

export default useCounterHook;
