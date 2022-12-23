import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav>
        <div className="side-title">intifazza</div>
        <div className={isNavExpanded ? "nav-link expanded" : "nav-link"}>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/Service">
                Service
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="toggle-button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
