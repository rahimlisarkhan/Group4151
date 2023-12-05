import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
