import axios from "axios";
import React, { useEffect } from "react";

import { DataRow, Search } from "./components";
import "./styles/base.scss"

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => console.log("res ", res))
      .catch((err) => console.log("err ", err));
  }, []);

  return (
    <div className="App">
      <Search />
      <DataRow />
      <DataRow />
    </div>
  );
}

export default App;
