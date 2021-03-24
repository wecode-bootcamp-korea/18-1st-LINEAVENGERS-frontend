import React from "react";
import { Link } from "react-router-dom";

class MyPageNav extends React.Component {
  myPageNav = () => {
    const name = [
      "결제내역",
      "포인트",
      "송금",
      "선물함",
      "혜택 * 쿠폰",
      "문의 * 리뷰",
    ];

    const nameList = name.map(name => (
      <li className="myPageNavBottomRightTotal">{name}</li>
    ));

    return <ul className="myPageNavBottomRight">{nameList}</ul>;
  };

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
              <Link
                to="/MyPage"
                style={{ textDecoration: "none", color: "white" }}
              >
                마이 페이지
              </Link>
            </div>
            <div class="myPageNavTopRightHeart">
              <Link
                to="/MyPageHeart"
                style={{ textDecoration: "none", color: "white" }}
              >
                찜 상품
              </Link>
            </div>
            <div className="myPageNavTopRightBasket">
              <Link
                to="/ShoppingBasket"
                style={{ textDecoration: "none", color: "white" }}
              >
                장바구니
              </Link>
            </div>
          </div>
        </div>
        <div className="myPageNavBottom">
          <div className="myPageNavBottomLeft">
            <div>Line Pay</div>
          </div>
          {this.myPageNav()}
        </div>
      </nav>
    );
  }
}

export default MyPageNav;
