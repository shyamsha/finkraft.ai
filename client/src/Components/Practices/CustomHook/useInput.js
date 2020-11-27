import { useState } from "react";

export default function useInput(state) {
  const [value, setValue] = useState(state);

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  const reset = () => {
    setValue("");
  };
  return [value, bind, reset];
}
