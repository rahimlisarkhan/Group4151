import React, { useState, useEffect, useId } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { useFetchData } from "../../hooks/useFetchData";
import { getMovies } from "../../service";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useCountdown } from "../../hooks/useCountdown";
import CountDownContent from "../../components/CountDownContent";

// function Checkbox() {
//   const id = useId();
//   return (
//     <>
//       <label htmlFor={id}>Do you like React?</label>
//       <input id={id} type="checkbox" name="react"/>
//     </>
//   );
// };

const Home = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useFetchData(getMovies);

  useDocumentTitle("Home | App");

  // const id = useId();

  // console.log("id", id);

  // const handleData = ()=>{

  // }

  // const handleData = ()=>{

  // }

  // const handleData = ()=>{

  // }

  // const handleData = ()=>{

  // }

  // const handleData = ()=>{

  // }

  // const handle

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Header />
      <CountDownContent />
      <hr />
      <h1>About info</h1>

      <label>Male</label>
      <input name="gender" type="radio" value="male" />

      <label htmlFor="feIn">Female</label>
      <input name="gender" id="feIn" type="radio" value="female" />

      <button onClick={() => navigate(ROUTER.ABOUT)}>Get Started</button>
      <hr />
    </>
  );
};

export default Home;
