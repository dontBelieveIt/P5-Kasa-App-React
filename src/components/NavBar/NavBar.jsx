import "./NavBar.scss";
import logo from "../../assets/logo/LOGO.svg";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const path = useLocation(); 
  
  // function set to underlined element if on its page
  const [underlined, setUnderlined] = useState(""); 
  // function to underline, in the NavBar, the page on which we are : wheter Home or APropos
  useEffect(() => {
    if (path.pathname === "/") {
        setUnderlined("home")
    } else if (path.pathname === "/about") {
        setUnderlined("about")
    } else {
        setUnderlined("")
    }
  }, [path])

  return (
    <div className="nav-bar">
      <div className="kasa-logo">
        <NavLink to={`/`}>
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <div className="nav-btn">
        <button>
          <NavLink to={`/`} className={underlined === "home" ? "underlined" : null}>Accueil</NavLink>
        </button>
        <button>
          <NavLink to={`/about`} className={underlined === "about" ? "underlined" : null}>A propos</NavLink>
        </button>
      </div>
    </div>
  );
}
