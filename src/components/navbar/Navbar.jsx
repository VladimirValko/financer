import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const handleNav = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <div className="navbarWrapper">
      <Link to="/">
        <h1 className="logo">Financer</h1>
      </Link>
      <div className="themeToggle">
        <ThemeToggle />
      </div>
      <div className="loginBlock">
        <Link to="/" className="signin">
          Sign In
        </Link>
        <Link to="/" className="signup">
          Sign Up
        </Link>
      </div>
      {/* Menu icon */}
      <div onClick={handleNav} className="munuIcon">
        {displayNav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div className={displayNav ? "navShown" : "navHidden"}>
        <ul className="mobileMenu">
          <li className="mobileMenuItem">
            <Link to="/">Home</Link>
          </li>
          <li className="mobileMenuItem">
            <Link to="/">Account</Link>
          </li>
          <li style={{ padding: "1.5rem 0" }}>
            <ThemeToggle />
          </li>
        </ul>
        <div className="mobileLoginWrapper">
          <Link to="/">
            <button className="signInBtn">Sign In</button>
          </Link>
          <Link to="/">
            <button className="signUpBtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
