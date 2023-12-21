import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../ui/Modal";
import { useModal } from "../../hooks/useModal";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isOpen, close, open } = useModal();

  console.log("pathname", pathname);

  const activePath = (p) => pathname === p;

  return (
    <>
      <Modal isOpen={isOpen} onClose={close} header />
      <header className="max-w mx-auto p-12 flex justify-between align-items-center">
        <h1 className="text-base font-bold text-mainWhite  flex items-center">
          WORKOUT
        </h1>

        <nav className="flex gap-20">
          <ul className="flex gap-5 items-center text-mainWhite">
            <li
              className={`text-xs hover:scale-105 cursor-pointer transition-all hover:text-mainRed ${
                activePath("/") && "underline"
              }`}
              onClick={() => navigate("/")}
            >
              WORKOUTS
            </li>
            <li
              className={`text-xs hover:scale-105 cursor-pointer transition-all hover:text-mainRed ${
                activePath("/program") && "underline"
              }`}
              onClick={() => navigate("/program")}
            >
              PROGRAMS
            </li>
            <li className="text-xs hover:scale-105 cursor-pointer transition-all hover:text-mainRed">
              HEALTHY LIVING
            </li>
            <li className="text-xs hover:scale-105 cursor-pointer transition-all hover:text-mainRed">
              ABOUT
            </li>
            <li className="text-xs hover:scale-105 cursor-pointer transition-all hover:text-mainRed">
              STORE
            </li>
          </ul>
          <button
            onClick={open}
            className="p-4 rounded-xl text-center text-xs bg-mainRed font-semibold text-white hover:opacity-50 transition-all"
          >
            + Add your tutor!
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
