import React from "react";
import ShoppingProductList from "./ShoppingProductList";
import ShoppingNone from "./ShoppingNone";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { URL } from "../../../config";

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
    fetch(`${URL}/order/cart`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then(res => res.json())
      .then(res => {
        res.result.length !== 0 && this.getTotalPrice(res);
      });
  }

  getTotalPrice = res => {
    let totalSum = 0;
    let delivery = 0;
    let discount = 0;
    let userId = "";
    res.result.forEach(
      data =>
        (totalSum +=
          (data.discount === 0
            ? data.price
            : data.price - (data.discount / 100) * data.price) * data.quantity)
    );
    const result = res.result.map(el => el.deliveryprice);

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
  };
  goToMyPage = () => {
    const orderId = this.state.productList[0].order_id;
    fetch(`${URL}/order/cart`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      method: "post",
      body: JSON.stringify({
        order_id: orderId,
      }),
    });
  };

  removeProduct = async (e, index) => {
    const target = this.state.productList[index].product_id;
    await fetch(`${URL}/order/cart/${target}`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      method: "DELETE",
    });

    this.setState({
      productList: this.state.productList.filter(
        el => el.product_id !== parseInt(e.target.value)
      ),
    });
  };
  render() {
    const deliveryStat = this.state.totalPrice >= 3000 ? 0 : 3000;
    return this.state.productList.length === 0 ? (
      <ShoppingNone />
    ) : (
      <main className="shoppingProduct">
        <div className="menu">
          <div className="information">????????????</div>
          <div className="option">??????</div>
          <div className="price">????????????</div>
          <div className="delivery">?????????</div>
        </div>
        {this.state.productList.map((product, index) => {
          return (
            <ShoppingProductList
              id={product.product_id}
              img={product.image}
              name={product.name}
              price={product.price}
              discount={product.discount}
              quantity={product.quantity}
              deliveryPrice={product.deliveryprice}
              handleClick={e => {
                this.removeProduct(e, index);
              }}
            />
          );
        })}
        <div className="shoppingProductListTotal">
          <div className="totalLeft">
            <div className="totalLeftL">
              <div className="totalLeftPrice">
                <div className="totalAmountPrice">??? ????????????</div>
                <div className="totalPrice">{this.state.totalPrice}???</div>
              </div>
              <div className="totalLeftPlus">
                <AiOutlinePlus size="20" color="gray" />
              </div>
            </div>
            <div className="totalLeftR">
              <div className="totalLeftRDelivery">?????????</div>
              <div className="totalLeftRPrice">{deliveryStat}???</div>
            </div>
            <div className="totalLeftMinus">
              <AiOutlineMinus size="20" color="gray" />
            </div>
            <div>
              <div className="totalLeftDiscount">?????? ????????????</div>
              <div className="totalLeftDiscountPrice">
                {this.state.discountPrice}???
              </div>
            </div>
          </div>
          <div className="totalRight">
            <div className="totalRightR">
              <div className="totalPrice">??? ????????????</div>
              <div className="totalPriceInt">
                {this.state.totalPrice +
                  deliveryStat -
                  this.state.discountPrice}
                ???
              </div>
            </div>
          </div>
        </div>
        <div className="shoppingProductButton">
          <div className="buttonL">
            <button className="left">?????? ????????????</button>
          </div>
          <div>
            <button className="buttonR" onClick={this.goToMyPage}>
              ????????????
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ShoppingProduct;
