import React, { Component } from "react";
import "./Price.scss";

class Price extends Component {
  render() {
    const { selectList } = this.props;
    let totalCount = 0;
    let totalPrice = 0;
    selectList.map(select => {
      totalCount += select.count;
      totalPrice += select.price * select.count;
    });
    return (
      <div className="show-price">
        <div className="price-title">
          <span>
            총 상품 금액
            <button>?</button>
          </span>
        </div>
        <div className="price-count">
          <span>총 수량 {totalCount}개</span>
          <strong>{Number(totalPrice).toLocaleString()}원</strong>
        </div>
      </div>
    );
  }
}

export default Price;
