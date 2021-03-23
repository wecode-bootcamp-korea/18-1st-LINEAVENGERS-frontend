import React, { Component } from "react";
import "./MorePointInfo.scss";

class MorePointInfo extends Component {
  render() {
    return (
      <div className="morePointInfo">
        <p className="morePointMain">
          <span className="mainTitle">
            <em>TIP.</em>포인트 더 받는 방법
          </span>
          <span className="mainValue">
            +최대 1,673<em>원</em>
          </span>
        </p>
        <ul className="subPointBox">
          <li className="subPointList">
            <div>
              <span>N</span>
              <span>+</span>
              <span>멤버쉽</span>
              <em>최대 5% 적립, 무료 시작</em>
            </div>
            <span>837원</span>
          </li>
          <li className="subPointList">
            <div>
              <span>N</span>
              <span>2%</span>
              <em>충전포인트로 결제시</em>
            </div>
            <span>418원</span>
          </li>
          <li className="subPointList">
            <div>
              <span>N</span>
              <span>2%</span>
              <em>충전포인트로 결제시</em>
            </div>
            <span>418원</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default MorePointInfo;
