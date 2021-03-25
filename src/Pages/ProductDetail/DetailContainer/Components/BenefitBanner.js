import React, { Component } from "react";
import "./BenefitBanner.scss";

class BenefitBanner extends Component {
  render() {
    return (
      <div className="benefitBanner">
        <p className="benefitTitle">
          <span>라인어벤져스 고객만을 위한 등급혜택</span>
          <span>혜택 전체보기</span>
        </p>
        <ul className="benefitList">
          <li>
            <span>
              <em>V</em>VVIP
            </span>
            <p>3,000원 라인프렌즈 장바구니 할인 쿠폰 2장</p>
            <p>3,000원 배송비 할인쿠폰 2장</p>
          </li>
          <li>
            <span>
              <em>V</em>VIP
            </span>
            <p>2,000원 라인프렌즈 장바구니 할인 쿠폰 2장</p>
            <p>3,000원 배송비 할인쿠폰 2장</p>
          </li>
          <li>
            <span>
              <em>G</em>GOLD
            </span>
            <p>1,000원 라인프렌즈 장바구니 할인 쿠폰 2장</p>
            <p>3,000원 배송비 할인쿠폰 2장</p>
          </li>
          <li>
            <span>
              <em>S</em>SILVER
            </span>
            <p>1,000원 라인프렌즈 장바구니 할인 쿠폰 1장</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default BenefitBanner;
