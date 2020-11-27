import React from "react";
import useInput from "./useInput";

function InputCustomHook() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`${firstName} \n ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...bindFirstName} />
        <input type="text" {...bindLastName} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default InputCustomHook;
