import React from "react";
// import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const LifeContent = ({ color = "red" }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  // const [form, setForm] = useState({});
  const [css, setCss] = useState(color);

  //   document.title = "Salam";

  //   fetch("").then()

  //   console.log("form", form);

  //   const getMovie = () => {
  //     fetch("").then();
  //   };

  //? Component insa olundu - componentDidMount
  //   useEffect(() => {
  //     console.log("did mount");

  //     // setForm({ name: "John", age: "34" });
  //     // getMovie();

  //     //? Component dagidildi - componentUnmount
  //     return () => {};
  //   }, []);

  //? Component dagidildi - componentUnmount
  //   useEffect(() => {
  //     // const scrollEvent = (e) => {};

  //     // window.addEventListener("scroll", scrollEvent);

  //     // socket.on("user")

  //     return () => {
  //       console.log("un mount....");
  //       //   localStorage.removeItem("user");
  //       //   window.removeEventListener("scroll", scrollEvent);
  //       //   setData([])
  //       //   socket.off("user")
  //     };
  //   }, []);

  //   useLayoutEffect(() => {
  //     console.log("will mount...");
  //     document.title = "LifeApp";
  //     document.body.style.background = "black";
  //     document.body.style.color = "white";
  //   }, []);

  //? Component yenilendi - componentDidUpdate
  //   useEffect(() => {
  //     console.log("update..");
  //     // setData(count * 20);
  //   }, [count]);

  //   useLayoutEffect(()=>{

  //     console.log("update...");

  //     return ()=>{

  //     }
  //   },[count])

  useEffect(() => {
    setCss(color);
  }, [color]);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    console.log("update..");
    // setData(count * 20);
    setCss(color);
  }, [color]);

  return (
    <>
      <h1>LifeContent : {count}</h1>;
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default LifeContent;
