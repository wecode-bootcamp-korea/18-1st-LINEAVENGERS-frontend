import React from "react";
import "./ShoppingBasket.scss";

class ShoppingProductList extends React.Component {
  render() {
    const { img, name, size, price, totalPrice, deliveryPrice } = this.props;
    return (
      <>
        <div className="ShoppingProductList">
          <div className="ShoppingProductListName">
            <img
              className="ShoppingProductListNameImg"
              alt="Line avengers"
              src={img}
            />
            <div className="ShoppingProductListNameItems">
              <div className="ShoppingProductListNameItem">{name}</div>
              <div className="ShoppingProductListNamePrice">{price}</div>
            </div>
          </div>
          <div className="ShoppingProductListOption">
            <div className="ShoppingProductListOptionSize">
              사이즈 : {size}개
            </div>
          </div>
          <div className="ShoppingProductListPrice">
            <div className="ShoppingProductListPriceIndividual">
              {totalPrice}
            </div>
          </div>
          <div className="ShoppingProductListDelivery">
            <div className="ShoppingProductListDeliveryMoney">
              {deliveryPrice}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingProductList;
