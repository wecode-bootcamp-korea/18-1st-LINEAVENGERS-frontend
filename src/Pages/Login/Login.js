import React, { Component } from "react";
import "./Login.scss";
import { AiFillCheckCircle } from "react-icons/ai";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      password: "",
      idCheck: false, //아이디 공백체크
      pwCheck: false, //공백체크
      pwVaild: false, //비번 조건체크
      valueCheck: false, //아이디 정규식 조건체크
      iconsCheck: false,
    };
  }

  handleLoginInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  mainVaild = e => {
    const { password, loginId, idCheck, valueCheck, pwCheck } = this.state;
    const IS_ID_NUM_ENG = /^[a-z]+[a-z0-9]{5,19}$/g; //정규식 상수는 대문자 / 알 수 있는 네이밍으로
    if (e.target.className === "idInput") {
      //아이디가 idInput 클래스네임일 경우만 찾을 때
      if (loginId === "") {
        //공백 조건 1
        this.setState({ idCheck: true });
        return;
      }
      if (IS_ID_NUM_ENG.test(loginId))
        this.setState({ idCheck: false, valueCheck: false });
      else this.setState({ idCheck: false, valueCheck: true }); //정규표현 조건 2
    }

    if (e.target.className === "pwInput") {
      if (password === "") {
        this.setState({ pwCheck: true });
        return;
      }
      if (password.length >= 8) {
        this.setState({ pwCheck: false, pwVaild: false }); //pwCheck 공백조건 //pwVaild 비밀번호 조건
      } else {
        this.setState({ pwCheck: false, pwVaild: true });
      }
    }

    if (
      (e.charCode === 13 || e.type === "click") &&
      !idCheck &&
      !valueCheck &&
      !pwCheck
    ) {
      fetch("http://10.58.1.71:8000/account/signin", {
        method: "POST",
        body: JSON.stringify({
          login_id: this.state.loginId,
          password: this.state.password,
        }),
      })
        .then(res => {
          return res.json();
        })
        .then(result => {
          if (result.message === "SUCCESS") {
            alert("로그인 성공");
            return;
          } else if (result.message === "INVALID_USER") {
            alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
          } else if (result.message === "NONE_CERTIFICATION") {
            alert("이메일을 인증하세요");
          }
        });
    }
  };
  //
  render() {
    const { idCheck, pwCheck, valueCheck, pwVaild } = this.state;
    return (
      <div className="login">
        <div className="loginContainer">
          <div className="navarLogo">
            <h1>
              <img src="../Images/Logo/green.png" alt="사진" />
            </h1>
          </div>
          <div className="userBox">
            <div className="IdBox">
              <input
                className="idInput"
                type="text"
                placeholder="아이디"
                name="loginId"
                onChange={this.handleLoginInfo}
                onKeyUp={this.mainVaild}
              />
            </div>
            <span className="userAvail">
              {idCheck
                ? ""
                : valueCheck
                ? "아이디는 8~16자 영문 대 소문자, 숫자를 사용하세요."
                : ""}
            </span>
            <div className="pwBox">
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                name="password"
                onChange={this.handleLoginInfo}
                onKeyUp={this.mainVaild}
              />
            </div>
            <span className="pwAvail">
              {pwCheck ? "" : pwVaild ? "비밀번호는 8글자 이상 입니다." : ""}
            </span>
            <div className="loginBox">
              <button className="loginBtn" onClick={this.mainVaild}>
                로그인
              </button>
            </div>
            <div className="labelBox">
              <input type="checkBox" id="checkIcon" />
              <label for="checkIcon">
                <AiFillCheckCircle />
              </label>
              <span>로그인 유지</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
