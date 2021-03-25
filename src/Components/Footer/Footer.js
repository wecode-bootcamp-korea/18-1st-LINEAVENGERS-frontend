import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerText">
          <div className="footerTop">
            <div className="CONTACT US">
              <p className="footerTitle">CONTACT US</p>
              <p>
                1566-1234
                <br />
                상담가능시간 : 평일 10:00 - 19:00
                <br />
                yaho@lineavengers.com
              </p>
            </div>
            <div className="FAQ">
              <p className="footerTitle">FAQ</p>
              <p>FAQ</p>
            </div>
            <div className="LINE AVENGERS STORE">
              <p className="footerTitle">LINE AVENGERS STORE</p>
              <p>공식 온라인 스토어</p>
              <p>공식 오프라인 스토어</p>
            </div>
            <div className="REVIEW">
              <p className="footerTitle">REVIEW</p>
              <p>리뷰</p>
            </div>
            <div className="LANGUAGE">
              <p className="footerTitle">LANGUAGE</p>
              <p>KOREAN</p>
              <p>ENGLISH</p>
            </div>
          </div>
          <div className="footerBottom">
            <div className="bottom1">
              <p className="footerTitle">
                <span> 개인정보처리방침 | </span>
                <span>이용약관</span>
              </p>
            </div>
            <div className="bottomText">
              상호명 : 주식회사 라인 어벤져스 사업자번호 : 123-45-67890 학원
              등록 번호 : 제 98765 호 대표자명 : 김코드 <br />
              사업장주소 : 서울특별시 강남구 테헤란로 427, 위워크타워 3층 큰방
              LINE AVENGERS 호스팅제공자 : 라인 어벤져스 이메일 :
              lineavengers@naver.com
              <br /> 고객센터: 1234-5678
            </div>
          </div>
        </div>
        <div className="footerBackground"></div>
      </footer>
    );
  }
}

export default Footer;
