import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { activeLink } from "../../utils/activeLink";

const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div>
      Header
      <button onClick={() => navigate(-1)}>Goback</button>
      <button onClick={() => navigate(1)}>Forward</button>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li> */}
        <li
          // className={activeLink(ROUTER.HOME, pathname) ? "active" : ""}
          className={ROUTER.HOME == pathname ? "active" : ""}
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
          {/* <Link to="/">Home</Link> */}
        </li>
        <li
          className={activeLink(ROUTER.ABOUT, pathname) ? "active" : ""}
          onClick={() => navigate(ROUTER.ABOUT)}
        >
          About
          {/* <Link to="/about">About</Link> */}
        </li>
        <li
          className={activeLink(ROUTER.MOVIES, pathname) ? "active" : ""}
          onClick={() => navigate(ROUTER.MOVIES)}
        >
          Movies
          {/* <Link to="/about">About</Link> */}
        </li>
        <li
          className={activeLink(ROUTER.CONTACT, pathname) ? "active" : ""}
          onClick={() => navigate(ROUTER.CONTACT)}
        >
          Contact
          {/* <Link to="/contact">Contact</Link> */}
        </li>
        <li
          className={activeLink(ROUTER.SERVICE, pathname) ? "active" : ""}
          onClick={() => navigate(ROUTER.SERVICE)}
        >
          Service
          {/* <Link to="/service">Service</Link> */}
        </li>
      </ul>
      {/* <a href="dsada" target="_black"> facebook</a> */}
    </div>
  );
};

export default Header;
