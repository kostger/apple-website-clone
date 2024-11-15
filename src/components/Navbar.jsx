import React, { useState, useContext } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex flex-col justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Link to={"/"}>
          <img src={appleImg} alt="apple" width={14} height={18} />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden">
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
            Store
          </Link>
          <Link
            to={"/ipad"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            iPad
          </Link>
          <Link
            to={"/"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            iPhone
          </Link>
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
            Support
          </Link>
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <Link to={"/cart"}>
            <img src={bagImg} alt="cart" width={18} height={18} />
          </Link>
          <div className="flex justify-end mr-4 max-sm:hidden">
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

        <button
          className="sm:hidden px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center mt-5">
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
            Store
          </Link>
          <Link
            to={"/ipad"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            iPad
          </Link>
          <Link
            to={"/"}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            iPhone
          </Link>
          <Link className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
            Support
          </Link>
          {isLoggedIn && (
            <button
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all mt-2"
              onClick={logOutUser}
            >
              Log Out
            </button>
          )}
          <hr className="w-full border-gray mt-5" />
        </div>
      )}
    </header>
  );
}

export default Navbar;
