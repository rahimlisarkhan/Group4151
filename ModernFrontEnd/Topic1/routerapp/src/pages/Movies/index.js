import React, { useContext, useEffect, useState } from "react";
import { getMovies } from "../../service";
import { useNavigate } from "react-router-dom";
import {
  globalContext,
  useGlobalStore,
} from "../../store/GlobalProvider/GlobalProvider";
import Header from "../../components/Header";

const Movie = () => {
  const [data, setData] = useState([]);

  const { favorites, handleFav } = useGlobalStore();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getMovies();

      setData(res.data.Search);
    })();
  }, []);

  return (
    <div>
      <Header />
      Movie
      <div style={{ display: "flex", gap: 10 }}>
        {data?.map((movie) => {
          const isFavEl = favorites.find((el) => el.imdbID == movie.imdbID);

          return (
            <div key={movie.imdbID}>
              <img src={movie.Poster} width={100} />
              <h6>{movie.Title}</h6>
              <button onClick={() => navigate("/movies/" + movie.imdbID)}>
                {" "}
                Watching
              </button>
              <button onClick={() => handleFav(movie)}>
                {isFavEl ? "Remove" : "Add"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
