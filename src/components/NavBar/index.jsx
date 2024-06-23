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
            {/* <li>
              <img src={`${process.env.PUBLIC_URL}/logo.jpg`}
              alt="loading" 
              style={{
                // width: '100px', // adjust width
                // height: 'auto', // maintain aspect ratio
                // borderRadius: '10px', // add rounded corners
                // boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // add shadow
                // marginBottom: '10px' // space below image
              }}
              />
            </li> */}
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#450003" }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#450003" }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#450003" }}
              >
                SKILL
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleClose}
                style={{ color: location.pathname === "/projects" && "#450003" }}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#450003" }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;