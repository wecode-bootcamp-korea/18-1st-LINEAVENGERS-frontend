import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import "./MyInfo.scss";

export class Myinfo extends Component {
  handlelogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="myInfo">
        {localStorage.access_token ? (
          <div className="iHaveToken">
            <Link className="iHaveTokenText" to="/MyPageHeart">
              <span>찜한 스토어</span>
            </Link>
            <Link className="iHaveTokenText" to="/myPage">
              <span>마이페이지</span>
            </Link>
            <Link className="iHaveTokenText" to="/shoppingBasket">
              <span>장바구니</span>
            </Link>
            <div className="iHaveTokenText currentUser">
              <span>{localStorage.getItem("name")}님</span>
              <div className="logOutBox">
                <p className="logOutBoxCurrentUser">{localStorage.name}님</p>
                <p className="logOutBoxEmail">{localStorage.email}</p>
                <button className="logOutBtn" onClick={this.handlelogOut}>
                  로그아웃
                </button>
              </div>
            </div>
            <FontAwesomeIcon className="MyInfoIcon" icon={faTh} size="1x" />
          </div>
        ) : (
          <div className="noToken">
            <Link to="/login">
              <button className="logInBtn">로그인</button>
            </Link>
            <FontAwesomeIcon className="MyInfoIcon" icon={faTh} size="1x" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Myinfo);
