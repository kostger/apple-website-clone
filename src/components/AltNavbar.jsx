import React, { useContext } from "react";
import { altNavLists } from "../constants";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function AltNavbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const handleScrollToConfigure = (e) => {
    e.preventDefault();

    const configureSection = document.getElementById("configure");
    if (configureSection) {
      configureSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToOverview = (e) => {
    e.preventDefault();

    const configureSection = document.getElementById("overview");
    if (configureSection) {
      configureSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToSpecs = (e) => {
    e.preventDefault();

    const configureSection = document.getElementById("specs");
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

        <div className="flex items-center gap-2 ">
          <a
            href="#overview"
            className="px-5 max-sm:hidden text-sm cursor-pointer text-gray hover:text-white transition-all"
            onClick={handleScrollToOverview}
          >
            Overview
          </a>
          <a
            href="#specs"
            className="px-5 max-sm:hidden text-sm cursor-pointer text-gray hover:text-white transition-all"
            onClick={handleScrollToSpecs}
          >
            Tech Specs
          </a>
          {isLoggedIn && (
            <Link to={"/cart"} className="btn">
              Buy
            </Link>
          )}

          {!isLoggedIn && (
            <Link to={"/login"} className="btn">
              Log In
            </Link>
          )}

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
