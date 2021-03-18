import React, { Component } from "react";
import "./MorePoint.scss";

class MorePoint extends Component {
  render() {
    const { price } = this.props;
    const convertPriceA = ((price * 8) / 100).toLocaleString();
    const convertPriceB = ((price * 8) / 100 / 2).toLocaleString();
    const convertPriceC = ((price * 8) / 100 / 4).toLocaleString();
    return (
      <div className="more-point">
        <div className="more-total">
          <span className="total-title">
            <em>TIP.</em> 포인트 더 받는 방법
          </span>
          <span className="total-price">
            +최대 {convertPriceA}
            <em>원</em>
          </span>
        </div>
        <div className="more-membership">
          <div className="membership-left">
            <span className="left-NLogo">
              <em>N</em>
            </span>
            <span className="left-Plus">
              <em>+</em>
            </span>
            <span className="left-membership">
              <em>멤버쉽</em>
            </span>
            <span className="left-info">최대 5% 적립, 무료시작</span>
          </div>
          <span className="right-value">{convertPriceB}원</span>
        </div>
        <div className="more-point-pay">
          <div className="point-pay-left">
            <span className="left-NLogo">
              <em>N</em>
            </span>
            <span className="left-Percent">
              <em>2%</em>
            </span>
            <span className="left-info">충전포인트로 결제시</span>
          </div>
          <span className="right-value">{convertPriceC}원</span>
        </div>
        <div className="more-point-pay">
          <div className="point-pay-left">
            <span className="left-NLogo">
              <em>N</em>
            </span>
            <span className="left-Percent">
              <em>2%</em>
            </span>
            <span className="left-info">MY단골스토어에서 결제시</span>
          </div>
          <span className="right-value">{convertPriceC}원</span>
        </div>
      </div>
    );
  }
}

export default MorePoint;
