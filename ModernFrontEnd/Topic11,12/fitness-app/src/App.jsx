import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program" element={<Program />} />
    </Routes>
  );
}

export default App;
