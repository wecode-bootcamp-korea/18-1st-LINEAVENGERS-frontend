import React from "react";
import ShoppingBasketNavTop from "./ShoppingBasketNavTop";
import ShoppingBasketNav from "./ShoppingBasketNav";
import ShoppingProduct from "./ShoppingProduct";
import "./ShoppingBasket.scss";
import Footer from "../../../Components/Footer/Footer";

class ShoppingBasket extends React.Component {
  render() {
    return (
      <div className="shoppingBasket">
        <ShoppingBasketNavTop />
        <main className="shoppingBasketMain">
          <ShoppingBasketNav />
          <ShoppingProduct />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ShoppingBasket;
