import React from "react";
import Header from "../shared/components/Header";

function Program() {
  return (
    <>
      <Header />

      <div className="px-10 flex gap-5 flex-wrap">
        <div className="border border-mainWhite rounded-lg  w-80 overflow-hidden  transition-all relative hover:scale-95 hover:shadow shadow-mainWhite cursor-pointer">
          <img
            className="w-full h-80 object-cover"
            src="https://s3.tutoroo.co/TUTOROO-connects-you-with-Louca,-English-tutor-in-Vilnius-5f941590d1ab3.jpg"
          />
          <div className="p-4 flex flex-col gap-2">
            <p className="text-3xl font-semibold text-white">John Doe</p>
            <p className="text-xl font-semibold text-white">8 years</p>
            <p className="text-lg font-semibold text-white">50$/monthly</p>
          </div>

          <div className="bg-mainRed px-6 py-1 text-sm text-mainWhite absolute rounded-lg top-2 right-2">
            Popular
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
