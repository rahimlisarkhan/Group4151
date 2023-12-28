import React from "react";
import Avatar from "../../../ui/Avatar";

const Header = () => {
  return (
    <header className="p-5 bg-green-900 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <h1 className="text-xl  font-bold">Medium blogs</h1>

        <div>
          <Avatar
            name="RA"
            color="yellow"
            onAvatarPress={() => {
              console.log("avatar..");
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
