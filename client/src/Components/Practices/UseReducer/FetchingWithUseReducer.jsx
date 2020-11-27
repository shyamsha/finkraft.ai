import React, { useReducer, useEffect } from "react";
import axios from "../../../config/config";

const iState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRequest":
      return { ...state, loading: true, error: "" };
    case "dataResponse":
      return { ...state, loading: false, data: action.payload, };
    case "dataFailure":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function FetchingWithUseReducer() {
  const [data, dispatch] = useReducer(reducer, iState);
  useEffect(() => {
    dispatch({ type: "dataRequest" });
    axios
      .get("/contacts")
      .then((response) => {
        dispatch({ type: "dataResponse", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "dataFailure",payload: "wrong" });
      });
  }, []);
  return (
    <div>
      {data.loading ? "Loading" : "9849084994"}
      {data.error ? data.error : null}
    </div>
  );
}

export default FetchingWithUseReducer;
