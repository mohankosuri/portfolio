import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#fdf6f0] p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-3xl font-bold"><NavLink to={'/'}>Mohan Kosuri</NavLink></h1>
        <ul className="flex space-x-6">
          <li className=" hover:text-orange-500 transition duration-300">
             <NavLink to={'/About'}>About</NavLink>
          </li>
          <li className=" hover:text-orange-500 transition duration-300">
          <NavLink to={'/Projects'}>Projects</NavLink>
          </li>
          <li className=" hover:text-orange-500 transition duration-300">
          <NavLink to={'/Contact'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
