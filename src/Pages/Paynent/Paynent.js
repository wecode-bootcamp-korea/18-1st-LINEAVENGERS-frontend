import React, { Component } from "react";
import "./Paynent.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiScissors } from "react-icons/fi";
export class Paynent extends Component {
  render() {
    return (
      <div className="paynent">
        <header className="header">header</header>
        <section className="container">
          <div className="order_header">
            <h3 className="order_payment">
              <span className="blind">주문/결제</span>
            </h3>
            <div className="rightProcess">
              <ol className="process">
                <li className="pro">장바구니</li>
                <span className="rowIcon">
                  <RiArrowRightSLine />
                </span>
                <li className="pro2">주문/결제</li>
                <span className="rowIcon">
                  <RiArrowRightSLine />
                </span>
                <li className="pro">완료</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="order_content">
          <div className="product">
            <div className="productHeader">
              <div className="InfoMenu">
                <div className="shopMenu">
                  <ul>
                    <li className="info">상품정보</li>
                    <li className="seller">판매자</li>
                    <li className="shipping">배송비</li>
                    <li className="quantity">수량</li>
                    <li className="sale">할인</li>
                    <li className="goods">상품금액(할인포함)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="fiScissors">
            <FiScissors />
          </span>
        </div>
        {/* <footer className="footer">footer</footer> */}
      </div>
    );
  }
}

export default Paynent;
