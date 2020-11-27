import React, { Fragment, useReducer } from "react";
import { userContext, lastContext } from "./Experiment";

const iState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "rst":
      return iState;

    default:
      return state;
  }
};

function ContextChild2() {
  const [count, dispatch] = useReducer(reducer, iState);
  return (
    <Fragment>
      <div>
        <userContext.Consumer>
          {(value) => {
            return (
              <lastContext.Consumer>
                {(last) => {
                  return (
                    <div>
                      {value} of {last}
                    </div>
                  );
                }}
              </lastContext.Consumer>
            );
          }}
        </userContext.Consumer>
      </div>
      <div>
        count = {count}
        <button onClick={() => dispatch("inc")}>inc</button>
        <button onClick={() => dispatch("dec")}>dec</button>
        <button onClick={() => dispatch("rst")}>rst</button>
      </div>
    </Fragment>
  );
}

export default ContextChild2;
