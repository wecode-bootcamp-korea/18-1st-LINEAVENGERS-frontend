import React, { Component } from "react";
import "./MorePoint.scss";

class MorePoint extends Component {
  render() {
    const { price } = this.props;
    const convertPriceA = ((price * 8) / 100).toLocaleString();
    const convertPriceB = ((price * 8) / 100 / 2).toLocaleString();
    const convertPriceC = ((price * 8) / 100 / 4).toLocaleString();
    return (
      <div className="morePoint">
        <div className="moreTotal">
          <span className="totalTitle">
            <em>TIP.</em> 포인트 더 받는 방법
          </span>
          <span className="totalPrice">
            +최대 {convertPriceA}
            <em>원</em>
          </span>
        </div>
        <div className="moreMembership">
          <div className="membershipLeft">
            <span className="leftNLogo">
              <em>N</em>
            </span>
            <span className="leftPlus">
              <em>+</em>
            </span>
            <span className="leftMembership">
              <em>멤버쉽</em>
            </span>
            <span className="leftInfo">최대 5% 적립, 무료시작</span>
          </div>
          <span className="rightValue">{convertPriceB}원</span>
        </div>
        <div className="morePointPay">
          <div className="pointPayLeft">
            <span className="leftNLogo">
              <em>N</em>
            </span>
            <span className="leftPercent">
              <em>2%</em>
            </span>
            <span className="leftInfo">충전포인트로 결제시</span>
          </div>
          <span className="rightValue">{convertPriceC}원</span>
        </div>
        <div className="morePointPay">
          <div className="pointPayLeft">
            <span className="leftNLogo">
              <em>N</em>
            </span>
            <span className="leftPercent">
              <em>2%</em>
            </span>
            <span className="leftInfo">MY단골스토어에서 결제시</span>
          </div>
          <span className="rightValue">{convertPriceC}원</span>
        </div>
      </div>
    );
  }
}

export default MorePoint;
