import { useState } from "react";
import { Navbar } from "./Navbar";

export const Header = (props) => {
  const [value, setValue] = useState({});
  const [count, setCount] = useState(0);

  console.log("value", value);

  const handleClick = () => {
    // const arr = [1, 2, 3, 4, 5];
    const personal = {
      name: "John Doe",
      age: 43,
    };
    // setValue(arr);
    setValue(personal);
  };

  const inlineStyle = {
    backgroundColor: "whitesmoke",
  };

  return (
    <header style={inlineStyle}>
      <div>Logo content</div>
      <div>Name: {value?.name}</div>
      <div>Age: {value?.age}</div>
      <button onClick={handleClick}>Change</button>
      <hr></hr>
      {/* <button onClick={() => setCount(count - 1)}>Azalt</button> */}
      <button
        // disabled={count == 0}
        disabled={!count}
        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        Azalt
      </button>

      <span>{count}</span>
      {/* <button onClick={() => setCount(count + 1)}>Artir</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Artir</button>
      <hr></hr>

      <Navbar onlineCount={props.onlineUserCount} />
    </header>
  );
};
