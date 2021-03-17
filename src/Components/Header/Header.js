import React, { Component } from "react";
import "./Header.scss";

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
                src="../Images/Logo/white.png"
              />
              <div className="searchBox">
                <input className="search" type="text" placeholder="검색" />
                <img
                  className="searchImg"
                  alt="searxh"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                />
              </div>
            </div>
          </div>
          <div className="category">
            <span>캐릭터</span>
            <span>NEW</span>
            <span>THEME</span>
            <span>BT21 BABY</span>
            <span>SALE</span>
            <span>토이</span>
            <span>디자인문구</span>
            <span>패션의류</span>
            <span>패션잡화</span>
            <span>리빙</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
