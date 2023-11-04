import { useState } from "react";
import LifeContent from "./components/LifeContent";
import "./styles/global.css";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  // useLayoutEffect(() => {
  //   console.log("will mount...");
  //   document.title = "LifeApp";
  //   document.body.style.background = "black";
  //   document.body.style.color = "white";
  // }, []);

  return (
    <>
      {show && <LifeContent />}
      <button onClick={() => setShow((prev) => !prev)}>show</button>
    </>
  );
}

export default App;
