import React from "react";
// import ShoppingNone from "./ShoppingNone";
import ShoppingProduct from "./ShoppingProduct";
import "./ShoppingBasket.scss";

class ShoppingBasket extends React.Component {
  state = {};
  render() {
    return (
      <div className="ShoppingBasket">
        <nav className="MyPageNav">
          <div className="MyPageNavTop">
            <div className="MyPageNavTopLeft">
              <span class="MyPageNavTopLeftLine">Line</span>
              <span>Avengers Shopping</span>
            </div>
            <div className="MyPageNavTopRight">
              <div>Line Pay</div>
            </div>
          </div>
          <div className="MyPageNavBottom">
            <div className="MyPageNavBottomLeft">
              <div>장바구니</div>
            </div>
            <div className="MyPageNavBottomRight">
              <div className="MyPageNavBottomRightAccount">결제내역</div>
              <div className="MyPageNavBottomRightPoint">포인트</div>
              <div className="MyPageNavBottomRightSend">송금</div>
              <div className="MyPageNavBottomRightGift">선물함</div>
              <div className="MyPageNavBottomRightBenefit">혜택 * 쿠폰</div>
              <div className="MyPageNavBottomRightAsk">문의 * 리뷰</div>
            </div>
          </div>
        </nav>
        <main className="ShoppingBasketMain">
          <section className="ShoppingBasketNav">
            <div className="ShoppingBasketNavTop">
              <div className="ShoppingBasketNavTopLeft">
                <div className="ShoppingBasketNavTopLeftNormal">
                  일반 장바구니
                </div>
                <div className="ShoppingBasketNavTopLeftUsing">
                  | 장보기 전용
                </div>
              </div>
              <div className="ShoppingBasketNavTopRight">
                <div className="ShoppingBasketNavTopRightBasket">장바구니</div>
                <div className="ShoppingBasketNavTopRight">&gt; 주문/결제</div>
                <div className="ShoppingBasketNavTopRightSuccess">
                  &gt; 완료
                </div>
              </div>
            </div>
            <div className="ShoppingBasketNavBottom">
              <div className="ShoppingBasketNavBottomFirst">
                장바구니 상품은 최대 30일간 저장됩니다.
              </div>
              <div className="ShoppingBasketNavBottomSecond">
                가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
              </div>
              <div className="ShoppingBasketNavBottomThird">
                오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될
                수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.
              </div>
            </div>
          </section>
          <ShoppingProduct />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default ShoppingBasket;
