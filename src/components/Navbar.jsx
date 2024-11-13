import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width">
        <Link to={"/"}>
          <img src={appleImg} alt="apple" width={14} height={18} />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden ">
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all ">
            Store
          </Link>
          <Link
            to={"/ipad"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all "
          >
            iPad
          </Link>
          <Link
            to={"/"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all "
          >
            iPhone
          </Link>
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all ">
            Support
          </Link>
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" w={18} h={18} />
          <Link to={"/cart"}>
            <img src={bagImg} alt="search" w={18} h={18} />
          </Link>
          <div className=" flex justify-end mr-4">
            {isLoggedIn && (
              <button
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                onClick={logOutUser}
              >
                Log Out
              </button>
            )}
            {!isLoggedIn &&
              location.pathname !== "/login" &&
              location.pathname !== "/signup" && (
                <Link to="/login">
                  <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                    Log In
                  </div>
                </Link>
              )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
