import React, { Component } from "react";
import "./Login.scss";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      login_id: "",
      password: "",
      idCheck: false,
    };
  }

  handleLoginInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === "login_id" && value !== "") {
        this.setState({
          idCheck: regEx.test(value),
        });
      }
    });
  };

  render() {
    const { login_id, password, idCheck } = this.state;
    return (
      <form className="login" onSubmit={this.onSubmit}>
        <div className="loginContainer">
          <div className="navar_logo">
            <h1>
              <a href="https://www.naver.com/">NAVAR</a>
            </h1>
          </div>
          <div className="userBox">
            <div className="IdBox">
              <input
                className="idInput"
                type="text"
                placeholder="아이디"
                name="login_id"
                value={login_id}
                onChange={this.handleLoginInfo}
              />
              {login_id && idCheck ? "정답" : login_id.length > 0 ? "땡" : ""}
            </div>
            <div className="pwBox">
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                onKeyPress={this.Validation}
                onChange={this.handleLoginInfo}
                // {password.length >= 5 ? "땡" : "ㄴㄴ"}
              />
            </div>
            <div className="loginBox">
              <button
                type="submit"
                className="loginBtn"
                onClick={this.handleBtn}
              >
                로그인
              </button>
            </div>
            <div className="checkBox">
              <input type="checkBox" />
              로그인 상태 유지
              <span>유지IP 보안</span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
var regEx = /^[a-zA-Z0-9]*$/;

export default Login;
