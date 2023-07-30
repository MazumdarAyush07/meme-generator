import React from "react";
import { ReactDOM } from "react";
import trollFace from "../../public/assets/TrollFace.png";

function Header() {
  return (
    <nav className="bg-slate-900 m-0 flex justify-between bg-gradient-to-r from-purple-800 to-purple-600 text-white">
      <div className="flex p-4 items-center">
        <img src={trollFace} alt="" className="h-8 w-10" />
        <h2 className="p-4">Meme Generator</h2>
      </div>
      <div className="p-8">
        <h2 className="font-sans">React - Project 3</h2>
      </div>
    </nav>
  );
}

export default Header;
