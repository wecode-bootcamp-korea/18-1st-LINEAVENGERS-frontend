import React from "react";
import ShoppingProductList from "./ShoppingProductList";
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
        res.forEach(data => (totalSum += data.totalPrice));
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
                {this.state.DeliveryPrice}원
              </div>
            </div>
          </div>
          <div className="shoppingProductListTotalRight">
            <div className="shoppingProductListTotalRightHead">
              <div className="shoppingProductListTotalPrice">총 주문금액</div>
              <div className="shoppingProductListTotalPriceInt">
                {this.state.TotalPrice + this.state.DeliveryPrice}원
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
