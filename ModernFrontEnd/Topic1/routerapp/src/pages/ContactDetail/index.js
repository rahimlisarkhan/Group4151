import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  console.log(params.c_id);

  useEffect(() => {
    if (!params.c_id) return;

    getMovieID(params.c_id);
  }, [params.c_id]);

  const getMovieID = (id) => {
    // const finsData = mockData.find((item) => item.id == id);
    // setData(finsData);
  };

  // const handleGame = () => {
  //   switch (params.c_id) {
  //     case 1:
  //       return <DiceContet />;
  //     case 2:
  //       return <CoinApp />;
  //     case 3:
  //       return <DiceContet />;
  //   }
  // };

  return (
    <>
      {/* {handleGame()} */}
      <button onClick={() => navigate(-1)}>back</button>
      <h1>ContactDetail: {params.c_id}</h1>
    </>
  );
};

export default ContactDetail;
