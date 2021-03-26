import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyInfo from "./MyInfo/MyInfo";
import Category from "./Category/Category";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div className="homeAndMyInfoContainer">
            <div className="homeAndMyInfoCenter">
              <div className="goToHome">
                <Link className="homeText" to="/main">
                  <span>HOME</span>
                </Link>
              </div>
              <MyInfo />
            </div>
          </div>
          <div className="logoAndSearchContainer">
            <div className="logoAndSearch">
              <div className="forAlign"></div>
              <img
                className="logo"
                alt="Line Avengers Logo"
                src="/Images/Logo/black.png"
              />
              <div className="searchBox">
                <input className="search" type="text" placeholder="검색" />
                <img
                  className="searchImg"
                  alt="search"
                  src="/Images/Icons/search.png"
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
