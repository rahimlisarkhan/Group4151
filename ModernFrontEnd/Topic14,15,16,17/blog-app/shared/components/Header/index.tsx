import React from "react";
import Avatar from "../../../ui/Avatar";
import { useRouter } from "next/router";

const Header = () => {
  const { push } = useRouter();

  return (
    <header className="p-5 bg-green-900 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <h1 className="text-xl  font-bold">Medium blogs</h1>

        <div className="flex gap-3 items-center">
          <Avatar
            name="RA"
            color="yellow"
            onAvatarPress={() => {
              console.log("avatar..");
            }}
          />
          <button
            className="px-4 py-2 bg-white text-green-600 rounded-lg"
            onClick={() => push("/create")}
          >
            + Create
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
