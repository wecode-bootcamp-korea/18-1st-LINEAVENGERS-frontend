import React from "react";
import ShoppingProductList from "./ShoppingProductList";
import ShoppingNone from "./ShoppingNone";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

class ShoppingProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      totalPrice: 0,
      deliveryPrice: 0,
      discountPrice: 0,
      userId: "",
      quantity: "",
      sizeId: "",
    };
  }

  componentDidMount() {
    fetch("http://10.58.1.71:8000/order", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.uRvhx0YRxMc6bT8xlDbEw3lNaEpuPH0B1OShVoJGahw",
      },
    })
      .then(res => res.json())
      .then(res => {
        let totalSum = 0;
        let delivery = 0;
        let discount = 0;
        let userId = "";
        res.result.forEach(
          data =>
            (totalSum +=
              (data.discount === 0
                ? data.price
                : data.price - (data.discount / 100) * data.price) *
              data.quantity)
        );
        const result = res.result.map(el => {
          if (el.deliveryprice === "무료") {
            el.deliveryprice = 0;
          }
          return el.deliveryprice;
        });
        delivery = result.reduce((acc, cur) => acc + cur);
        res.result.forEach(
          data => (discount += (data.discount / 100) * data.price)
        );
        this.setState({
          productList: res.result,
          totalPrice: totalSum,
          deliveryPrice: delivery,
          discountPrice: discount,
          userId: userId,
        });
      });
  }

  goToMyPage = () => {
    fetch("api주소", {
      method: "post",
      body: JSON.stringify({
        userId: this.state.productList.id,
        quantity: this.state.productList,
      }),
    });
  };

  removeProduct = e => {
    this.setState({
      productList: this.state.productList.filter(el => el.id != e.target.value),
    });

    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        userId: this.state.productList.id,
      }),
    });
  };

  render() {
    console.log(this.state.productList);
    const deliveryStat = this.state.deliveryPrice >= 3000 ? 0 : 3000;
    return this.state.productList.length === 0 ? (
      <ShoppingNone />
    ) : (
      <main className="shoppingProduct">
        <div className="menu">
          <div className="information">상품정보</div>
          <div className="option">옵션</div>
          <div className="price">상품금액</div>
          <div className="delivery">배송비</div>
        </div>
        {this.state.productList.map(product => {
          return (
            <ShoppingProductList
              id={product.id}
              img={product.image}
              name={product.name}
              price={product.price}
              discount={product.discount}
              quantity={product.quantity}
              totalPrice={product.totalPrice}
              deliveryPrice={product.deliveryprice}
              handleClick={this.removeProduct}
            />
          );
        })}
        <div className="shoppingProductListTotal">
          <div className="totalLeft">
            <div className="totalLeftL">
              <div className="totalLeftPrice">
                <div className="totalAmountPrice">총 상품금액</div>
                <div className="totalPrice">{this.state.totalPrice}원</div>
              </div>
              <div className="totalLeftPlus">
                <AiOutlinePlus size="20" color="gray" />
              </div>
            </div>
            <div className="totalLeftR">
              <div className="totalLeftRDelivery">배송비</div>
              <div className="totalLeftRPrice">{deliveryStat}원</div>
            </div>
            <div className="totalLeftMinus">
              <AiOutlineMinus size="20" color="gray" />
            </div>
            <div>
              <div className="totalLeftDiscount">할인 예상금액</div>
              <div className="totalLeftDiscountPrice">
                {this.state.discountPrice}원
              </div>
            </div>
          </div>
          <div className="totalRight">
            <div className="totalRightR">
              <div className="totalPrice">총 주문금액</div>
              <div className="totalPriceInt">
                {this.state.totalPrice +
                  deliveryStat -
                  this.state.discountPrice}
                원
              </div>
            </div>
          </div>
        </div>
        <div className="shoppingProductButton">
          <div className="buttonL">
            <button className="left">쇼핑 계속하기</button>
          </div>
          <div>
            <button className="buttonR" onClick={this.goToMyPage}>
              주문하기
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ShoppingProduct;
