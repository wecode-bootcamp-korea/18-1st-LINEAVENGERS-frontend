import React from "react";
import MyPageNav from "./MyPageNav";
import ShoppingBasketNav from "./ShoppingBasketNav";
import ShoppingProduct from "./ShoppingProduct";
import "./ShoppingBasket.scss";

class ShoppingBasket extends React.Component {
  render() {
    return (
      <div className="shoppingBasket">
        <MyPageNav />
        <main className="shoppingBasketMain">
          <ShoppingBasketNav />
          <ShoppingProduct />
        </main>
      </div>
    );
  }
}

export default ShoppingBasket;
