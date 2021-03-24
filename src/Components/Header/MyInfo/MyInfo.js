import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import "./MyInfo.scss";

export class Myinfo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userList: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch("Data/UserInfo.json", {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ userList: data.userList });
  //     });
  // }

  handlelogOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/main");
  };

  render() {
    // const { userList } = this.state;
    // console.log("this.state.userList >>>", this.state.userList);
    return (
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
                <p className="logOutBoxCurrentUser">
                  {localStorage.userName}님
                </p>
                <p className="logOutBoxEmail">{localStorage.userEmail}</p>
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
