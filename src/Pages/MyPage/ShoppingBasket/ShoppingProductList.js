import React from "react";
import "./ShoppingBasket.scss";

class ShoppingProductList extends React.Component {
  render() {
    const { img, name, size, price, totalPrice, deliveryPrice } = this.props;
    return (
      <>
        <div className="shoppingProductList">
          <div className="shoppingProductListName">
            <img
              className="shoppingProductListNameImg"
              alt="Line avengers"
              src={img}
            />
            <div className="shoppingProductListNameItems">
              <div className="shoppingProductListNameItem">{name}</div>
              <div className="shoppingProductListNamePrice">{price}원</div>
            </div>
          </div>
          <div className="shoppingProductListOption">
            <div className="shoppingProductListOptionSize">
              사이즈 : {size}개
            </div>
          </div>
          <div className="shoppingProductListPrice">
            <div className="shoppingProductListPriceIndividual">
              {totalPrice}원
            </div>
            <button className="shoppingProductListPriceOrder">주문하기</button>
          </div>
          <div className="shoppingProductListDelivery">
            <div className="shoppingProductListDeliveryMoney">
              {deliveryPrice}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingProductList;
