import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import User from "./User";

function Header({ onOpen, navState, navKind }) {
  const navigate = useNavigate();
  const { user, login } = useAuthContext();

  const openBrandNav = () => {
    onOpen(!navState, navKind);
  };

  const openProductsNav = () => {
    onOpen(!navState, !navKind);
  };

  const goHome = () => {
    navigate(`/`);
  };

  return (
    <>
      <ul className="fixed w-screen flex items-center justify-around h-20 text-2xl font-bold text-main [&_span]:hover:cursor-pointer bg-transparent">
        <span
          className="hover:opacity-75 hover:text-highlight duration-300"
          onClick={openProductsNav}
        >
          Products
        </span>
        <span
          className="hover:opacity-75 hover:text-highlight duration-300"
          onClick={openBrandNav}
        >
          Brands
        </span>
        <span
          className="text-highlight hover:text-main duration-300"
          onClick={goHome}
        >
          All_Ganics
        </span>
        <span className="hover:opacity-75 hover:text-highlight duration-300">
          Search
        </span>
        {user && !user.isAdmin && (
          <Link
            to="/cart"
            className="hover:opacity-75 hover:text-highlight duration-300"
          >
            Cart
          </Link>
        )}
        {user ? (
          <User user={user} />
        ) : (
          <button
            className="hover:opacity-75 hover:text-highlight duration-300"
            onClick={login}
          >
            Login
          </button>
        )}
      </ul>
    </>
  );
}

export default Header;
