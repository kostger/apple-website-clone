import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { altNavLists } from "../constants";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function AltNavbar() {
  const handleScrollToConfigure = (e) => {
    e.preventDefault();
    const configureSection = document.getElementById("configure");
    if (configureSection) {
      configureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full sm:px-10 px-5 flex justify-between items-center border-b bg-zinc">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <Link to={"/"}>
          <div className="text-xl font-bold">iPhone 15 Pro</div>
        </Link>

        <div className="flex items-center gap-4 ">
          {altNavLists.map((nav, index) => (
            <div
              key={index}
              className="px-5 max-sm:hidden text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
          <Link to={"/cart"} className="btn">
            Buy
          </Link>
          <a
            href="#configure"
            className="btn"
            onClick={handleScrollToConfigure}
          >
            Configure
          </a>
        </div>
      </nav>
    </header>
  );
}

export default AltNavbar;
