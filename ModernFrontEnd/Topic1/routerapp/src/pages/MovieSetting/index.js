import React from "react";
import { useLocation, useParams } from "react-router-dom";

const MovieDetailS = () => {
  const params = useParams();
  const l = useLocation();

  console.log(l);

  return <div>MovieDetailSetitng</div>;
};

export default MovieDetailS;
