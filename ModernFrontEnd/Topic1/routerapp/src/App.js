import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import NotFoundPage from "./pages/404";
import Header from "./components/Header";
import ContactDetail from "./pages/ContactDetail";
import { ROUTER } from "./constant/router";
import Movie from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import MovieDetailS from "./pages/MovieSetting";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.ABOUT} element={<About />} />

        <Route path={ROUTER.CONTACT} element={<Contact />} />
        <Route path={ROUTER.CONTACT_DETAIL} element={<ContactDetail />} />

        <Route path={ROUTER.MOVIES} element={<Movie />} />
        <Route path={ROUTER.MOVIE_DETAIL} element={<MovieDetail />} />
        <Route path={ROUTER.MOVIE_DETAIL_SETTING} element={<MovieDetailS />} />

        {/* <Route path="/contact/:c_id/setting" element={<ContactSetting />} /> */}
        <Route path={ROUTER.SERVICE + "/*"} element={<Service />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
