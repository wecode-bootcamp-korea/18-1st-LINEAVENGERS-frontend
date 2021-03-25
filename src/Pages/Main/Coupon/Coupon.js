import React, { Component } from "react";
import "./Coupon.scss";

export class Coupon extends Component {
  constructor() {
    super();
    this.state = {
      modalstatus: false,
    };
  }

  handleCouponModal = () => {
    this.setState({ modalstatus: !this.state.modalstatus });
  };

  render() {
    return (
      <article className="coupon">
        <div className="couponImgContainer">
          <div className="couponImg">
            <p className="linrFriends">라인 프렌즈</p>
            <p className="couponPrice">1,000원</p>
          </div>
        </div>
        <div className="couponTextContainer">
          <p className="couponBigText">SLO님, 혜택 다운받고 쇼핑하세요</p>
          <p className="couponSmallText">
            소식알림 동의 고객에게 드리는 혜택! 1000원 장바구니 할인
          </p>
          <button onClick={this.handleCouponModal}>쿠폰받기</button>
        </div>
      </article>
    );
  }
}

export default Coupon;
