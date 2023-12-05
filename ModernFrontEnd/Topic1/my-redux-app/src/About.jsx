import reactLogo from "./assets/react.svg";
import "./App.css";
import { batch, useDispatch, useSelector } from "react-redux";
import { changeValue, decrement, increment } from "./store/user/userSlice";
import { Link } from "react-router-dom";
import { setLoading } from "./store/setting/settingSlice";

export function About() {
  const state = useSelector((umumiState) => umumiState.userReducer);
  const stateSetting = useSelector((umumiState) => umumiState.settingReducer);

  const dispatch = useDispatch();

  console.log("state", state);
  console.log("stateSetting", stateSetting);

  const handleChangeCount = () => {
    // const obj = increment()
    // const obj = decrement()
    // const obj = changeValue(20);

    // console.log(obj);

    dispatch(changeValue(40));
  };

  const handleIncCount = () => {
    batch(() => {
      dispatch(increment());
      dispatch(setLoading(true));
    });
  };
  const handleDecCount = () => {
    batch(() => {
      dispatch(decrement());
      dispatch(setLoading(false));
    });
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
      <h1>About {stateSetting.loading ? "...." : ""}</h1>
      <h1>Redux + React</h1>
      <h1>Count: {state.count}</h1>
      <h1>Status: {state.status}</h1>
      <button onClick={handleChangeCount}>Change</button>
      <button onClick={handleIncCount}>Plus</button>
      <button onClick={handleDecCount}>Minus</button>
    </>
  );
}
