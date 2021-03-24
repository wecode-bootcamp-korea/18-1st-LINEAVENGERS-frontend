import React, { Component } from "react";
import { RiLock2Fill } from "react-icons/ri";
import { IoBagCheckSharp } from "react-icons/io5";
import "./Signup.scss";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      multiCheckId: "", //중복된 아이디
      succsessID: "",
      loginPw: "",
      rePassword: "",
      pMessage: "",
      name: "",
      email: "",
      phoneNum: "",
      idCheck: false, //아이디 정규식 유효성 검사
      pwcheck: false, //비밀번호 조건 유효성 검사 (8자 이상)
      focusCheck: false, //비밀번호 체크 유효성 검사 (비밀번호 일치)
      nameCheck: false, //이름 정규식 (한글,영어)
      emailCheck: false, //이메일 정규식 유효성 검사
      phoneCheck: false, //휴대폰 정규식 유효성 (-), 01012341234 / 010-1234-1234
    };
  }

  btnVailid = () => {
    fetch("http://10.58.1.71:8000/account/signup", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.loginId,
        password: this.state.loginPw,
        name: this.state.name,
        phone_number: this.state.phoneNum,
        email: this.state.email,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.message === "SUCCESS") {
          alert("회원가입 성공");
          this.props.history.push("/Login");
        }
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //이메일 유효성검사
  handleEmail = e => {
    const { email } = this.state;
    const IS_EMAIL_ENG = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (email !== "" && IS_EMAIL_ENG.test(email)) {
      this.setState({ emailCheck: false }); //공백일 경우
      return;
    } else {
      this.setState({ emailCheck: true });
    }
  };

  //아이디 유효성 검사
  handleId = e => {
    const { loginId } = this.state;
    const IS_ID_NUM_ENG = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (loginId === "") {
      this.setState({ idCheck: false, multiCheckId: "" });
      return;
    }
    if (IS_ID_NUM_ENG.test(loginId)) {
      this.setState({ idCheck: false });
    } else {
      this.setState({ idCheck: true, multiCheckId: "" });
      return;
    }

    fetch("http://10.58.1.71:8000/account/loginexist", {
      method: "POST",
      body: JSON.stringify({
        login_id: loginId,
      }),
    })
      .then(res => {
        console.log("aaaaaaa", res);
        return res.json();
      })
      .then(result => {
        console.log(result);
        if (result.message === "INVALID_LOGINID") {
          console.log(result);
          this.setState({ multiCheckId: "duplicate" });
        } else if (result.message === "SUCCESS") {
          this.setState({ multiCheckId: "correct" });
        }
      });
  };

  //비밀번호
  handlePw = () => {
    const { loginPw } = this.state;
    if (loginPw !== "" && loginPw.length >= 8) {
      this.setState({ pwcheck: false });
      return;
    } else {
      this.setState({ pwcheck: true });
    }
  };

  //비밀번호 재확인
  handleFocus = () => {
    const { rePassword, loginPw } = this.state;
    if (rePassword === loginPw) {
      this.setState({ focusCheck: false });
    } else {
      this.setState({ focusCheck: true });
    }
  };

  //이름 유효성 검사
  handleName = () => {
    const { name } = this.state;
    const IS_KOR_ENG_NAME = /^[가-힣a-zA-Z]+$/;

    if (name !== "" && IS_KOR_ENG_NAME.test(name)) {
      this.setState({ nameCheck: false });
      return;
    } else {
      this.setState({ nameCheck: true });
    }
  };

  //폰 번호 유효성 검사
  handlePhone = () => {
    const { phoneNum } = this.state;
    const IS_PHONE_NUM = /^\d{3}-\d{3,4}-\d{4}$/;
    if (phoneNum !== "" && IS_PHONE_NUM.test(phoneNum)) {
      this.setState({ phoneCheck: false });
      return;
    } else {
      this.setState({ phoneCheck: true });
    }
  };
  render() {
    const {
      emailCheck,
      idCheck,
      pwcheck,
      nameCheck,
      focusCheck,
      phoneCheck,
      multiCheckId,
    } = this.state;
    return (
      <div className="signUp">
        <div className="container">
          <div className="navarLogo">
            <h1>
              <img src="../images/Logo/green.png"></img>
            </h1>
          </div>
          <form class="join_form">
            <div className="userInputBox">
              <div className="userId">
                <p>아이디</p>
                <input
                  class="userInputId"
                  type="text"
                  name="loginId"
                  onChange={this.handleChange}
                  onBlur={this.handleId}
                />
                <span>@naver.com</span>
                <span className={`multiCheck ${multiCheckId}`}>
                  {multiCheckId.length !== 0 &&
                    (multiCheckId === "duplicate"
                      ? "중복된 아이디입니다."
                      : "멋진 아이디네요!")}
                </span>
              </div>
              <span className="pwCheck">
                {idCheck && "6~20자의 영문 소문자, 숫자만 사용 가능합니다."}
              </span>

              <div className="userPw">
                <p>비밀번호</p>
                <input
                  class="users_id"
                  name="loginPw"
                  type="password"
                  onBlur={this.handlePw}
                  onChange={this.handleChange}
                />
                <RiLock2Fill className={pwcheck ? "active" : "openLock"} />
              </div>

              <span className="pwCheck">
                {pwcheck &&
                  "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."}
              </span>

              <div className="checkPw">
                <p>비밀번호 재확인</p>
                <input
                  class="users_id"
                  type="password"
                  name="rePassword"
                  onChange={this.handleChange}
                  onBlur={this.handleFocus}
                />
                <IoBagCheckSharp
                  className={focusCheck ? "action" : "checkLock"}
                />
              </div>

              <span className="pwCheck">
                {focusCheck && "비밀번호가 일치하지 않습니다."}
              </span>

              <div className="userName">
                <p>이름</p>
                <input
                  class="users_id"
                  type="text"
                  name="name"
                  onBlur={this.handleName}
                  onChange={this.handleChange}
                />
              </div>
              <span className="pwCheck">
                {nameCheck &&
                  "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"}
              </span>
              <div className="userEmail">
                <p>본인 확인 이메일</p>
                <input
                  className="emailInput"
                  type="text "
                  name="email"
                  onBlur={this.handleEmail} //focus 됐을 때 이벤트 자세한건 구글링 !
                  onChange={this.handleChange}
                />
              </div>
              <span className="pwCheck">
                {emailCheck && "이메일 주소를 다시 확인해주세요."}
              </span>
              <div className="phoneBox">
                <p>휴대전화</p>
                <input
                  className="phoneInput"
                  type="tel"
                  name="phoneNum"
                  onBlur={this.handlePhone}
                  onChange={this.handleChange}
                />
                <button className="phoneBtn" type="button">
                  <span>인증번호 받기</span>
                </button>
              </div>
              <span className="pwCheck">
                {phoneCheck && "형식에 맞지 않는 번호입니다."}
              </span>
              <div className="joinBox">
                <button
                  type="button"
                  className="joinBtn"
                  onClick={this.btnVailid}
                >
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

export default Signup;
