import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  decrement,
  increment,
  getPrognos,
  getMoviesAction,
} from "./store/user/userSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ResponsiveAppBar from "./shared/components/AppHeader";
import MultiActionAreaCard from "./shared/components/ProductCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";

export function Home() {
  const state = useSelector((umumiState) => umumiState.userReducer);
  const infoWheather = useSelector((umumiState) => umumiState.userReducer.info);

  const dispatch = useDispatch();

  console.log("state", state);

  const movies = state.movies.Search;

  const handleChangeCount = () => {
    // const obj = increment()
    // const obj = decrement()
    // const obj = changeValue(20);

    // console.log(obj);

    dispatch(changeValue(20));
  };

  const handleIncCount = () => {
    dispatch(increment());
  };
  const handleDecCount = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    const disObj = getMoviesAction();

    console.log(disObj);

    dispatch(disObj);
  }, []);

  // useEffect(() => {
  //   dispatch(getPrognos());
  // }, []);

  const handleSearchWheather = (t) => {
    dispatch(getPrognos(t));
  };

  return (
    <>
      <ResponsiveAppBar />

      <Container sx={{ my: 2 }}>
        <Grid2 container spacing={4}>
          {movies?.map((movie) => (
            <Grid2 xs={6} md={4} lg={3} key={movie.imdbID}>
              <MultiActionAreaCard {...movie} />
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <div>
        <input onChange={(e) => handleSearchWheather(e.target.value)} />
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={"https://cdn.worldvectorlogo.com/logos/redux.svg"}
            className="logo react"
            alt="Redux logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home</h1>
      <h1>Redux + React</h1>
      <h1>Count: {state.count}</h1>
      <h1>Status: {state.status}</h1>
      <button onClick={handleChangeCount}>Change</button>
      <button onClick={handleIncCount}>Plus</button>
      <button onClick={handleDecCount}>Minus</button> */}
    </>
  );
}
