import React, { useRef, useEffect, useState } from "react";

function UseRefHook() {
  const [timer, setTimer] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
    inputRef.current = setInterval(() => {
      setTimer(prev=>prev+1);
    }, 1000);
    return () => {
      clearInterval(inputRef.current);
    };
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" name="text" />
      {timer}
      <button onClick={()=>clearInterval(inputRef.current)}>stop</button>
    </div>
  );
}

export default UseRefHook;
