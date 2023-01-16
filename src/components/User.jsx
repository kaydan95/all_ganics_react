import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function User({ user: { photoURL, displayName } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthContext();

  return (
    <div className="flex-col text-2xl">
      <div
        className="flex items-center hover:cursor-pointer text-highlight "
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={photoURL}
          alt={displayName}
          referrerPolicy="no-referrer"
          className="w-9 h-9 rounded-full mr-2"
        />
        <span className="hidden md:block">{displayName}</span>
      </div>

      <div
        className={`${
          isOpen ? "h-20" : "h-0 [&_li]:hidden"
        } duration-200 absolute mt-3 w-36 flex-col justify-center flex items-center bg-opacity-40 bg-slate-100 rounded-lg  text-lg [&_li]:mt-2`}
      >
        {user.isAdmin ? (
          <li>
            <Link
              to="/admin"
              className="hover:cursor-pointer hover:text-highlight duration-200"
            >
              Admin
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/mypage"
              className="hover:cursor-pointer hover:text-highlight duration-200"
            >
              MyPage
            </Link>
          </li>
        )}
        <li
          className="hover:cursor-pointer hover:text-highlight duration-200 mb-2"
          onClick={logout}
        >
          Logout
        </li>
      </div>
    </div>
  );
}

export default User;
