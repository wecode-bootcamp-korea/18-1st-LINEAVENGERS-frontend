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

        {/* <div className="ShoppingProductList">
          <div className="ShoppingProductListName">
            <img
              className="ShoppingProductListNameImg"
              src="https://image.shutterstock.com/image-illustration/happy-easter-cute-hand-drawn-600w-1699883170.jpg"
              alt="사진"
            />
            <div className="ShoppingProductListNameItems">
              <div className="ShoppingProductListNameItem">상품 이름</div>
              <div className="ShoppingProductListNamePrice">상품 금액</div>
            </div>
          </div>
          <div className="ShoppingProductListOption">
            <div className="ShoppingProductListOptionSize">
              사이즈 : 단품 1개
            </div>
          </div>
          <div className="ShoppingProductListPrice">
            <div className="ShoppingProductListPriceIndividual">13,000원</div>
          </div>
          <div className="ShoppingProductListDelivery">
            <div className="ShoppingProductListDeliveryMoney">3,000원</div>
          </div>
        </div>
        <div className="ShoppingProductListTotal"></div> */}
      </main>
    );
  }
}

export default ShoppingProduct;
