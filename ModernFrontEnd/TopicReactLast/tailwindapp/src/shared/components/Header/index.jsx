import React from "react";
import Button from "../../ui/Button";
import Layout from "../Layout";

// const imgLogo =
//   "https://w7.pngwing.com/pngs/293/19/png-transparent-logo-brand-white-font-design-white-text-logo.png";

function Header() {
  return (
    <div className=" bg-slate-900 text-white">
      <Layout>
        <div className="flex align-items-center justify-between">
          <div className="text-3xl">Movie logo</div>
          <Navbar />
          <Button />
        </div>
      </Layout>
    </div>
  );
}

function Navbar() {
  return (
    <nav className=" py-2 flex align-items-center  ">
      <ul className="flex align-items-center gap-4 ">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Favorite</li>
        <li className="cursor-pointer hover:underline">Blog</li>
      </ul>
    </nav>
  );
}

export default Header;
