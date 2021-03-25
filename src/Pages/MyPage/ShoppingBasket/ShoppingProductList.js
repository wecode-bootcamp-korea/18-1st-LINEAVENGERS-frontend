import React from "react";
import "./ShoppingBasket.scss";

class ShoppingProductList extends React.Component {
  render() {
    const { id, img, name, quantity, price, discount } = this.props;
    let { deliveryPrice } = this.props;
    if (deliveryPrice === "무료") {
      deliveryPrice = 0;
    }

    return (
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
            <div className="shoppingProductListNameItemsTotalPrice">
              <div className="shoppingProductListNamePrice">
                {discount === 0 ? price : price - (discount / 100) * price}원
              </div>
              <del className="shoppingProductListNameDiscount">
                {discount === 0 ? null : price}
              </del>
            </div>
          </div>
          <button
            className="shoppingProductListNameItemCheck"
            onClick={this.props.handleClick}
            value={id}
          >
            X
          </button>
        </div>
        <div className="shoppingProductListOption">
          <div className="shoppingProductListOptionSize">
            사이즈 : {quantity}개
          </div>
        </div>
        <div className="shoppingProductListPrice">
          <div className="shoppingProductListPriceIndividual">
            {quantity * discount === 0
              ? price
              : (price - (discount / 100) * price) * quantity}
            원
          </div>
          <button
            className="shoppingProductListPriceOrder"
            onClick={this.props.handleClick}
            value={id}
          >
            주문하기
          </button>
        </div>
        <div className="shoppingProductListDelivery">
          <div className="shoppingProductListDeliveryMoney">
            {deliveryPrice}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingProductList;
