import React, { Fragment, useReducer } from "react";
import { Space } from "antd";

const iState = {
  counter: 0,
  counter2: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, counter: state.counter + action.value };
    case "dec":
      return { ...state, counter: state.counter - action.value };
    case "inc1":
      return { ...state, counter2: state.counter2 + action.value };
    case "dec1":
      return { ...state, counter2: state.counter2 - action.value };
    case "rst":
      return iState;

    default:
      return state;
  }
};

function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, iState);
  return (
    <Fragment>
      <Space style={{ textAlign: "center", padding: "2rem" }}>
        <div>
          count = {count.counter}
        </div>
        <div>
          count2 = {count.counter2}
        </div>
        <div>
          <Space>
            <button onClick={() => dispatch({ type: "inc", value: 1 })}>
              inc
            </button>
            <button onClick={() => dispatch({ type: "dec", value: 1 })}>
              dec
            </button>
            <button onClick={() => dispatch({ type: "inc1", value: 5 })}>
              inc5
            </button>
            <button onClick={() => dispatch({ type: "dec1", value: 5 })}>
              dec 5
            </button>
            <button onClick={() => dispatch({ type: "rst", value: 0 })}>
              rst
            </button>
          </Space>
        </div>
      </Space>
    </Fragment>
  );
}

export default ReducerHook;
