import React from "react";
import ShoppingProductList from "./ShoppingProductList";
import ShoppingNone from "./ShoppingNone";
import { AiOutlinePlus } from "react-icons/ai";

class ShoppingProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
      TotalPrice: 0,
      DeliveryPrice: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/ShoppingBasket.json")
      .then(res => res.json())
      .then(res => {
        let totalSum = 0;
        let delivery = 0;
        res.forEach(data => (totalSum += data.price * data.size));
        const result = res.map(el => {
          if (el.deliveryPrice === "무료") {
            el.deliveryPrice = 0;
          }
          return el.deliveryPrice;
        });
        delivery = result.reduce((acc, cur) => acc + cur);
        this.setState({
          ProductList: res,
          TotalPrice: totalSum,
          DeliveryPrice: delivery,
        });
      });
  }

  // componentDidUpdate() {
  //   fetch("/Data/ShoppingBasket.json", {
  //     method: "delete",
  //   })
  //     .then(response => response.json())
  //     .then(res => console.log(res));
  // }

  // removeProduct = e => {
  //   this.setState({
  //     ProductList: this.state.ProductList.filter(el => el.id != e.target.value),
  //   });
  // };

  render() {
    const deliveryStat = this.state.DeliveryPrice >= 3000 ? 3000 : 0;
    return this.state.ProductList.length === 0 ? (
      <ShoppingNone />
    ) : (
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
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              size={product.size}
              totalPrice={product.totalPrice}
              deliveryPrice={product.deliveryPrice}
              handleClick={this.removeProduct}
            />
          );
        })}
        <div className="shoppingProductListTotal">
          <div className="shoppingProductListTotalLeft">
            <div className="shoppingProductListTotalLeftL">
              <div className="shoppingProductListTotalLeftLL">
                <div className="shoppingProductListTotalLeftLTotal">
                  총 상품금액
                </div>
                <div className="shoppingProductListTotalLeftLPrice">
                  {this.state.TotalPrice}원
                </div>
              </div>
              <div className="shoppingProductListTotalLeftLPlus">
                <AiOutlinePlus size="20" color="gray" />
              </div>
            </div>
            <div className="shoppingProductListTotalLeftR">
              <div className="shoppingProductListTotalLeftRDelivery">
                배송비
              </div>
              <div className="shoppingProductListTotalLeftRPrice">
                {deliveryStat}원
              </div>
            </div>
          </div>
          <div className="shoppingProductListTotalRight">
            <div className="shoppingProductListTotalRightHead">
              <div className="shoppingProductListTotalPrice">총 주문금액</div>
              <div className="shoppingProductListTotalPriceInt">
                {this.state.TotalPrice + deliveryStat}원
              </div>
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
