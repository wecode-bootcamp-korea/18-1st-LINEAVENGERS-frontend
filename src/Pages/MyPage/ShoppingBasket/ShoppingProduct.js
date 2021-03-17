import React from "react";
import ShoppingProductList from "./ShoppingProductList";

class ShoppingProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ShoppingBasket.json")
      .then(res => res.json())
      .then(res => this.setState({ ProductList: res }));
  }

  render() {
    console.log(this.state.ProductList);
    return (
      <>
        <main className="ShoppingProduct">
          <div className="ShoppingProductMenu">
            <div className="ShoppingProductMenuInfo">상품정보</div>
            <div className="ShoppingProductMenuOpt">옵션</div>
            <div className="ShoppingProductMenuPrice">상품금액</div>
            <div className="ShoppingProductMenuDelivery">배송비</div>
          </div>
          {this.state.ProductList.map(product => {
            return (
              <ShoppingProductList
                img={product.img}
                name={product.name}
                price={product.price}
                size={product.size}
                totalPrice={product.totalPrice}
                deliveryPrice={product.deliveryPrice}
              />
            );
          })}
          <div className="ShoppingProductListTotal">
            <div className="ShoppingProductListTotalLeft">
              <div className="ShoppingProductListTotalLeftL">총 상품금액</div>
              <div className="ShoppingProductListTotalLeftR">배송비</div>
            </div>
            <div className="ShoppingProductListTotal">
              <div className="ShoppingProductListTotalPrice">총 주문금액</div>
              <div className="ShoppingProductListTotalPriceInt">39000원</div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default ShoppingProduct;
