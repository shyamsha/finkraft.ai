import React, { useEffect, useState } from "react";
import axios from "../../config/config";
import ContextChild from "./ContextChild";

export const userContext = React.createContext();
export const lastContext = React.createContext();

export default function Experiment() {
  const [value, setValue] = useState(1);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    document.title = `your value ${value}`;

    if (reload) {
      axios
        .get("/contacts")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
          }
        })
        .catch((err) => {});
    } else {
      axios
        .get("/contacts")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
          }
        })
        .catch((err) => {});
    }
    return () => {
      console.log("removing event listeners");
      window.removeEventListener("mouseleave", function () {});
    };
  }, [value]);

  return (
    <div style={{ padding: "4rem" }}>
      value {value}
      <button onClick={() => setValue((prevState) => prevState + 1)}>
        increment
      </button>
      <button onClick={() => setReload((prevState) => !prevState)}>
        {reload ? "true" : "false"}
      </button>
      <div>
        <userContext.Provider value={"shyam"}>
          <lastContext.Provider value={"kumar"}>
            <ContextChild />
          </lastContext.Provider>
        </userContext.Provider>
      </div>
    </div>
  );
}
