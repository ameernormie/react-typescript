import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import { DataRow, Search } from "./components";
import "./styles/base.scss";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<
    Array<Array<{ Highlighted: string; Normal: string }>>
  >([]);

  // Would be good to add debounce method to stop multiple calls again and again
  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`http://localhost:8080/search/${searchQuery}`)
        .then(({ data }) => setProducts(data))
        .catch((err) => console.log("err ", err));
    } else {
      setProducts([]);
    }
  }, [searchQuery]);

  const onSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="App">
      <Search query={searchQuery} searchHandler={onSearchChange} />
      {products.length
        ? products.map((product, index) => (
            <DataRow key={String(index)} product={product} />
          ))
        : null}
    </div>
  );
}

export default App;
