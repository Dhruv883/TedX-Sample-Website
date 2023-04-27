import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Menu = [
    { title: "Home", to: "" },
    { title: "About", to: "about" },
    { title: "Events", to: "events" },
    { title: "Blogs", to: "blogs" },
  ];

  return (
    <div className="pr-24 m-0 flex items-center justify-between shadow-shadow">
      <div>
        <img src="../images/TEDX.svg" alt="" className="w-32" />
      </div>
      <div className="hidden md:flex items-center gap-12 text-xl font-medium ">
        {Menu.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.to}
            className={({ isActive }) => (isActive ? "text-red" : "text-black")}
          >
            <span className="cursor-pointer hover:text-red">{menu.title}</span>
          </NavLink>
        ))}
      </div>
      <div className="md:hidden absolute right-3">
        <button onClick={toggleMenu}>
          <img src="../public/images/Hamburger.svg" alt="" srcset="" />
        </button>
      </div>
      {showMenu && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white text-2xl">
          <div className="md:hidden absolute right-3">
            <button onClick={toggleMenu}>
              <img src="../public/images/Hamburger.svg" alt="" srcset="" />
            </button>
          </div>
          <div className="flex flex-col items-center pt-12 gap-5">
            <span className="cursor-pointer hover:text-red">Home</span>
            <span className="cursor-pointer hover:text-red">About Us</span>
            <span className="cursor-pointer hover:text-red">Events</span>
            <span className="cursor-pointer hover:text-red">Blogs</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
