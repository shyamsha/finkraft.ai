import React, { useContext } from "react";
import ContextChild2 from "./ContextChild2";
import { userContext, lastContext } from "./Experiment";

function ContextChild1() {
  const user = useContext(userContext);
  const last = useContext(lastContext);
  return (
    <div>
      {user}-{last}
      <ContextChild2 />
    </div>
  );
}

export default ContextChild1;
