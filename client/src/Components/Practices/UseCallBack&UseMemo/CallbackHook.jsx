import React, { useState, useCallback } from "react";
import Age from "./Age";
import Title from "./Title";
import Button from "./Button";

function CallbackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(100000);
  const incAge = useCallback(() => {
    setAge((pervAge) => age + pervAge);
  }, [age]);
  
  const inSalary = useCallback(() => {
    setSalary((perv) => salary + perv);
  }, [salary]);
  return (
    <div>
      <Title name="useCallback" />
      <Age text="Age" age={age} />
      <Button incAge={incAge}> inc Age</Button>
      <Age text="salary" age={salary} />
      <Button incAge={inSalary}>inc salary</Button>
    </div>
  );
}

export default CallbackHook;
