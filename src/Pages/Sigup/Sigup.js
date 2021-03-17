import React, { Component } from "react";
import "./Sigup.scss";
import { AiOutlineLock } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";

class Sigup extends Component {
  render() {
    return (
      <div className="sigup">
        <div className="container">
          <div className="navar_logo">
            <h1>
              <a href="https://www.naver.com/">NAVAR</a>
            </h1>
          </div>
          <form class="join_form" method="post" action="#">
            <div className="userInputBox">
              <div className="userId">
                <p>아이디</p>
                <input class="userInputId" type="text" />
                <span>@naver.com</span>
              </div>
              <div className="userPw">
                <p>비밀번호</p>
                <input class="users_id" type="password" />
                <AiOutlineLock className="openLock" />
              </div>
              <div className="checkPw">
                <p>비밀번호 재확인</p>
                <input class="users_id" type="password" />
                <IoBagCheckOutline className="checkLock" />
              </div>
              <div className="userName">
                <p>이름</p>
                <input class="users_id" type="text" />
              </div>

              <div className="phoneBox">
                <p>휴대전화</p>
                <input className="phoneInput" type="tel" />
                <button className="phoneBtn" type="button">
                  <span>인증번호 받기</span>
                </button>
              </div>

              <div className="joinBox">
                <button type="button" className="joinBtn">
                  가입하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Sigup;
