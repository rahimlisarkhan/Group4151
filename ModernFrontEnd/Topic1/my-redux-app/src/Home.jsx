import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, decrement, increment } from "./store/user/userSlice";
import { Link } from "react-router-dom";

export function Home() {
  const state = useSelector((umumiState) => umumiState.userReducer);

  const dispatch = useDispatch();

  console.log("state", state);

  const handleChangeCount = () => {
    // const obj = increment()
    // const obj = decrement()
    // const obj = changeValue(20);

    // console.log(obj);

    dispatch(changeValue(20));
  };

  const handleIncCount = () => {
    dispatch(increment());
  };
  const handleDecCount = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={"https://cdn.worldvectorlogo.com/logos/redux.svg"}
            className="logo react"
            alt="Redux logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home</h1>
      <h1>Redux + React</h1>
      <h1>Count: {state.count}</h1>
      <h1>Status: {state.status}</h1>
      <button onClick={handleChangeCount}>Change</button>
      <button onClick={handleIncCount}>Plus</button>
      <button onClick={handleDecCount}>Minus</button>
    </>
  );
}
