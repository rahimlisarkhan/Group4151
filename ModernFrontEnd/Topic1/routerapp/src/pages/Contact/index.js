import React from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>Contact</div>

      <button onClick={() => navigate("/contact/101")}>+101</button>
      <button onClick={() => navigate("/contact/102")}>+102</button>
      <button onClick={() => navigate("/contact/110")}>+110</button>
    </>
  );
};

export default Contact;
