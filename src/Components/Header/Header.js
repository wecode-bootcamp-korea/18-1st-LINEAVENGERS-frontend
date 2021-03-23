import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import Category from "./Category/Category";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div className="homeAndMyInfoContainer">
            <div className="homeAndMyInfo">
              <div className="goToHome">
                <Link to="/main">
                  <span className="homeText">HOME</span>
                </Link>
              </div>
              <div className="myInfo">
                <Link to="/login">
                  <button className="logInBtn">로그인</button>
                </Link>
                <FontAwesomeIcon className="menuIcon" icon={faTh} size="1x" />
              </div>
            </div>
          </div>
          <div className="logoAndSearchContainer">
            <div className="logoAndSearch">
              <div className="forAlign"></div>
              <img
                className="logo"
                alt="Line Avengers Logo"
                src="../Images/Logo/black.png"
              />
              <div className="searchBox">
                <input className="search" type="text" placeholder="검색" />
                <img
                  className="searchImg"
                  alt="search"
                  src="../Images/Icons/search.png"
                />
              </div>
            </div>
          </div>
          <Category />
        </nav>
      </header>
    );
  }
}

export default Header;
