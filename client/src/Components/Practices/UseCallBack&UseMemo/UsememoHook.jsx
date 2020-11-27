import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const counterOne = () => {
    setOne((prevState) => prevState + 1);
  };
  const counterTwo = () => {
    setTwo((prevState) => prevState + 1);
  };
  // usememo using only re-compute cast value when dependency change
  // diff usecallback casts provided function instance itself wether
  //  usememo invoke provided function and casts its results
  const even = useMemo(() => {
    let i = 0;
    while (i < 20000000000) {
      i++;
      return one % 2 === 0;
    }
  }, [one]);
  return (
    <div>
      <div>
        <button onClick={counterOne}>{one}</button>
        <span>{even ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={counterTwo}>{two}</button>
      </div>
    </div>
  );
}

export default UseMemoHook;
