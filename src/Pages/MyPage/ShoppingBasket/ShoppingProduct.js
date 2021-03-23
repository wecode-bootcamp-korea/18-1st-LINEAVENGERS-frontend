import React from "react";
import ShoppingProductList from "./ShoppingProductList";
import ShoppingNone from "./ShoppingNone";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

class ShoppingProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
      TotalPrice: 0,
      DeliveryPrice: 0,
      DiscountPrice: 0,
      userId: "",
      quantity: "",
      sizeId: "",
    };
  }

  componentDidMount() {
    fetch("/Data/ShoppingBasket.json")
      .then(res => res.json())
      .then(res => {
        let totalSum = 0;
        let delivery = 0;
        let discount = 0;
        let userId = "";
        res.forEach(
          data =>
            (totalSum +=
              (data.discount === 0
                ? data.price
                : data.price - (data.discount / 100) * data.price) * data.size)
        );
        const result = res.map(el => {
          if (el.deliveryPrice === "무료") {
            el.deliveryPrice = 0;
          }
          return el.deliveryPrice;
        });
        delivery = result.reduce((acc, cur) => acc + cur);
        res.forEach(data => (discount += (data.discount / 100) * data.price));
        this.setState({
          ProductList: res,
          TotalPrice: totalSum,
          DeliveryPrice: delivery,
          DiscountPrice: discount,
          userId: userId,
        });
      });
  }

  goToMyPage = async () => {
    await fetch("api주소", {
      method: "post",
      body: JSON.stringify({
        userId: this.state.ProductList.id,
        quantity: this.state.ProductList,
      }),
    });
  };

  removeProduct = e => {
    this.setState({
      ProductList: this.state.ProductList.filter(el => el.id != e.target.value),
    });

    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        userId: this.state.ProductList.id,
      }),
    });
  };

  render() {
    console.log(this.state.ProductList);
    const deliveryStat = this.state.DeliveryPrice >= 3000 ? 0 : 3000;
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
              discount={product.discount}
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
            <div className="shoppingProductListTotalLeftMinus">
              <AiOutlineMinus size="20" color="gray" />
            </div>
            <div className="shoppingProductListTotalLeftDis">
              <div className="shoppingProductListTotalLeftDiscount">
                할인 예상금액
              </div>
              <div className="shoppingProductListTotalLeftDiscountPrice">
                {this.state.DiscountPrice}원
              </div>
            </div>
          </div>
          <div className="shoppingProductListTotalRight">
            <div className="shoppingProductListTotalRightHead">
              <div className="shoppingProductListTotalPrice">총 주문금액</div>
              <div className="shoppingProductListTotalPriceInt">
                {this.state.TotalPrice +
                  deliveryStat -
                  this.state.DiscountPrice}
                원
              </div>
            </div>
          </div>
        </div>
        <div className="shoppingProductButton">
          <div className="shoppingProductButtonL">
            <button className="shoppingProductButtonLeft">쇼핑 계속하기</button>
          </div>
          <div className="shoppingProductButtonR">
            <button
              className="shoppingProductButtonRight"
              onClick={this.goToMyPage}
            >
              주문하기
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ShoppingProduct;
