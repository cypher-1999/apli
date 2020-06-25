import React from "react";
import logo from "../../images/download.png";
import "../../App.css";
const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-dark">
      <a className="navbar-brand ml-auto" href="/">
        <img className="logo rounded-circle mr-2" src={logo} alt="logo" />
        comp.exe
      </a>
    </nav>
  );
};
export default HeaderComponent;
