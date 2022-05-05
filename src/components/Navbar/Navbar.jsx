import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.2"
            width="160"
            alt="logo"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links active" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blockchain <i className="fa fa-angle-down fa-xs" aria-hidden="true"></i>
            </a>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Tokens <i className="fa fa-angle-down fa-xs" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resources <i className="fa fa-angle-down fa-xs" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              More <i className="fa fa-angle-down fa-xs" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <Button />
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-links btn-fa fa-xs"
              onClick={closeMobileMenu}
            >
              <img
                className="ether-logo"
                src="https://etherscan.io/images/ethereum-icon.png"
                width="19"
                height="19"
                alt="logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
