import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks";

export default function Navbar() {
  const { handleLogout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-white dark:bg-secondary w-full p-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
          {menuOpen ? (
            <AiOutlineClose className="dark:text-custom-gray text-primary" />
          ) : (
            <AiOutlineMenu className="dark:text-custom-gray text-primary" />
          )}
        </button>
      </div>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex w-full md:w-48 md:min-h-screen md:border-r border-highlight md:static dark:bg-secondary bg-white flex-col justify-between pl-5 h-screen sticky top-0 dark:text-custom-gray text-primary font-mono`}
      >
        <ul className="flex flex-col space-y-4 md:space-y-0 md:space-x-8">
          <li className="mb-8">
            <Link to="/">
              <img src="./logo.png" alt="logo" className="h-14 p-2" />
            </Link>
          </li>
          <NavItem to="/">
            <AiOutlineHome className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
            <span className="dark:text-custom-gray text-primary font-mono">
              Home
            </span>
          </NavItem>

          <NavItem to="/movies">
            <BiCameraMovie className="dark:text-custom-gray text-primary font-mono hover:text-red-600" />
            <span className="dark:text-custom-gray text-primary font-mono">
              Movies
            </span>
          </NavItem>

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

          <div className="pl-3">
            <button
              onClick={handleLogout}
              className="font-mono flex items-center dark:text-custom-gray text-primary text-lg hover:text-red-600 dark:hover:text-red-600 transition space-x-1"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </ul>
      </nav>
    </>
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
