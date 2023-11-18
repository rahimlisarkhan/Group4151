import React, { useReducer, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const initialState = {
  loading: false,
  user: null,
  count: 0,
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "ADD_COUNT":
      return { ...state, count: action.payload };

    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "FILL_USER":
      const newUser = action.payload;

      return { ...state, user: newUser };

    default:
      return state;
  }
};

const Contact = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState); //[{},f]

  console.log(state);

  // const [data,setData] = useState()
  // const [data,setData] = useState()
  // const [data,setData] = useState()
  // const [data,setData] = useState()
  // const [data,setData] = useState()
  // const [data,setData] = useState()
  // const [data,setData] = useState()

  const handleCount = () => {
    dispatch({ type: "ADD_COUNT", payload: state.count + 2 });
    // dispatch({ type: "INCREMENT" });
  };

  const handleUser = () => {
    const data = { fullname: "John", age: 22 };

    dispatch({ type: "FILL_USER", payload: data });
  };

  return (
    <>
      <Header />
      <div>Contact:{state.count}</div>
      <div>Loading:{state.loading}</div>

      <button onClick={handleCount}> SetCount</button>
      <button onClick={handleUser}> SetUser</button>

      <button onClick={() => navigate("/contact/101")}>+101</button>
      <button onClick={() => navigate("/contact/102")}>+102</button>
      <button onClick={() => navigate("/contact/110")}>+110</button>
    </>
  );
};

export default Contact;
