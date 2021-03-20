import React from "react";
import "./ShoppingBasket.scss";

class ShoppingProductList extends React.Component {
  render() {
    const { id, img, name, size, price } = this.props;
    let { deliveryPrice } = this.props;
    if (deliveryPrice === 0) {
      deliveryPrice = "무료";
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
            <div className="shoppingProductListNamePrice">{price}원</div>
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
          <div className="shoppingProductListOptionSize">사이즈 : {size}개</div>
        </div>
        <div className="shoppingProductListPrice">
          <div className="shoppingProductListPriceIndividual">
            {size * price}원
          </div>
          <button className="shoppingProductListPriceOrder">주문하기</button>
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
