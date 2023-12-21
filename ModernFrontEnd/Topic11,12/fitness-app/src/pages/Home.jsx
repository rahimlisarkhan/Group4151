import React from "react";
import heroImg from "../assets/Images 2.png";
import Header from "../shared/components/Header";

function Home() {
  return (
    <>
      <Header />
      {/* hero */}
      <div className="flex px-20 mt-44 relative">
        <div className=" ">
          <div className="text-10xl leading-tight text-mainWhite font-extrabold uppercase w-3/4">
            workout with me
          </div>

          <p className="text-base text-mainWhite opacity-45 w-1/2 my-10">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>

          <button className="p-6 rounded-xl text-center text-lg bg-mainRed font-semibold text-white hover:opacity-50 transition-all">
            Join Club Now!
          </button>
        </div>
        <div className=" absolute top-20 right-20">
          <img className="w-[500px] object-cover" src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default Home;
