import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingBasket.scss";

class ShoppingBasketNavTop extends React.Component {
  navBar = () => {
    const names = [
      "결제내역",
      "포인트",
      "송금",
      "선물함",
      "혜택 * 쿠폰",
      "문의 * 리뷰",
    ];
    const nameList = names.map(name => (
      <li className="myPageNavBottomRightList">{name}</li>
    ));

    return <ul className="myPageNavBottomRight">{nameList}</ul>;
  };

  render() {
    return (
      <nav className="myPageNav">
        <div className="myPageNavTop">
          <div>
            <span class="leftLine">Line</span>
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
          {this.navBar()}
        </div>
      </nav>
    );
  }
}

export default ShoppingBasketNavTop;
