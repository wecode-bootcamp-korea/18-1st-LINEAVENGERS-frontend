import React from "react";
import { Link } from "react-router-dom";

class MyPageNav extends React.Component {
  render() {
    return (
      <nav className="myPageNav">
        <div className="myPageNavTop">
          <div className="myPageNavTopLeft">
            <span class="myPageNavTopLeftLine">Line</span>
            <span>Avengers Shopping</span>
          </div>
          <div className="myPageNavTopRight">
            <div class="myPageNavTopRightMy">
              <Link to="/MyPage">마이 페이지</Link>
            </div>
            <div class="myPageNavTopRightHeart">
              <Link to="/MyPageHeart">찜 상품</Link>
            </div>
            <div className="myPageNavTopRightBasket">
              <Link to="/ShoppingBasket">장바구니</Link>
            </div>
          </div>
        </div>
        <div className="myPageNavBottom">
          <div className="myPageNavBottomLeft">
            <div>Line Pay</div>
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

export default MyPageNav;
