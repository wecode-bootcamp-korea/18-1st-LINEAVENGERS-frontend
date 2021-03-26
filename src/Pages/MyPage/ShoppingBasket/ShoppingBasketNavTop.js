import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingBasket.scss";

class ShoppingBasketNavTop extends React.Component {
  render() {
    const names = [
      "결제내역",
      "포인트",
      "송금",
      "선물함",
      "혜택 * 쿠폰",
      "문의 * 리뷰",
    ];
    return (
      <nav className="myPageNav">
        <div className="myPageNavTop">
          <div>
            <Link class="leftLine" to="/main">
              Line
            </Link>
            <span>Avengers Shopping</span>
          </div>
          <div className="topRight">
            <div className="topRightMyPage">
              <Link
                to="./MyPage"
                style={{ textDecoration: "none", color: "white" }}
              >
                My Page
              </Link>
            </div>
            <div>Line Pay</div>
          </div>
        </div>
        <div className="myPageNavBottom">
          <div className="myPageNavBottomLeft">
            <div>장바구니</div>
          </div>
          <ul className="myPageNavBottomRight">
            {names.map(name => (
              <li className="myPageNavBottomRightList">{name}</li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default ShoppingBasketNavTop;
