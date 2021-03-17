import React from "react";
import "./ShoppingBasket.scss";
import { AiOutlineShopping } from "react-icons/ai";

class ShoppingNone extends React.Component {
  state = {};
  render() {
    return (
      <section className="shoppingBasketArticle">
        <div className="shoppingBasketArticleBasket">
          <AiOutlineShopping size="40" color="white" />
        </div>
        <div className="shoppingBasketArticleNone">
          장바구니에 담긴 상품이 없습니다.
        </div>
        <div className="shoppingBasketArticlePut">
          원하는 상품을 장바구니에 담아보세요!
        </div>
        <button className="shoppingBasketArticleContinue">쇼핑 계속하기</button>
      </section>
    );
  }
}

export default ShoppingNone;
