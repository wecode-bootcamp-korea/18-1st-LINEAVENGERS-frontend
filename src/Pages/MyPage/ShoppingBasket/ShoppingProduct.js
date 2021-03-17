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
    fetch("/Data/ShoppingBasket.json")
      .then(res => res.json())
      .then(res => this.setState({ ProductList: res }));
  }

  render() {
    return (
      <main className="shoppingProduct">
        <div className="shoppingProductMenu">
          <div className="shoppingProductMenuInfo">상품정보</div>
          <div className="shoppingProductMenuOpt">옵션</div>
          <div className="shoppingProductMenuPrice">상품금액</div>
          <div className="shoppingProductMenuDelivery">배송비</div>
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
        <div className="shoppingProductListTotal">
          <div className="shoppingProductListTotalLeft">
            <div className="shoppingProductListTotalLeftL">
              <div>총 상품금액</div>
              <div>30000원</div>
            </div>
            <div className="shoppingProductListTotalLeftR">
              <div>배송비</div>
              <div>3000원</div>
            </div>
          </div>
          <div className="shoppingProductListTotalRight">
            <div className="shoppingProductListTotalRightHead">
              <div className="shoppingProductListTotalPrice">총 주문금액</div>
              <div className="shoppingProductListTotalPriceInt">33000원</div>
            </div>
          </div>
        </div>
        <div className="shoppingProductButton">
          <div className="shoppingProductButtonL">
            <button className="shoppingProductButtonLeft">쇼핑 계속하기</button>
          </div>
          <div className="shoppingProductButtonR">
            <button className="shoppingProductButtonRight">주문하기</button>
          </div>
        </div>
      </main>
    );
  }
}

export default ShoppingProduct;
