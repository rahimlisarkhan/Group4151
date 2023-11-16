import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";

const Home = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState();

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

  return (
    <>
      <Header />
      <div>Home</div>
      <hr />
      <h1>About info</h1>
      <button onClick={() => navigate(ROUTER.ABOUT)}>Get Started</button>
      <hr />
    </>
  );
};

export default Home;
