import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import Category from "./Category/Category";

export class Header extends Component {
  componentDidMount() {
    // localStorage.setItem("token", "aaaa");
  }

  componentDidUpdate() {
    // localStorage.setItem("me", "pika");
  }

  render() {
    console.log("localStorage >>", localStorage);
    console.log("localStorage.setItem >>>", localStorage.setItem);

    return (
      <header className="header">
        <nav>
          <div className="homeAndMyInfoContainer">
            <div className="homeAndMyInfo">
              <div className="goToHome">
                <Link className="homeText" to="/main">
                  <span>HOME</span>
                </Link>
              </div>
              <div className="myInfo">
                {localStorage.token ? (
                  <div className="iHaveToken">
                    <Link className="iHaveTokenText" to="/favoriteStore">
                      <span>찜한 스토어</span>
                    </Link>
                    <Link className="iHaveTokenText" to="/myPage">
                      <span>마이페이지</span>
                    </Link>
                    <Link className="iHaveTokenText" to="/shoppingBasket">
                      <span>장바구니</span>
                    </Link>
                    <div className="iHaveTokenText currentUser">
                      <span>PIKA</span>
                      <div className="logOutBox">
                        <p>PIKA님</p>
                        <p>pikatropika@gmail.com</p>
                        <button className="logOutBtn">로그아웃</button>
                      </div>
                    </div>
                    <FontAwesomeIcon
                      className="MyInfoIcon"
                      icon={faTh}
                      size="1x"
                    />
                  </div>
                ) : (
                  <div className="noToken">
                    <Link to="/login">
                      <button className="logInBtn">로그인</button>
                    </Link>
                    <FontAwesomeIcon
                      className="MyInfoIcon"
                      icon={faTh}
                      size="1x"
                    />
                  </div>
                )}
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
