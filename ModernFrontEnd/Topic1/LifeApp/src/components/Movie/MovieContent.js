import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieContent = () => {
  const [data, setData] = useState([]);

  //? componentDidMount
  useEffect(() => {
    getMovies();

    //? componentUnMount
    return () => {
      localStorage.removeItem("movies");
    };
  }, []);

  //? componentDidUpdate
  useEffect(() => {
    console.log("updated data...");

    localStorage.setItem("movies", JSON.stringify(data));
  }, [data]);

  function getMovies() {
    const url = `http://www.omdbapi.com/?apikey=a407a7b3&s=titanic`;

    axios({ method: "GET", url }).then((res) => {
      // const data = res.data.Search;
      const resData = res.data.Search;

      console.log(resData);

      setData(resData);
    });
  }

  function handleRemove(id) {
    console.log("id:", id);
    setData((prevData) => prevData.filter((item) => item.imdbID !== id));
  }

  return (
    <div>
      MovieContent
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {data?.map((item, index) => (
          <div key={"movie:" + item.imdbID}>
            <img width={100} src={item.Poster} />
            <p>{item.Title}</p>
            <button onClick={() => handleRemove(item.imdbID)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieContent;
