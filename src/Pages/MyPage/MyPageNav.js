import React from "react";
import { Link } from "react-router-dom";

class MyPageNav extends React.Component {
  render() {
    const names = [
      "결제내역",
      "포인트",
      "송금",
      "선물함",
      "혜택 * 쿠폰",
      "문의 * 리뷰",
    ];

    const links = [
      { page: "/MyPage", class: "myPageNavTopRightMy", text: "마이 페이지" },
      {
        page: "/MyPageHeart",
        class: "myPageNavTopRightHeart",
        text: "찜 상품",
      },
      {
        page: "/ShoppingBasket",
        class: "myPageNavTopRightBasket",
        text: "장바구니",
      },
    ];
    return (
      <nav className="myPageNav">
        <div className="myPageNavTop">
          <div className="myPageNavTopLeft">
            <Link class="myPageNavTopLeftLine" to="/main">
              Line
            </Link>
            <span>Avengers Shopping</span>
          </div>
          <div className="myPageNavTopRight">
            {links.map(e => {
              return (
                <div class={e.class}>
                  <Link
                    to={e.page}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {e.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="myPageNavBottom">
          <div className="myPageNavBottomLeft">
            <div>Line Pay</div>
          </div>
          <ul className="myPageNavBottomRight">
            {names.map(name => (
              <li className="myPageNavBottomRightTotal">{name}</li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default MyPageNav;
