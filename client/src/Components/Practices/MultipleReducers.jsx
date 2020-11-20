import { Space } from "antd";
import React, { Fragment, useReducer } from "react";

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
// Multiple reducers use single action dispatch
function MultipleReducers() {
  const [count1, dispatch] = useReducer(reducer, iState);
  const [count2, dispatch2] = useReducer(reducer, iState);

  return (
    <Fragment>
      <Space>
        <div>count1 = {count1}</div>
        <div>
          <button onClick={() => dispatch("inc")}>inc</button>
          <button onClick={() => dispatch("dec")}>dec</button>
          <button onClick={() => dispatch("rst")}>rst</button>
        </div>
        <div>count2 = {count2}</div>
        <div>
          <button onClick={() => dispatch2("inc")}>inc</button>
          <button onClick={() => dispatch2("dec")}>dec</button>
          <button onClick={() => dispatch2("rst")}>rst</button>
        </div>
      </Space>
    </Fragment>
  );
}

export default MultipleReducers;
