import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const linkStyle = "btn btn-ghost text-xl cursor-pointer";
  const mobileLinkStyle = "cursor-pointer";

  return (
    <div className="navbar bg-gray-950 text-white shadow-md fixed w-full top-0 z-50">
      <div className="flex-1">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="btn btn-ghost text-sm sm:text-base md:text-xl cursor-pointer"
        >
          VIKRAM KR CHAURASIYA
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <Link to="home" smooth={true} duration={500} className={linkStyle}>Home</Link>
        <Link to="about" smooth={true} duration={500} className={linkStyle}>About</Link>
        <Link to="skills" smooth={true} duration={500} className={linkStyle}>Skills</Link>
        <Link to="project" smooth={true} duration={500} className={linkStyle}>Project</Link>
        <Link to="contact" smooth={true} duration={500} className={linkStyle}>Contact</Link>
        <Link to="hireme" smooth={true} duration={500} className={linkStyle}>Hire Me</Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
        >
          <li><Link to="home" smooth={true} duration={500} className={mobileLinkStyle}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className={mobileLinkStyle}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className={mobileLinkStyle}>Skills</Link></li>
          <li><Link to="project" smooth={true} duration={500} className={mobileLinkStyle}>Project</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className={mobileLinkStyle}>Contact</Link></li>
          <li><Link to="hireme" smooth={true} duration={500} className={mobileLinkStyle}>Hire Me</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
