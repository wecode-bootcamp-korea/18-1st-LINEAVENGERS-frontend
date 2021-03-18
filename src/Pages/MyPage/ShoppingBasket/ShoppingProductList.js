import React from "react";
import "./ShoppingBasket.scss";
import { AiOutlineClose } from "react-icons/ai";

class ShoppingProductList extends React.Component {
  render() {
    const { img, name, size, price, totalPrice } = this.props;
    let { deliveryPrice } = this.props;
    if (deliveryPrice === 0) {
      deliveryPrice = "무료";
    }

    return (
      <>
        <div className="shoppingProductList">
          <div className="shoppingProductListName">
            <div className="shoppingProductListBox">
              <input type="checkbox" />
            </div>
            <img
              className="shoppingProductListNameImg"
              alt="Line avengers"
              src={img}
            />
            <div className="shoppingProductListNameItems">
              <div className="shoppingProductListNameItem">{name}</div>
              <div className="shoppingProductListNamePrice">{price}원</div>
            </div>
            <div className="shoppingProductListNameItemCheck">
              <AiOutlineClose />
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
