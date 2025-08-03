import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "btn btn-ghost text-xl text-yellow-400 font-bold"
      : "btn btn-ghost text-xl";

  const mobileLinkStyle = ({ isActive }) =>
    isActive ? "text-yellow-400 font-bold" : "";

  return (
    <div className="navbar bg-gray-950 text-white shadow-md fixed w-full top-0 z-50">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-sm sm:text-base md:text-xl">
          VIKRAM KR CHAURASIYA
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/skill" className={linkStyle}>Skills</NavLink>
        <NavLink to="/project" className={linkStyle}>Project</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        <NavLink to="/hireme" className={linkStyle}>Hire Me</NavLink>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
          <li><NavLink to="/" className={mobileLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={mobileLinkStyle}>About</NavLink></li>
          <li><NavLink to="/skill" className={mobileLinkStyle}>Skills</NavLink></li>
          <li><NavLink to="/project" className={mobileLinkStyle}>Project</NavLink></li>
          <li><NavLink to="/contact" className={mobileLinkStyle}>Contact</NavLink></li>
          <li><NavLink to="/hireme" className={mobileLinkStyle}>Hire Me</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
