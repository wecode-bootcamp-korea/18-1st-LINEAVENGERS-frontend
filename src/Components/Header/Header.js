import React, { Component } from "react";
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
                <span>NAVER</span>
              </div>
              <div className="myInfo">
                <span>찜한 스토어</span>
                <span>마이페이지</span>
                <span>장바구니</span>
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
