import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";

export const Navlinks = [
  { id: 1, name: "SERVICES", link: "/#services" },
  { id: 2, name: "ABOUT", link: "/#about" },
  { id: 3, name: "JOIN", link: "/#join" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 sm:w-48"
            style={{ paddingTop: "10px" }}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <ul className="flex items-center gap-8">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-4">
                <a
                  href={link}
                  className="inline-block text-lg font-semibold hover:text-primary duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
            <DarkMode />
          </ul>
        </nav>

        {/* Contact info and Mobile View */}
        <div className="flex items-center gap-4">
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +1 212-453-4345
          </div>
          <div className="md:hidden py-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
