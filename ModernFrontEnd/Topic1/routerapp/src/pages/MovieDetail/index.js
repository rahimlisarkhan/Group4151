import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieID } from "../../service";

const MovieDetail = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getMovieID(params.omdb);

      console.log(res);

      setData(res.data);
    })();
  }, [params]);

  return (
    <div>
      <h1>MovieDetail:{data.Title}</h1>
      <img src={data.Poster} width={300} />
      {/* <button onClick={() => navigate(`/movies/${params?.omdb}/setting`)}> */}
      <button onClick={() => navigate(`setting`)}>Setting</button>
    </div>
  );
};

export default MovieDetail;
