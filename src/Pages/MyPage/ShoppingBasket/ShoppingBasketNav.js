import React from "react";
import "./ShoppingBasket.scss";

class ShoppingBasketNav extends React.Component {
  render() {
    return (
      <section className="shoppingBasketNav">
        <div className="shoppingBasketNavTop">
          <div className="shoppingBasketNavTopLeft">
            <div className="shoppingBasketNavTopLeftNormal">일반 장바구니</div>
            <div className="shoppingBasketNavTopLeftUsing">| 장보기 전용</div>
          </div>
          <div className="shoppingBasketNavTopRight">
            <div className="shoppingBasketNavTopRightBasket">장바구니</div>
            <div className="shoppingBasketNavTopRight">&gt; 주문/결제</div>
            <div className="shoppingBasketNavTopRightSuccess">&gt; 완료</div>
          </div>
        </div>
        <div className="shoppingBasketNavBottom">
          <div className="shoppingBasketNavBottomFirst">
            장바구니 상품은 최대 30일간 저장됩니다.
          </div>
          <div className="shoppingBasketNavBottomSecond">
            가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
          </div>
          <div className="shoppingBasketNavBottomThird">
            오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수
            있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.
          </div>
        </div>
      </section>
    );
  }
}

export default ShoppingBasketNav;
