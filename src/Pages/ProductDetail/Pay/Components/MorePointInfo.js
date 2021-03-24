import React, { Component } from "react";
import "./MorePointInfo.scss";

class MorePointInfo extends Component {
  render() {
    const { finalPrice } = this.props;
    const convertPriceA = ((finalPrice * 8) / 100).toLocaleString();
    const convertPriceB = ((finalPrice * 8) / 100 / 2).toLocaleString();
    const convertPriceC = ((finalPrice * 8) / 100 / 4).toLocaleString();
    return (
      <div className="morePointInfo">
        <p className="morePointMain">
          <span className="mainTitle">
            <em>TIP.</em>포인트 더 받는 방법
          </span>
          <span className="mainValue">
            +최대 {Number(convertPriceA).toLocaleString()}
            <em>원</em>
          </span>
        </p>
        <ul className="subPointBox">
          <li className="subPointList">
            <div>
              <span className="NIcon">
                <em>N</em>
              </span>
              <span className="PlusIcon">
                <em>+</em>
              </span>
              <span className="MembershipIcon">
                <em>멤버쉽</em>
              </span>
              <em>최대 5% 적립, 무료 시작</em>
            </div>
            <span>{Number(convertPriceB).toLocaleString()}원</span>
          </li>
          <li className="subPointList">
            <div>
              <span className="NIcon">
                <em>N</em>
              </span>
              <span className="PercentIcon">
                <em>2%</em>
              </span>
              <em>충전포인트로 결제시</em>
            </div>
            <span>{Number(convertPriceC).toLocaleString()}원</span>
          </li>
          <li className="subPointList">
            <div>
              <span className="NIcon">
                <em>N</em>
              </span>
              <span className="PercentIcon">
                <em>2%</em>
              </span>
              <em>MY단골스토어에서 결제시</em>
            </div>
            <span>{Number(convertPriceC).toLocaleString()}원</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default MorePointInfo;
