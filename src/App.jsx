import Home from "./pages/Home";
import Header from "./components/Header/Header";
import "../src/index.css";
import { useState } from "react";
function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <Home query={query} setQuery={setQuery} />
    </>
  );
}

export default App;
