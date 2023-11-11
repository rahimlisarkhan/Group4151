import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "a407a7b3",
  },
  headers: {
    Accept: "application/json",
  },
});

export const getMovies = async () => {
  try {
    const res = await instanceAxios.get("/?s=movie");

    return res;
  } catch (err) {
    console.log("err", err);
  }
};

export const getMovieID = async (id) => {
  try {
    const res = await instanceAxios.get(`/?i=${id}`);
    return res;
  } catch (err) {
    console.log("err", err);
  }
};
