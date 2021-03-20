import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingBasket.scss";

class ShoppingBasketNavTop extends React.Component {
  state = {};
  render() {
    return (
      <nav className="myPageNav">
        <div className="myPageNavTop">
          <div className="myPageNavTopLeft">
            <span class="myPageNavTopLeftLine">Line</span>
            <span>Avengers Shopping</span>
          </div>
          <div className="myPageNavTopRight">
            <div className="myPageNavTopRightMyPage">
              <Link to="./MyPage">My Page</Link>
            </div>
            <div>Line Pay</div>
          </div>
        </div>
        <div className="myPageNavBottom">
          <div className="myPageNavBottomLeft">
            <div>장바구니</div>
          </div>
          <div className="myPageNavBottomRight">
            <div className="myPageNavBottomRightAccount">결제내역</div>
            <div className="myPageNavBottomRightPoint">포인트</div>
            <div className="myPageNavBottomRightSend">송금</div>
            <div className="myPageNavBottomRightGift">선물함</div>
            <div className="myPageNavBottomRightBenefit">혜택 * 쿠폰</div>
            <div className="myPageNavBottomRightAsk">문의 * 리뷰</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ShoppingBasketNavTop;
