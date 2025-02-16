import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../../src/assets/images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.addEventListener("click", handleNav);
    }

    return () => {
      if (menu) {
        menu.removeEventListener("click", handleNav);
      }
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="navlinks">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/events">Events</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/bootcamp">BootCamp</NavLink>
          </li> */}
          <li>
            <NavLink to="/whatwedo">What We Do</NavLink>
          </li>
          <li>
            <NavLink to="/achievements">Achievements</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="buttonDiv">
          <a href="https://forms.gle/ivtedT4wBdnYNv2CA" target="_blank" rel="noreferrer">
            <button className="join-btn">Join Us</button>
          </a>
          <i
            className={nav ? "fa-solid fa-xmark yash" : "fa-solid fa-bars yash"}
            id="menu"
            onClick={handleNav} // ✅ Fixed
          ></i>
        </div>
      </div>
      <div className={nav ? "pure" : "unpure"}>
        <ul className="resnav">
          <li>
            <NavLink to="/" className="links_" onClick={() => setNav(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="links_" onClick={() => setNav(false)}>
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/bootcamp" className="links_" onClick={() => setNav(false)}>
              BootCamp
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/events" className="links_" onClick={() => setNav(false)}>
              Events
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/whatwedo" className="links_" onClick={() => setNav(false)}>
              What We Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" className="links_" onClick={() => setNav(false)}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="links_" onClick={() => setNav(false)}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="links_" onClick={() => setNav(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
