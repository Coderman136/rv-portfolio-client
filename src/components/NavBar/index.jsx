import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">

        <div className="list-wrapper">
          <FaBars className="menu"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <FaTimes className="menu"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#fff" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#fff" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#fff" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleClose}
                style={{ color: location.pathname === "/projects" && "#fff" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#fff" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;