import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="header" id="blogHeader">
      <NavLink to="/">
        <FontAwesomeIcon icon={faBlog} />
      </NavLink>

      <div className="dropdown">
        <button className="dropbtn">Item 1</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Item 2</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Item 3</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Item 4</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Item 5</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Item 6</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a className="icon" onClick={clickMenuItem}>
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>
  );
}

function clickMenuItem() {
  var x = document.getElementById("blogHeader");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

export default Header;
