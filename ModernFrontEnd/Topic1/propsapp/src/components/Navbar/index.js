import { useState } from "react";
import { RegisterButtonGroup } from "../Register";

import styles from "./Nav.module.css";

export const Navbar = (props) => {
  console.log("Navbarin Propsu", props);

  const [show, setShow] = useState(false);

  console.log("show", show);

  const handleMode = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav>
      <button onClick={handleMode}>Mode</button>

      <div className={`${styles.navbar} ${show ? styles.dark_mode : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>

        <RegisterButtonGroup online={props.onlineCount} />
      </div>
    </nav>
  );
};
