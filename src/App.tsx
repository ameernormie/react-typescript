import React from "react";

import { DataRow, Search } from "./components";
import "./styles/base.scss"

function App() {
  return (
    <div className="App">
      <Search />
      <DataRow />
      <DataRow />
    </div>
  );
}

export default App;
