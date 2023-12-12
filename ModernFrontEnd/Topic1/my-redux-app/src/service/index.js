import mockMoviesData from "../../mock/movies.json";

import axios from "axios";
import Adapter from "axios-mock-adapter";

const mockAdapter = new Adapter(axios);

mockAdapter.onGet("/movies").reply(200, {
  data: mockMoviesData,
});

export const getWheather = async (city = "Baku") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d32bd17e782e54a0729a829c462c76ac`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const getMovies = async () => {
  // const url = `http://www.omdbapi.com/?apikey=a407a7b3&s=movie&limit=20`;

  // const data = await axios({ method: "GET", url: "/movies" });

  // console.log("data", data);

  // return data;

  // const res = await fetch(url);
  // const data = await res.json();

  // console.log(mockMoviesData);

  return mockMoviesData;
};

export const getProducts = async () => {
  // const url = `http://www.omdbapi.com/products`;

  // const res = await fetch(url);
  // const data = await res.json();

  return mockMoviesData;
};
