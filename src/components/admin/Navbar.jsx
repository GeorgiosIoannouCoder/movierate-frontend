import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks";

export default function Navbar() {
  const { handleLogout } = useAuth();
  return (
    <nav className="w-48 min-h-screen dark:bg-secondary bg-white border-r border-highlight">
      <div className="flex flex-col justify-between pl-5 h-screen sticky top-0 dark:text-custom-gray text-primary font-mono">
        <ul>
          <li className="mb-8">
            <Link to="/">
              <img src="./logo.png" alt="logo" className="h-14 p-2" />
            </Link>
          </li>
          <li>
            <NavItem to="/">
              <AiOutlineHome className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
              <span className="dark:text-custom-gray text-primary font-mono">
                Home
              </span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/movies">
              <BiCameraMovie className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
              <span className="dark:text-custom-gray text-primary font-mono">
                Movies
              </span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/actors">
              <FaTheaterMasks className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
              <span className="dark:text-custom-gray text-primary font-mono">
                Actors
              </span>
            </NavItem>
            <NavItem to="/users">
              <AiOutlineUser className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
              <span className="dark:text-custom-gray text-primary font-mono">
                Users
              </span>
            </NavItem>
          </li>
        </ul>
        <div className="flex flex-col items-start pb-5">
          <span className="font-semibold font-mono dark:text-custom-gray text-primary text-xl">
            Admin
          </span>
          <button
            onClick={handleLogout}
            className="font-mono flex items-center dark:text-custom-gray text-primary text-sm hover:text-red-600 dark:hover:text-red-600 transition space-x-1"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

const NavItem = ({ children, to }) => {
  const commonClasses =
    " flex items-center text-lg space-x-2 p-2 hover:opacity-80";
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? "text-custom-gray" : "text-gray-400") + commonClasses
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
