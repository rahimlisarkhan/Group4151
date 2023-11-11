import React, { useEffect, useState } from "react";
import { getMovies } from "../../service";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getMovies();

      setData(res.data.Search);
    })();
  }, []);

  return (
    <div>
      Movie
      <div style={{ display: "flex", gap: 10 }}>
        {data?.map((movie) => (
          <div>
            <img src={movie.Poster} width={100} />
            <h6>{movie.Title}</h6>
            <button onClick={() => navigate("/movies/" + movie.imdbID)}>
              {" "}
              Watching
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
