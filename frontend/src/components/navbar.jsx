import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./css/navbar.css";
import logo from "../assets/digiseikkailu.webp";
import user from "../assets/user.svg";
import SearchBar from "./elements/searchBar";
import openMenu from "../../src/assets/menu.svg";
import closeMenu from "../../src/assets/close-menu.svg";
import bucket from "../../src/assets/bucket.svg";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const navbarItems = [
    {
      title: "Tietoa opettajalle",
      path: "/tietoa-opettajalle",
      cName: "nav-text",
    },
    {
      title: "Seikkailukartat",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "Empatiapolku",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "Tuotteet",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "Tietoa meistä",
      path: "/tietoa-meista",
      cName: "nav-text",
    },
    {
      title: "English (UK)",
      cName: "nav-text",
    },
  ];

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar">
        <div className="Navbar-logo">
          <Link to="/">
            <img src={logo} width="150px" height="150px" alt="logo" />
          </Link>
        </div>
        <div className="Navbar-links">
          {navbarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="Icons">
          <div className="Basket">
            <Link to="/">
              <img src={bucket} width="40px" height="40px" alt="" />
            </Link>
          </div>
          <div className="UserIcon">
            <Link to="/Kirjaudu">
              <img src={user} width="40px" height="40px" alt="" />
            </Link>
          </div>
          <div className="Hamburger-menu">
            <button onClick={showSidebar}>
              {sidebar ? (
                <img src={closeMenu} height="40px" width="40px" alt="" />
              ) : (
                <img src={openMenu} height="40px" width="40px" alt="" />
              )}
            </button>
          </div>
        </div>
        <div className="Search">
          <SearchBar />
        </div>
      </div>
      <div className={`nav-menu-content ${sidebar ? "active" : ""}`}>
        {/* This will show the menu when sidebar is true */}
        {navbarItems.map((item, index) => (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
