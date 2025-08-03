import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-950 text-white shadow-md fixed w-full top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-sm sm:text-base md:text-xl">
          VIKRAM KR CHAURASIYA
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <Link to="/" className="btn btn-ghost text-xl">Home</Link>
        <Link to="/about" className="btn btn-ghost text-xl">About</Link>
        <Link to="/skill" className="btn btn-ghost text-xl">Skills</Link>
        <Link to="/project" className="btn btn-ghost text-xl">Project</Link>
        <Link to="/contact" className="btn btn-ghost text-xl">Contact</Link>
        <Link to="/hireme" className="btn btn-ghost text-xl">Hire Me</Link>
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
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skill">Skills</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hireme">Hire Me</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
