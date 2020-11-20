import React, { useState, useEffect } from "react";
import axios from "../../config/config";

function Fetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/contacts")
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setData({});
        setError("something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : "9849084994"}
      {error ? error : null}
    </div>
  );
}

export default Fetching;
